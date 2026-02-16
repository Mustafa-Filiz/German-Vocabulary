import { WordWhereInput } from "@/app/generated/prisma/models";
import prisma from "@/lib/prisma";
import { Category, Level } from "@/types";
import { cacheTag } from "next/cache";

export async function getWords({
  category,
  level,
}: {
  category?: Category;
  level?: Level;
}) {
  "use cache";
  cacheTag(`words-${category}-${level}`);

  const queryWhereOptions: WordWhereInput = {
    ...(category && { category }),
    ...(level && { level }),
  };

  const words = await prisma.word.findMany({
    ...(Object.keys(queryWhereOptions).length > 0 && {
      where: queryWhereOptions,
    }),
  });

  return words;
}
