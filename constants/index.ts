import { Category, Word } from "@/types";

export const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;

export const GERMAN_VOCAB_CATEGORIES: Record<Category, string> = {
  personal_info: "Personal Info",
  family: "Family",
  home: "Home",
  daily_routine: "Daily Routine",
  shopping: "Shopping",
  food_drink: "Food & Drink",
  health: "Health",
  transport: "Transport",
  weather_nature: "Weather & Nature",
  hobby_free_time: "Hobby & Free Time",
  work_job: "Work & Job",
  education: "Education",
  technology: "Technology",
} as const;

export const GERMAN_VOCAB_CATEGORIES_ARRAY = Object.entries(
  GERMAN_VOCAB_CATEGORIES,
).map(([value, label]) => ({ value, label }));

export const ARTICLE_COLORS: Record<NonNullable<Word["article"]>, string> = {
  der: "text-sky-600",
  die: "text-rose-600",
  das: "text-emerald-600",
};
