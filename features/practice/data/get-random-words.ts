import prisma from "@/lib/prisma";
import { Word } from "@/types";

export async function getRandomWords() {
  const words = await prisma.$queryRaw<
    Word[]
  >`SELECT * FROM "word" ORDER BY RANDOM() LIMIT 10;`;

  return words;
}
