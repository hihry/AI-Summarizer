# 🧠 AI Study Companion

> A full-stack Next.js application that uses Generative AI to transform raw notes into interactive study materials (Quizzes, Flashcards, and Summaries).
>
> ### 🚀 **Live Demo:** [AI Learning Companion - Transform Your Study Notes](https://your-project-name.vercel.app)

![Project Banner](https://via.placeholder.com/1200x600/0f172a/38bdf8?text=AI+Study+Companion+Demo)
*(Tip: Replace this link with a real screenshot of your app)*

## ✨ Features

- **⚡ Real-Time Streaming:** Uses the Vercel AI SDK and Edge Runtime to stream summaries instantly, reducing perceived latency.
- **🃏 Dynamic Flashcards:** Automatically parses unstructured text into valid JSON to generate flip-card study sets.
- **📝 Interactive Quizzes:** Generates multiple-choice quizzes with immediate feedback and scoring logic.
- **📄 PDF Export:** Bundles all generated materials into a downloadable PDF study guide using `@react-pdf/renderer`.
- **💾 State Persistence:** Uses **Zustand** for global state management to synchronize data across different study modes.

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS & Shadcn/UI
- **AI Integration:** Vercel AI SDK & OpenRouter (Mistral/Llama models)
- **State Management:** Zustand
- **Deployment:** Vercel Serverless & Edge Functions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- An API Key from [OpenRouter](https://openrouter.ai/) (or OpenAI)

### Installation

1. **Clone the repo**
   ```bash
   git clone [https://github.com/yourusername/ai-study-companion.git](https://github.com/yourusername/ai-study-companion.git)
   cd ai-study-companion
   npm install
   OPENROUTER_API_KEY=your_api_key_here
   npm run dev
   ```

   
## 💡 How It Works

Input: The user pastes lecture notes or text into the main input field.

Processing: The app sends the text to an LLM (Large Language Model) via Edge Functions.

Streaming: - The Summary is streamed token-by-token for immediate readability.

Quizzes & Flashcards are requested as structured JSON data, parsed safely using a robust custom parser to prevent application crashes.

Study: The user can flip through flashcards, take the quiz, or download a comprehensive PDF guide.


## 🧠 Engineering Challenges Solved

JSON Hallucinations: Implemented a robust parsing logic (try/catch with substring extraction) to handle cases where the LLM wraps JSON in Markdown code blocks or adds conversational text.

Vercel Timeouts: Migrated AI routes to the Edge Runtime to bypass the standard 10-second serverless timeout limit on the free tier.

Type Safety: utilized TypeScript interfaces strictly across the API and Frontend to ensure the AI's output matches the UI's expected data shape.

### Why this is relevant
I've selected a video that walks through polishing a similar Next.js AI project, specifically focusing on the deployment and "finishing touches" aspect which reinforces the steps we just took.

[Final Polish & Deployment for Next.js AI Apps](https://www.youtube.com/watch?v=rekD98llX10)

*(This video covers using Sonner toasts and final UI tweaks in a Next.js environment, matching your exact tech stack needs.)*



http://googleusercontent.com/youtube_content/0
