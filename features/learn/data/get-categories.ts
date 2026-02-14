import prisma from "@/lib/prisma";
import { cacheTag } from "next/cache";

export async function getCategories() {
  "use cache";
  cacheTag("categories");

  const response = [];
  const categories = await prisma.word.groupBy({
    by: ["category"],
    _count: { id: true },
    where: {
      category: { not: undefined },
    },
    orderBy: {
      category: "asc",
    },
  });

  for (const cat of categories) {
    if (cat.category) {
      response.push({
        categoryTitle: cat.category,
        wordCount: cat._count.id,
      });
    }
  }

  return response;
}
