import { Category, Word } from "@/types";

export const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;

export const GERMAN_VOCAB_CATEGORIES: Record<Category, string> = {
  PERSONAL_INFO: "Personal Info",
  FAMILY: "Family",
  HOME: "Home",
  DAILY_ROUTINE: "Daily Routine",
  SHOPPING: "Shopping",
  FOOD_DRINK: "Food & Drink",
  HEALTH: "Health",
  TRANSPORT: "Transport",
  WEATHER_NATURE: "Weather & Nature",
  HOBBY_FREE_TIME: "Hobby & Free Time",
  WORK_JOB: "Work & Job",
  EDUCATION: "Education",
  TECHNOLOGY: "Technology",
} as const;

export const GERMAN_VOCAB_CATEGORIES_ARRAY = Object.entries(
  GERMAN_VOCAB_CATEGORIES,
).map(([value, label]) => ({ value, label }));

export const ARTICLE_COLORS: Record<NonNullable<Word["article"]>, string> = {
  der: "text-sky-600",
  die: "text-rose-600",
  das: "text-emerald-600",
};
