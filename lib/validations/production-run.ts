import { z } from "zod";

export const createProductionRunSchema = z.object({
  machine_id: z.number().int().positive("Machine is required"),
  finished_good_sku: z.string().min(1, "Finished good is required"),
  target_quantity: z
    .number()
    .int()
    .positive("Target quantity must be greater than 0"),
  planned_start_time: z.string().min(1, "Planned start time is required"),
  shift: z.enum(["morning", "night"], {
    errorMap: () => ({ message: "Shift must be morning or night" }),
  }),
});

export type CreateProductionRunInput = z.infer<typeof createProductionRunSchema>;
