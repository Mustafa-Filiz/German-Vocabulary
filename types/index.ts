import z from "zod";

export const articleEnum = z.enum(["der", "die", "das"]);
export type Article = z.infer<typeof articleEnum>;

export const wordTypeEnum = z.enum(["noun", "verb", "adjective", "adverb"]);
export type WordType = z.infer<typeof wordTypeEnum>;

export const levelEnum = z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]);
export type Level = z.infer<typeof levelEnum>;

export const categoryEnum = z.enum([
  "PERSONAL_INFO",
  "FAMILY",
  "HOME",
  "DAILY_ROUTINE",
  "SHOPPING",
  "FOOD_DRINK",
  "HEALTH",
  "TRANSPORT",
  "WEATHER_NATURE",
  "HOBBY_FREE_TIME",
  "WORK_JOB",
  "EDUCATION",
  "TECHNOLOGY",
]);
export type Category = z.infer<typeof categoryEnum>;

export const wordSchema = z.object({
  id: z.string(),
  term: z.string(),
  article: articleEnum.optional(),
  pluralForm: z.string().optional(),
  wordType: wordTypeEnum,
  definitionEng: z.string(),
  definitionTr: z.string(),
  exampleSentence: z.string(),
  level: levelEnum,
  category: categoryEnum,
  createdAt: z.string(),
});

export type Word = z.infer<typeof wordSchema>;
