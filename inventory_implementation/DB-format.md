### Overview

This design uses **two balance tables** for fast reads and **one append-only ledger** for auditability.

<aside>
✅

**Goal:** Keep dashboards and low-stock alerts fast, while preserving a complete history of inventory changes.

</aside>

---

### 1) Finished goods stock (current balances)

One row per finished good SKU. Updated after production runs and dispatches.

```sql
-- ============================================================
-- 1. FINISHED GOODS STOCK
--    One row per finished good SKU — current quantity on hand.
--    Updated by triggers or application logic after production
--    runs complete or dispatches happen.
-- ============================================================
CREATE TABLE finished_goods_stock (
	sku              TEXT PRIMARY KEY REFERENCES finished_goods(sku),
	quantity_pieces  INTEGER NOT NULL DEFAULT 0,
	quantity_bags    INTEGER NOT NULL DEFAULT 0,
	updated_at       TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE finished_goods_stock ENABLE ROW LEVEL SECURITY;

CREATE POLICY "auth_select" ON finished_goods_stock
FOR SELECT TO authenticated USING (true);

CREATE POLICY "auth_update" ON finished_goods_stock
FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "auth_insert" ON finished_goods_stock
FOR INSERT TO authenticated WITH CHECK (true);
```

---

### 2) Raw material stock (current balances)

One row per production material SKU. Tracks both kg and bags.

```sql
-- ============================================================
-- 2. RAW MATERIAL STOCK
--    One row per production_materials SKU — current kg and
--    bags on hand.
-- ============================================================
CREATE TABLE raw_material_stock (
	material_sku    TEXT PRIMARY KEY REFERENCES production_materials(sku),
	quantity_kg     NUMERIC(12,2) NOT NULL DEFAULT 0,
	quantity_bags   INTEGER NOT NULL DEFAULT 0,
	updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE raw_material_stock ENABLE ROW LEVEL SECURITY;

CREATE POLICY "auth_select" ON raw_material_stock
FOR SELECT TO authenticated USING (true);

CREATE POLICY "auth_update" ON raw_material_stock
FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "auth_insert" ON raw_material_stock
FOR INSERT TO authenticated WITH CHECK (true);
```

---

### 3) Stock movements (append-only ledger)

Every change to stock is logged here. Never update or delete rows.

**Key fields**

- `item_type`: `finished_good` or `raw_material`
- `direction`: `in` adds stock, `out` removes stock

**Reason examples**

- `raw_material` + `in` → `purchase`
- `raw_material` + `out` → `production_consumption`
- `finished_good` + `in` → `production_output`
- `finished_good` + `out` → `dispatch`, `damage`, `adjustment`
- Either + `in/out` → `adjustment` (manual correction)

```sql
-- ============================================================
-- 3. STOCK MOVEMENTS (ledger)
--    Append-only log of every stock change. Each row records
--    what moved, how much, why, and who did it.
-- ============================================================
CREATE TABLE stock_movements (
	id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	item_type        TEXT NOT NULL CHECK (item_type IN ('finished_good', 'raw_material')),
	item_sku         TEXT NOT NULL,
	direction        TEXT NOT NULL CHECK (direction IN ('in', 'out')),
	reason           TEXT NOT NULL,
	quantity_pieces  INTEGER,          -- for finished goods
	quantity_bags    INTEGER,          -- for either
	quantity_kg      NUMERIC(12,2),     -- for raw materials
	reference_id     UUID,             -- optional: links to production_runs.id or a purchase order
	notes            TEXT,
	created_by       UUID NOT NULL REFERENCES auth.users(id),
	created_at       TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE stock_movements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "auth_select" ON stock_movements
FOR SELECT TO authenticated USING (true);

CREATE POLICY "auth_insert" ON stock_movements
FOR INSERT TO authenticated WITH CHECK (true);

-- Index for fast lookups by item
CREATE INDEX idx_stock_movements_item ON stock_movements (item_type, item_sku);

-- Index for finding movements tied to a production run
CREATE INDEX idx_stock_movements_ref ON stock_movements (reference_id)
WHERE reference_id IS NOT NULL;
```

---

### 4) Seed initial stock rows (zero balances)

Ensures every SKU has a row ready to update.

```sql
-- ============================================================
-- 4. SEED INITIAL STOCK ROWS (zero balances)
--    So every SKU has a row ready to update.
-- ============================================================
INSERT INTO finished_goods_stock (sku, quantity_pieces, quantity_bags)
SELECT sku, 0, 0
FROM finished_goods
ON CONFLICT (sku) DO NOTHING;

INSERT INTO raw_material_stock (material_sku, quantity_kg, quantity_bags)
SELECT sku, 0, 0
FROM production_materials
ON CONFLICT (material_sku) DO NOTHING;
```

---

### How the three tables work together

- **Event: Purchase 50 bags of HDPE Blow (1,250 kg)**
    - `stock_movements`: `raw_material`, `hdpe_blow`, `in`, `purchase`, `quantity_bags = 50`, `quantity_kg = 1250`
    - `raw_material_stock`: `hdpe_blow += 1250 kg`, `+= 50 bags`
- **Event: Production run completes**
    - Consumption: `raw_material`, `hdpe_blow`, `out`, `production_consumption`, `quantity_kg = 600`, `reference_id = run_id`
    - Output: `finished_good`, `ELAG-JAR-250-BEI`, `in`, `production_output`, `quantity_pieces = 10000`, `reference_id = run_id`
    - Stock tables update accordingly
- **Event: Dispatch 5,000 jars to customer**
    - `stock_movements`: `finished_good`, `ELAG-JAR-250-BEI`, `out`, `dispatch`, `quantity_pieces = 5000`
    - `finished_goods_stock`: `-= 5000 pcs`
- **Event: Manual stock correction**
    - `stock_movements`: `in/out`, `adjustment`, `notes = "Physical count mismatch"`
    - Stock tables update accordingly

---

### Design rationale

- **`finished_goods_stock` / `raw_material_stock`** are your *current balance* tables: one row per SKU, cheap to query for dashboards and low-stock alerts.
- **`stock_movements`** is the *append-only ledger*: full audit trail of who changed what, when, and why. You can always rebuild balances by replaying movements.
- `reference_id` links movements back to the production run (or a future purchase order).
- Balance updates happen in application logic (or triggers if preferred), not implicitly on `stock_movements` insert, so you keep control over business rules.