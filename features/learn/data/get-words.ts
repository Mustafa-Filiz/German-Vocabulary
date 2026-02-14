import prisma from "@/lib/prisma";
import { Category } from "@/types";
import { cacheTag } from "next/cache";

export async function getWords(category: Category) {
  "use cache";
  cacheTag(`words-${category}`);

  let queryOptions = {};

  if (category) {
    queryOptions = {
      where: {
        category: category,
      },
    };
  }

  const words = await prisma.word.findMany({
    ...queryOptions,
  });

  return words;
}
