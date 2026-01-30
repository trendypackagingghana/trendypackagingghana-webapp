import { PRODUCTION_CONSTANTS } from "@/lib/constants/production";

export interface FinishedGoodSnapshot {
  pieces_per_hour: number;
  weight: string | number; // e.g. "60g" or 60
  masterbatch_percentage: string | number; // e.g. "2%" or 2
}

export interface ProductionRunExpected {
  pieces_per_hour: number;
  weight_grams: number;
  masterbatch_pct: number;
  expected_hours: number;
  expected_raw_kg: number;
  expected_masterbatch_kg: number;
  expected_labour_cost: number;
  expected_material_cost: number;
}

function parseGrams(weight: string | number): number {
  if (typeof weight === "number") return weight;
  return parseInt(weight, 10) || 0;
}

function parsePercentage(pct: string | number): number {
  if (typeof pct === "number") return pct;
  return parseFloat(pct) || 0;
}

export function calculateExpectedValues(
  targetQuantity: number,
  good: FinishedGoodSnapshot
): ProductionRunExpected {
  const {
    OPERATORS_PER_MACHINE,
    LABOUR_COST_PER_HOUR,
    RAW_COST_PER_KG,
    MASTERBATCH_COST_PER_KG,
  } = PRODUCTION_CONSTANTS;

  const weightGrams = parseGrams(good.weight);
  const mbPct = parsePercentage(good.masterbatch_percentage);

  const expected_hours = targetQuantity / good.pieces_per_hour;
  const expected_raw_kg = targetQuantity * (weightGrams / 1000);
  const expected_masterbatch_kg = expected_raw_kg * (mbPct / 100);
  const expected_labour_cost =
    expected_hours * OPERATORS_PER_MACHINE * LABOUR_COST_PER_HOUR;
  const expected_material_cost =
    expected_raw_kg * RAW_COST_PER_KG +
    expected_masterbatch_kg * MASTERBATCH_COST_PER_KG;

  return {
    pieces_per_hour: good.pieces_per_hour,
    weight_grams: weightGrams,
    masterbatch_pct: mbPct,
    expected_hours: Math.round(expected_hours * 100) / 100,
    expected_raw_kg: Math.round(expected_raw_kg * 100) / 100,
    expected_masterbatch_kg: Math.round(expected_masterbatch_kg * 100) / 100,
    expected_labour_cost: Math.round(expected_labour_cost * 100) / 100,
    expected_material_cost: Math.round(expected_material_cost * 100) / 100,
  };
}
