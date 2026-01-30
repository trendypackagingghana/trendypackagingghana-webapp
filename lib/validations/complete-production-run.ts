import { z } from "zod";

export const completeProductionRunSchema = z.object({
  completed_at: z.string().min(1, "Date completed is required"),
  actual_shift: z.enum(["morning", "night"], {
    errorMap: () => ({ message: "Shift must be morning or night" }),
  }),
  actual_pieces: z
    .number()
    .int("Pieces must be a whole number")
    .positive("Pieces must be greater than 0"),
  actual_raw_kg: z
    .number()
    .positive("Raw material must be greater than 0"),
  actual_masterbatch_kg: z
    .number()
    .positive("Masterbatch must be greater than 0"),
});

export type CompleteProductionRunInput = z.infer<typeof completeProductionRunSchema>;
