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
    "article": "String (The correct article for the term, e.g., 'der', 'die', 'das' for nouns)",
    "pluralForm": "String (The plural form of the term, if applicable)",
    "wordType": "String (The type of the word, e.g., 'noun', 'verb', 'adjective', 'adverb')",
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
  let createdWords: Word[] = [];

  try {
    createdWords = await prisma.word.createManyAndReturn({
      data: words.map((word) => ({
        term: word.term,
        article: word.article,
        pluralForm: word.pluralForm,
        wordType: word.wordType,
        definitionTr: word.definitionTr,
        definitionEng: word.definitionEng,
        exampleSentence: word.exampleSentence,
        category: word.category,
        level: word.level,
      })),
      skipDuplicates: true, // This will skip any words that already exist in the database
    });
  } catch (error) {
    console.error("Error creating words:", error);
  }

  return NextResponse.json(createdWords);
}
