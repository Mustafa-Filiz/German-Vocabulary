import { GoogleGenAI } from "@google/genai";
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export const askGemini = async (contents: string) => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents,
  });

  return response.text;
};
