// import { openrouter } from "@/lib/ai";
// import { NextRequest } from "next/server";
// import { generateText } from "ai";

// export async function POST(req: NextRequest) {
//   const { text } = await req.json();

//   const { text: raw } = await generateText({
//     model: openrouter("mistralai/mistral-small-creative"),
//     prompt: `Create a 5-question multiple-choice quiz in JSON array format ONLY:
// [
//   { "question": "...", "options": ["A","B","C","D"], "answer": 1 },
//   ...
// ]
// Based ONLY on text below:\n${text}`
//   });

//   return Response.json({ quiz: (raw) });
// }

import { openrouter } from "@/lib/ai";
import { NextRequest } from "next/server";
import { generateText } from "ai";

export const runtime = 'edge';
export async function POST(req: NextRequest) {
  const { text } = await req.json();

  const { text: raw } = await generateText({
    model: openrouter("mistralai/mistral-small-creative"),
    // Added explicit instruction to ensure strictly valid JSON
    prompt: `Create a 5-question multiple-choice quiz based ONLY on the text below.
    
    Return the result as a raw JSON Array with no Markdown formatting, no code blocks, and no intro text.
    Format:
    [
      { "question": "Question text", "options": ["Option A", "Option B", "Option C", "Option D"], "answer": 0 }
    ]
    (Note: 'answer' should be the index of the correct option: 0, 1, 2, or 3)

    Text to quiz:
    ${text}`
  });

  try {
    // 1. Clean the output: Remove markdown code blocks (```json ... ```)
    const cleaned = raw.replace(/```json/g, '').replace(/```/g, '').trim();

    // 2. Parse the string into an actual JavaScript Array
    const quizArray = JSON.parse(cleaned);

    // 3. Return the Array (not the string!)
    return Response.json({ quiz: quizArray });

  } catch (error) {
    console.error("JSON Parsing Error:", error);
    // Fallback if AI creates bad JSON
    return Response.json({ quiz: [] }, { status: 500 });
  }
}

// import { NextRequest } from "next/server";
// import { hfPost } from "@/lib/hf";

// export async function POST(req: NextRequest) {
//   const { text } = await req.json();

//   const prompt = `Create 5 multiple-choice questions from this content.
// Return ONLY valid JSON:
// [
//   {"question":"...", "options":["A","B","C","D"], "answer":1},
//   ...
// ]
// CONTENT:
// ${text}`;

//   const result = await hfPost("mistralai/Mixtral-8x7B-Instruct-v0.1", {
//     inputs: prompt,
//     parameters: { max_new_tokens: 350 },
//   });

//   let quiz = [];
//   try {
//     quiz = JSON.parse(result?.[0]?.generated_text || "[]");
//   } catch {
//     quiz = [];
//   }

//   return Response.json({ quiz });
// }
