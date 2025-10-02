import { prisma } from "@/lib/db";

import { createFeedbackInput } from "../utils/create-feedback-schema";
import { api } from "@/lib/api-client";

const createFeedback = ({
  data,
}: {
  data: createFeedbackInput;
}): Promise<typeof prisma.feedback> => {
  return api.post("/feedback", data);
};

export { createFeedback };
