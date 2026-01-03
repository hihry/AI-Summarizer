// // import { openrouter } from "@/lib/ai";
// // import { NextRequest } from "next/server";
// // import { generateText } from "ai";

// // export async function POST(req: NextRequest) {
// //   const { text } = await req.json();

// //   const { text: raw } = await generateText({
// //     model: openrouter("mistralai/devstral-2512:free"),
// //     prompt: `Create educational flashcards from this content.
// // Format JSON array:
// // [
// //   { "front": "Term", "back": "Definition" }
// // ]
// // Content:\n${text}`
// //   });

// //   console.log(text)
// //   return Response.json({ cards: (raw) });
// // }

// import { openrouter } from "@/lib/ai";
// import { NextRequest } from "next/server";
// import { generateText } from "ai";

// export async function POST(req: NextRequest) {
//   const { text } = await req.json();

//   const { text: raw } = await generateText({
//     model: openrouter("mistralai/mistral-small-creative"),
//     prompt: `Create 10 flashcards based on the text below.
//     Return ONLY a JSON Array. No markdown code blocks, no introduction.
//     Format: [{"front": "Question/Term", "back": "Answer/Definition"}, ...]
    
//     Text: ${text}`
//   });

//   try {
//     // 1. Clean the output (remove ```json and ```)
//     const cleaned = raw.replace(/```json/g, '').replace(/```/g, '').trim();
    
//     // 2. Parse string to Array
//     const cardsArray = JSON.parse(cleaned);

//     // 3. Return object with 'cards' property to match frontend expectation
//     return Response.json({ cards: cardsArray });
    
//   } catch (error) {
//     console.error("Flashcard Parsing Error:", error);
//     return Response.json({ cards: [] }, { status: 500 });
//   }
// }

// // import { NextRequest } from "next/server";
// // import { hfPost } from "@/lib/hf";

// // export async function POST(req: NextRequest) {
// //   const { text } = await req.json();

// //   const prompt = `Create 5 flashcards from this content.
// // Return ONLY JSON like:
// // [
// //   {"front": "Term", "back": "Meaning"},
// //   ...
// // ]
// // CONTENT:
// // ${text}`;

// //   const result = await hfPost("mistralai/Mixtral-8x7B-Instruct-v0.1", {
// //     inputs: prompt,
// //     parameters: { max_new_tokens: 300 },
// //   });

// //   let cards = [];
// //   try {
// //     cards = JSON.parse(result?.[0]?.generated_text || "[]");
// //   } catch {
// //     cards = [];
// //   }

// //   return Response.json({ cards });
// // }


import { openrouter } from "@/lib/ai";
import { NextRequest } from "next/server";
import { generateText } from "ai";

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();

    const { text: raw } = await generateText({
      model: openrouter("mistralai/mistral-small-creative"),
      prompt: `Create 10 flashcards based on the text below.
      
      CRITICAL INSTRUCTIONS:
      1. Return ONLY a valid JSON Array. 
      2. Do NOT add any introduction, explanation, or conclusion text.
      3. Use double quotes " for all keys and values.
      4. Ensure there are no trailing commas.
      
      Format: [{"front": "Question", "back": "Answer"}, {"front": "Term", "back": "Definition"}]
      
      Text to process:
      ${text}`
    });

    console.log("AI Raw Output:", raw); // Debugging: See exactly what the AI sent

    // --- ROBUST JSON PARSING ---
    // 1. Find the start and end of the JSON array
    const firstBracket = raw.indexOf('[');
    const lastBracket = raw.lastIndexOf(']');

    if (firstBracket === -1 || lastBracket === -1) {
      throw new Error("No JSON array found in AI response");
    }

    // 2. Extract ONLY the JSON part (ignores "Here is your code..." text)
    const jsonString = raw.substring(firstBracket, lastBracket + 1);

    // 3. Parse safely
    const cardsArray = JSON.parse(jsonString);

    return Response.json({ cards: cardsArray });

  } catch (error) {
    console.error("Flashcard Error:", error);
    // Return a safe fallback so the frontend doesn't crash
    return Response.json({ 
      cards: [{ front: "Error generating cards", back: "Please try again." }] 
    }); 
  }
}