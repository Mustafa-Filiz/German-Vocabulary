import prisma from "@/lib/prisma";
import { cacheTag } from "next/cache";

export async function getLevels() {
  "use cache";
  cacheTag("levels");

  const response = [];
  const levels = await prisma.word.groupBy({
    by: ["level"],
    _count: { id: true },
    where: {
      level: { not: undefined },
    },
    orderBy: {
      level: "asc",
    },
  });

  for (const cat of levels) {
    if (cat.level) {
      response.push({
        level: cat.level,
        wordCount: cat._count.id,
      });
    }
  }

  return response;
}
