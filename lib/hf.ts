// export async function hfPost(model: string, payload: any) {
//   const res = await fetch(`https://router.huggingface.co/models/${model}
// `, {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(payload),
//   });

//   return res.json();
// }

// import { InferenceClient } from "@huggingface/inference";

// export const hfPost = new InferenceClient(process.env.HF_TOKEN);