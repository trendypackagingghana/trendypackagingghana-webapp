import { PRODUCTION_CONSTANTS } from "@/lib/constants/production";

export interface ActualCosts {
  actual_labour_cost: number;
  actual_material_cost: number;
}

export function calculateActualCosts(
  actualPieces: number,
  piecesPerHour: number,
  actualRawKg: number,
  actualMasterbatchKg: number
): ActualCosts {
  const {
    OPERATORS_PER_MACHINE,
    LABOUR_COST_PER_HOUR,
    RAW_COST_PER_KG,
    MASTERBATCH_COST_PER_KG,
  } = PRODUCTION_CONSTANTS;

  const actualHours = actualPieces / piecesPerHour;
  const actual_labour_cost =
    actualHours * OPERATORS_PER_MACHINE * LABOUR_COST_PER_HOUR;
  const actual_material_cost =
    actualRawKg * RAW_COST_PER_KG +
    actualMasterbatchKg * MASTERBATCH_COST_PER_KG;

  return {
    actual_labour_cost: Math.round(actual_labour_cost * 100) / 100,
    actual_material_cost: Math.round(actual_material_cost * 100) / 100,
  };
}
