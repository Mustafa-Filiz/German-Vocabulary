import prisma from "@/lib/prisma";

export async function getRandomWords() {
  const response = prisma.word.findMany({
    take: 20,
    orderBy: {
      level: "asc",
    },
  });

  return response;
}
