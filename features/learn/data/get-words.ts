import { typedFetch } from "@/lib/typed-fetch";
import { wordSchema } from "@/types";

export async function getWords() {
  return await typedFetch("/api/get-words", wordSchema.array());
}
