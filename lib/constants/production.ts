/**
 * Production Run Cost Constants
 *
 * Placeholder values — update to actual rates or
 * move to a database config table later.
 */

export const PRODUCTION_CONSTANTS = {
  /** Number of operators per machine shift */
  OPERATORS_PER_MACHINE: 2,

  /** Labour cost per operator per hour (local currency) */
  LABOUR_COST_PER_HOUR: 25,

  /** Raw material cost per kg */
  RAW_COST_PER_KG: 1.5,

  /** Masterbatch cost per kg */
  MASTERBATCH_COST_PER_KG: 5.0,
} as const;
