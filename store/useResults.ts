// import { create } from "zustand";

// interface ResultState {
//   notes: string;
//   summary: string;
//   flashcards: { front: string; back: string }[];
//   quiz: { question: string; options: string[]; answer: number }[];
//   simplified: string;
//   setLocalNotes: (v: string) => void;
//   setSummary: (v: string) => void;
//   setFlashcards: (v: any[]) => void;
//   setQuiz: (v: any[]) => void;
//   setSimplified: (v: string) => void;
// }

// export const useResults = create<ResultState>((set) => ({
//   notes: "",
//   summary: "",
//   flashcards: [],
//   quiz: [],
//   simplified: "",
//   setLocalNotes: (v) => set({ notes: v }),
//   setSummary: (v) => set({ summary: v }),
//   setFlashcards: (v) => set({ flashcards: v }),
//   setQuiz: (v) => set({ quiz: v }),
//   setSimplified: (v) => set({ simplified: v }),
// }));

import { create } from "zustand";

// Define the types outside so we can reuse them if needed
export interface Flashcard {
  front: string;
  back: string;
}

export interface QuizItem {
  question: string;
  options: string[];
  answer: number;
}

interface ResultState {
  notes: string;
  summary: string;
  flashcards: Flashcard[]; // used specific type
  quiz: QuizItem[];        // used specific type
  simplified: string;
  
  setNotes: (v: string) => void;
  setSummary: (v: string) => void;
  setFlashcards: (v: Flashcard[]) => void; // changed from any[]
  setQuiz: (v: QuizItem[]) => void;        // changed from any[]
  setSimplified: (v: string) => void;
  reset: () => void; // Added reset
}

export const useResults = create<ResultState>((set) => ({
  notes: "",
  summary: "",
  flashcards: [],
  quiz: [],
  simplified: "",
  
  setNotes: (v) => set({ notes: v }),
  setSummary: (v) => set({ summary: v }),
  setFlashcards: (v) => set({ flashcards: v }),
  setQuiz: (v) => set({ quiz: v }),
  setSimplified: (v) => set({ simplified: v }),
  
  // Resets all state to initial values
  reset: () => set({ 
    notes: "", 
    summary: "", 
    flashcards: [], 
    quiz: [], 
    simplified: "" 
  }),
}));
