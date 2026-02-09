import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get("category");

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

  return NextResponse.json(words);
}
