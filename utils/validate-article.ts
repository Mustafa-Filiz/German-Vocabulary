import { Article } from "@/types";

export function validateArticle(
  value: string | null | undefined,
): Article | null {
  if (!value) return null;

  const normalized = value.trim().toLowerCase();
  const validArticles: Article[] = ["der", "die", "das"];

  return validArticles.includes(normalized as Article)
    ? (normalized as Article)
    : null;
}
