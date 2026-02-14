import { askGemini } from "@/lib/gemini";
import prisma from "@/lib/prisma";
import { Word } from "@/types";
import { validateArticle } from "@/utils/validate-article";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();

  const amount = data.amount;
  const levels = data.levels;
  const categories = data.categories;

  const prompt = `Act as a German language education API. Generate a list of ${amount} German vocabulary words for the proficiency levels "${levels}" focused on the categories "${categories}".

    You must output the response strictly as a raw JSON array of objects. Do not include markdown formatting, introduction text, or explanations.

    IMPORTANT: Do NOT generate only nouns. You MUST include verbs, adjectives, and adverbs in the output. 
    Generate diverse word types for a complete vocabulary learning experience.

    IMPORTANT: Generate diverse categories for a complete vocabulary learning experience.

    Each object in the array must adhere to this exact schema:
    {
    "term": "String (The German word or phrase without the article)",
    "article": "String (ONLY for nouns: exactly 'der', 'die', or 'das' in lowercase. For all other word types, use empty string '')",
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
  console.log("🚀 ~ POST ~ words:", words);
  let createdWords: Word[] = [];

  try {
    createdWords = await prisma.word.createManyAndReturn({
      data: words.map((word) => ({
        term: word.term,
        article: validateArticle(word.article),
        pluralForm: word.pluralForm?.trim() || null,
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
