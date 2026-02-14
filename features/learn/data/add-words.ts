import { typedFetch } from "@/lib/typed-fetch";
import { wordSchema } from "@/types";
import { revalidateCache } from "@/utils/revalidate-cache";

export async function addWords(
  amount: number,
  levels: string[],
  categories: string[],
) {
  const response = await typedFetch("/api/add-words", wordSchema.array(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount, levels, categories }),
  });

  revalidateCache("/learn");

  return response;
}
