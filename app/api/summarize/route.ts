// import { openrouter } from "@/lib/ai";
// import { NextRequest } from "next/server";
// import { streamText } from "ai";
// import { headers } from "next/headers";

// export const runtime = 'edge';
// export async function POST(req: NextRequest) {
//   const { text } = await req.json();

//   // const { textStream }  = streamText({
//   //   model: openrouter("mistralai/mistral-small-creative"),
//   //   prompt: `Summarize this text in 4 concise paragraphs:\n\n${text}`
//   // });

//   const result = streamText({
//     model: openrouter("mistralai/mistral-small-creative"),
//     prompt: `Summarize this text in 4 concise paragraphs:\n\n${text}`
//   });

//   return new Response(result.textStream, {
//     headers: {
//       "Content-Type": "text/plain; charset=utf-8",
//     },
//   })
//   // console.log(Response.json( {summary : textStream}))
//   // return Response.json( {summary : textStream});
//   // return Response.json({ simplified: output });
// }

// import { NextRequest } from "next/server";
// // import { hfPost } from "@/lib/hf";
// import { hfPost } from "@/lib/hf";


// export async function POST(req: NextRequest) {
//   const { text } = await req.json();

//   const result = await hfPost.summarization({
//     model: "facebook/bart-large-cnn", 
//     inputs: text,
//   });
  
//   return Response.json({
//     summary: result ?? "Summary unavailable.",
//   });
//   // ?.[0]?.summary_text
// }

// import { openrouter } from "@/lib/ai";
// import { NextRequest } from "next/server";
// import { streamText } from "ai";

// // 1. Force Edge Runtime (Prevents timeouts on streaming)
// export const runtime = 'edge';

// export async function POST(req: NextRequest) {
//   try {
//     const { text } = await req.json();

//     // 2. Start the Stream
//     const result = await streamText({
//       model: openrouter("mistralai/mistral-small-creative"),
//       prompt: `Summarize the following text in 4 clear, concise paragraphs. Use bolding for key terms.
      
//       Text:
//       ${text}`,
//     });

//     // 3. Return the stream directly (NOT JSON)
//     return new Response(result.textStream, {
//       headers: {
//         "Content-Type": "text/plain; charset=utf-8",
//         "X-Content-Type-Options": "nosniff",
//       },
//     });

//   } catch (error) {
//     console.error("Summary API Error:", error);
//     return Response.json({ error: "Failed to generate summary" }, { status: 500 });
//   }
// }

import { openrouter } from "@/lib/ai";
import { NextRequest } from "next/server";
import { streamText } from "ai";

export const runtime = 'edge'; // Use Edge for better streaming support

export async function POST(req: NextRequest) {
  try {
    // 1. Log that the request hit the server
    console.log("API: /api/summarize called");

    const json = await req.json();
    const { text } = json;

    // 2. Validate Input
    if (!text || text.trim().length === 0) {
      console.error("API Error: No text provided in body");
      return new Response("Error: Text is required", { status: 400 });
    }

    console.log(`API: Processing text of length ${text.length}`);

    // 3. Start the Stream
    const result = await streamText({
      model: openrouter("mistralai/mistral-small-creative"),
      // Added a system prompt to ensure it behaves even with short inputs
      system: "You are a helpful AI summarizer. Output only the summary.",
      prompt: `Summarize this text in 4 clear paragraphs:\n\n${text}`,
    });

    // 4. Return using the SDK's built-in helper
    // This handles headers (Content-Type, etc.) automatically for you
    return result.toTextStreamResponse();

  } catch (error) {
    console.error("Summary API Critical Error:", error);
    return new Response(JSON.stringify({ error: "Server error" }), { 
      status: 500, 
      headers: { "Content-Type": "application/json" } 
    });
  }
}