import { askGemini } from "@/lib/gemini";
import prisma from "@/lib/prisma";
import { Word } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();

  const amount = data.amount;
  const levels = data.levels;
  const categories = data.categories;

  const prompt = `Act as a German language education API. Generate a list of ${amount} German vocabulary words for the proficiency levels "${levels}" focused on the categories "${categories}".

    You must output the response strictly as a raw JSON array of objects. Do not include markdown formatting, introduction text, or explanations.

    Each object in the array must adhere to this exact schema:
    {
    "term": "String (The German word or phrase)",
    "definitionTr": "String (Turkish definition)",
    "definitionEng": "String (English definition)",
    "exampleSentence": "String (A simple German sentence using the term suitable for the requested levels)",
    "category": "String (One of the requested categories)",
    "level": "String (One of the requested levels)"
    }`;

  const geminiResponse = await askGemini(prompt);

  if (!geminiResponse) {
    return NextResponse.json(
      { error: "Failed to generate words from Gemini." },
      { status: 500 },
    );
  }

  const words: Word[] = JSON.parse(geminiResponse);
  const response: Word[] = [];

  for (const word of words) {
    try {
      await prisma.word.create({
        data: {
          term: word.term,
          definitionTr: word.definitionTr,
          definitionEng: word.definitionEng,
          example_sentence: word.exampleSentence,
          category: word.category,
          level: word.level,
        },
      });
      response.push(word);
    } catch (error) {
      console.error("Error saving word to database:", error);
    }
  }

  return NextResponse.json(response);
}
