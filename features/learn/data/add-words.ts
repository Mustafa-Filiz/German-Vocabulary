import { typedFetch } from "@/lib/typed-fetch";
import { wordSchema } from "@/types";
import { useMutation } from "@tanstack/react-query";

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

  return response;
}

export const useAddWords = () => {
  return useMutation({
    mutationFn: ({
      amount,
      levels,
      categories,
    }: {
      amount: number;
      levels: string[];
      categories: string[];
    }) => addWords(amount, levels, categories),
  });
};
