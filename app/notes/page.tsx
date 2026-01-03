"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload, FileText, ArrowRight } from "lucide-react"
import { useState } from "react"
import { useResults } from "@/store/useResults"
import { useRouter } from "next/navigation"

export default function NotesPage() {
  const router = useRouter();
  // const setNotesStore = useResults((s) => s.setNotes);
  // const setSummary = useResults((s) => s.setSummary);
  // const setQuiz = useResults((s) => s.setQuiz);
  // const setFlashcards = useResults((s) => s.setFlashcards);
  // const setSimplified = useResults((s) => s.setSimplified);
  const [Localnotes, setLocalNotes] = useState("")
  const { setNotes, reset } = useResults();
  // const handleProcessNotes = () => {
  //   console.log("Processing notes:", notes)
  //   // Placeholder for processing logic
  // }
  const handleProcessNotes = async () => {
  // if (!notes.trim()) return;

  // // 1️⃣ Save notes to Zustand
  // setNotesStore(notes);
  // console.log(notes)

  // // 2️⃣ Navigate user to loading screen
  // router.push("/processing");

  // // 3️⃣ Start backend calls
  // const [summaryRes, quizRes, flashRes, simpleRes] = await Promise.all([
  //   fetch("/api/summarize", 
  //     { method: "POST", body: JSON.stringify({ text: notes })})
  //     .then(r => r.json()),
  //   fetch("/api/quiz", { method: "POST", body: JSON.stringify({ text: notes })}).then(r => r.json()),
  //   fetch("/api/flashcards", { method: "POST", body: JSON.stringify({ text: notes })}).then(r => r.json()),
  //   fetch("/api/simplify", { method: "POST", body: JSON.stringify({ text: notes })}).then(r => r.json()),
  // ]);

  // // 4️⃣ Save AI results
  // setSummary(summaryRes.summary);
  // setQuiz(quizRes.quiz);
  // setFlashcards(flashRes.cards);
  // setSimplified(simpleRes.simplified);

  // // 5️⃣ Redirect to final page
  // router.push("/summary");

  if (!Localnotes.trim()) return;
  reset();
  setNotes(Localnotes);
  console.log(Localnotes)
  router.push("/summary");
};


  const handleUploadPDF = () => {
    console.log("Upload PDF clicked")
    // Placeholder for PDF upload logic
  }

  return (
    <main className="min-h-screen bg-background px-4 py-16">
      <div className="mx-auto w-full max-w-[700px]">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="mb-3 text-balance font-sans text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Upload Your Notes
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Paste your lecture notes below or upload a PDF. We'll transform them into summaries, quizzes, and
            flashcards.
          </p>
        </div>

        {/* Main Card Container */}
        <Card className="border border-border bg-card p-6 shadow-lg sm:p-8">
          {/* Textarea Section */}
          <div className="mb-6">
            <label htmlFor="notes-input" className="mb-2 block text-sm font-medium text-foreground">
              Your Lecture Notes
            </label>
            <textarea
              id="notes-input"
              value={Localnotes}
              onChange={(e) => setLocalNotes(e.target.value)}
              placeholder="Paste your lecture notes here..."
              className="min-h-[250px] w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all"
            />
            {/* Character Count */}
            <div className="mt-2 text-right text-sm text-muted-foreground">{Localnotes.length} characters</div>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-card px-3 text-muted-foreground">or</span>
            </div>
          </div>

          {/* Upload PDF Button */}
          <button
            onClick={handleUploadPDF}
            className="group mb-6 flex w-full items-center justify-center gap-3 rounded-lg border-2 border-dashed border-border bg-muted/30 px-6 py-8 transition-all hover:border-foreground/30 hover:bg-muted/50 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
              <Upload className="h-6 w-6" />
            </div>
            <div className="text-left">
              <div className="font-medium text-foreground">Upload PDF</div>
              <div className="text-sm text-muted-foreground">Click to browse your files</div>
            </div>
          </button>

          {/* Process Button */}
          <Button
            onClick={handleProcessNotes}
            size="lg"
            disabled={Localnotes.length === 0}
            className="h-12 w-full rounded-lg text-base font-medium shadow-md transition-all hover:scale-[1.02] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
          >
            <FileText className="mr-2 h-5 w-5" />
            Process Notes
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Card>

        {/* Helper Text */}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Your notes are processed securely. We'll generate summaries, quizzes, and flashcards in seconds.
        </p>
      </div>
    </main>
  )
}

