import { typedFetch } from "@/lib/typed-fetch";
import { Category, wordSchema } from "@/types";

export async function getWords(category: Category) {
  const searchParams = new URLSearchParams();
  if (category) {
    searchParams.append("category", category);
  }

  return await typedFetch(
    `/api/get-words?${searchParams.toString()}`,
    wordSchema.array(),
  );
}
