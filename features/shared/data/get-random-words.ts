import prisma from "@/lib/prisma";
import { Word } from "@/types";
import { cacheTag } from "next/cache";

export async function getRandomWords(wordCount: number) {
  "use cache";
  cacheTag(`random-${wordCount.toString()}`);

  const words = await prisma.$queryRaw<
    Word[]
  >`SELECT * FROM "word" ORDER BY RANDOM() LIMIT ${wordCount};`;

  return words;
}
