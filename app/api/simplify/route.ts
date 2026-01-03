// import { openrouter } from "@/lib/ai";
// import { NextRequest } from "next/server";
// import { streamText } from "ai";

// export async function POST(req: NextRequest) {
//   const { text } = await req.json();

//   const { text: output } = await streamText({
//     model: openrouter("nex-agi/deepseek-v3.1-nex-n1:free"),
//     prompt: `Explain this like I'm 12 years old:\n\n${text}`
//   });
//   return Response.json({ simplified: output });
// }

import { openrouter } from "@/lib/ai";
import { NextRequest } from "next/server";
import { generateText } from "ai";

export async function POST(req: NextRequest) {
  const { text } = await req.json();

  const { text: raw } = await generateText({
    model: openrouter("mistralai/mistral-small-creative"),
    prompt: `Explain the following text in simple, easy-to-understand language (like you are teaching a 10-year-old). 
    Use analogies if helpful. Keep it clear and engaging.

    CRITICAL INSTRUCTIONS:
    1. Don't use '#'  and '*', this type of symbols should not be included in the output
    2.Avoid using special characters that look ugly, make it more beautiful
    
    Text to simplify:
    ${text}`
  });

  return Response.json({ simplified: raw });
}

// import { NextRequest } from "next/server";
// import { hfPost } from "@/lib/hf";

// export async function POST(req: NextRequest) {
//   const { text } = await req.json();

//   const result = await hfPost("mistralai/Mixtral-8x7B-Instruct-v0.1", {
//     inputs: `Explain the following like I'm 12 years old:\n\n${text}`,
//     parameters: { max_new_tokens: 250 },
//   });

//   return Response.json({
//     simplified: result?.[0]?.generated_text ?? "No explanation.",
//   });
// }
