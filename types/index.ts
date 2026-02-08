import z from "zod";

export const wordSchema = z.object({
  id: z.string(),
  term: z.string(),
  definitionEng: z.string(),
  definitionTr: z.string(),
  exampleSentence: z.string(),
  level: z.string(),
  category: z.string(),
  createdAt: z.string(),
});

export type Word = z.infer<typeof wordSchema>;
