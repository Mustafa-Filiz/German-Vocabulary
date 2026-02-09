import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
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

  return NextResponse.json({
    categories: categories
      .map((cat) => ({
        categoryTitle: cat.category!,
        wordCount: cat._count.id,
      }))
      .filter(Boolean),
  });
}
