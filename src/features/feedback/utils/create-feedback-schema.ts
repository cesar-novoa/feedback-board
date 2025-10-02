import { z } from "zod";

const createFeedbackSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters." })
    .max(100, { message: "Title must be at most 100 characters." }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters." })
    .max(500, { message: "Description must be at most 500 characters." }),
});

type createFeedbackInput = z.infer<typeof createFeedbackSchema>;

export { createFeedbackSchema, type createFeedbackInput };
