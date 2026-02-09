import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
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

  return NextResponse.json(response);
}
