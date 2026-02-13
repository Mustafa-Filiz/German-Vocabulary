import prisma from "@/lib/prisma";
import { Word } from "@/types";
import { cacheTag } from "next/cache";

export async function getRandomWords() {
  "use cache";
  cacheTag("random-words");

  const words = await prisma.$queryRaw<
    Word[]
  >`SELECT * FROM "word" ORDER BY RANDOM() LIMIT 10;`;

  return words;
}
