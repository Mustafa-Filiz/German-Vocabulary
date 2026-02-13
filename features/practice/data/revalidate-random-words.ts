"use server";

import { revalidateTag } from "next/cache";

export async function revalidateRandomWords() {
  revalidateTag("random-words", "max");
}
