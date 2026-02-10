import prisma from "@/lib/prisma";
import { Category } from "@/types";

export async function getWords(category: Category) {
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
