export type InventoryItemType = "finished_good" | "raw_material";

export interface InventoryItem {
    sku: string;
    name: string;
    category: string;
    current_stock: number;
    unit: string; // 'pcs', 'kg', 'bags', etc.
    status: "In Stock" | "Low Stock" | "Out of Stock";
    stock_id: string; // ID from the stock table
}

export type MovementDirection = "in" | "out";

export interface StockMovement {
    id: string;
    item_type: InventoryItemType;
    item_sku: string;
    direction: MovementDirection;
    reason: string;
    quantity: number; // Display quantity (pieces or kg)
    reference_id?: string;
    created_at: string;
    created_by: string;
}

export interface InventoryStats {
    total_value: number;
    low_stock_count: number;
    finished_goods_count: number;
    raw_materials_mass: number;
}