// "use client";

// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Upload, FileText, ArrowRight } from "lucide-react";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { useResults } from "@/store/useResults";

// export default function NotesPage() {
//   const [notes, setNotes] = useState("");

//   const router = useRouter();

//   const setNotesStore = useResults((s) => s.setNotes);
//   const setSummary = useResults((s) => s.setSummary);
//   const setQuiz = useResults((s) => s.setQuiz);
//   const setFlashcards = useResults((s) => s.setFlashcards);
//   const setSimplified = useResults((s) => s.setSimplified);

//   const handleProcessNotes = async () => {
//     if (!notes.trim()) return;

//     // Save notes globally
//     setNotesStore(notes);

//     // Navigate immediately to loading screen
//     router.push("/processing");

//     // Call backend AI routes
//     const [summaryRes, quizRes, flashRes, simpleRes] = await Promise.all([
//       fetch("/api/summarize", {
//         method: "POST",
//         body: JSON.stringify({ text: notes }),
//       }).then((r) => r.json()),

//       fetch("/api/quiz", {
//         method: "POST",
//         body: JSON.stringify({ text: notes }),
//       }).then((r) => r.json()),

//       fetch("/api/flashcards", {
//         method: "POST",
//         body: JSON.stringify({ text: notes }),
//       }).then((r) => r.json()),

//       fetch("/api/simplify", {
//         method: "POST",
//         body: JSON.stringify({ text: notes }),
//       }).then((r) => r.json()),
//     ]);

//     // Store results globally
//     setSummary(summaryRes.summary);
//     setQuiz(quizRes.quiz);
//     setFlashcards(flashRes.cards);
//     setSimplified(simpleRes.simplified);

//     // Redirect to summary
//     router.push("/summary");
//   };

//   const handleUploadPDF = () => {
//     console.log("Upload PDF clicked — PDF upload coming soon.");
//   };

//   return (
//     <main className="min-h-screen bg-background px-4 py-16">
//       <div className="mx-auto w-full max-w-[700px]">
//         {/* Header Section */}
//         <div className="mb-8 text-center">
//           <h1 className="mb-3 text-balance font-sans text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
//             Upload Your Notes
//           </h1>
//           <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
//             Paste your lecture notes below or upload a PDF. We'll transform them into summaries, quizzes, and
//             flashcards.
//           </p>
//         </div>

//         {/* Main Card Container */}
//         <Card className="border border-border bg-card p-6 shadow-lg sm:p-8">
//           {/* Textarea Section */}
//           <div className="mb-6">
//             <label htmlFor="notes-input" className="mb-2 block text-sm font-medium text-foreground">
//               Your Lecture Notes
//             </label>
//             <textarea
//               id="notes-input"
//               value={notes}
//               onChange={(e) => setNotes(e.target.value)}
//               placeholder="Paste your lecture notes here..."
//               className="min-h-[250px] w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all"
//             />
//             <div className="mt-2 text-right text-sm text-muted-foreground">{notes.length} characters</div>
//           </div>

//           {/* Divider */}
//           <div className="relative mb-6">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-border"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="bg-card px-3 text-muted-foreground">or</span>
//             </div>
//           </div>

//           {/* Upload PDF Button */}
//           <button
//             onClick={handleUploadPDF}
//             className="group mb-6 flex w-full items-center justify-center gap-3 rounded-lg border-2 border-dashed border-border bg-muted/30 px-6 py-8 transition-all hover:border-foreground/30 hover:bg-muted/50 hover:shadow-md"
//           >
//             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
//               <Upload className="h-6 w-6" />
//             </div>
//             <div className="text-left">
//               <div className="font-medium text-foreground">Upload PDF</div>
//               <div className="text-sm text-muted-foreground">Click to browse your files</div>
//             </div>
//           </button>

//           {/* Process Button */}
//           <Button
//             onClick={handleProcessNotes}
//             size="lg"
//             disabled={notes.length === 0}
//             className="group h-12 w-full rounded-lg text-base font-medium shadow-md transition-all hover:scale-[1.02] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
//           >
//             <FileText className="mr-2 h-5 w-5" />
//             Process Notes
//             <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
//           </Button>
//         </Card>

//         {/* Helper Text */}
//         <p className="mt-6 text-center text-sm text-muted-foreground">
//           Your notes are processed securely. We'll generate summaries, quizzes, and flashcards in seconds.
//         </p>
//       </div>
//     </main>
//   );
// }
