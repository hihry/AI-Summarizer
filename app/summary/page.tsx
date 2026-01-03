// "use client"

// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { Copy, Download, ArrowLeft, Brain, ArrowRight, Clock, FileText, TrendingUp, CheckCircle2 } from "lucide-react"
// import { useState, useEffect } from "react"
// import { useResults } from "@/store/useResults"
// import { useRouter } from "next/navigation"

// export default function SummaryPage() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [copied, setCopied] = useState(false)
//   const summary = useResults((s) => s.summary);
//   const router = useRouter()


//   // Handle scroll for sticky header blur effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const handleCopy = () => {
//     setCopied(true)
//     setTimeout(() => setCopied(false), 2000)
//     console.log("Copy clicked")
//   }

//   const handleDownload = () => {
//     console.log("Download clicked")
//   }

//   const handleBack = () => {
//     console.log("Back clicked")
//     router.push('./notes')
//   }

//   const handleGenerateQuiz = () => {
//     console.log("Generate Quiz clicked")
//     router.push('./quiz')
//   }

//   // Mock summary content
//   const summaryContent = {
//     title: "Introduction to Machine Learning",
//     sections: [
//       {
//         heading: "What is Machine Learning?",
//         content:
//           "Machine Learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed. It focuses on developing computer programs that can access data and use it to learn for themselves.",
//       },
//       {
//         heading: "Types of Machine Learning",
//         content:
//           "There are three primary types: Supervised Learning, where models are trained on labeled data; Unsupervised Learning, which finds hidden patterns in unlabeled data; and Reinforcement Learning, where agents learn through trial and error by receiving rewards or penalties.",
//       },
//       {
//         heading: "Key Concepts",
//         content:
//           "Training data forms the foundation of ML models. Features are individual measurable properties, while labels represent the desired output. The model learns by minimizing the difference between predicted and actual outputs through optimization algorithms.",
//       },
//       {
//         heading: "Applications",
//         content:
//           "Machine learning powers recommendation systems, image recognition, natural language processing, autonomous vehicles, and fraud detection. Its applications span healthcare, finance, entertainment, and virtually every industry seeking data-driven insights.",
//       },
//     ],
//     stats: {
//       words: 142,
//       characters: 892,
//       readingTime: "1 min",
//       confidence: 95,
//     },
//   }



//   return (
//     <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
//       {/* Sticky Header */}
//       <header
//         className={`sticky top-0 z-50 border-b transition-all duration-300 ${
//           isScrolled
//             ? "border-border/50 bg-background/80 shadow-sm backdrop-blur-xl"
//             : "border-transparent bg-background"
//         }`}
//       >
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
//           <h1 className="text-lg font-semibold text-foreground sm:text-xl">AI Summary</h1>
//           <div className="flex items-center gap-2">
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={handleCopy}
//               className="hidden transition-all hover:scale-105 sm:flex"
//             >
//               {copied ? <CheckCircle2 className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
//               {copied ? "Copied" : "Copy"}
//             </Button>
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={handleDownload}
//               className="hidden transition-all hover:scale-105 sm:flex"
//             >
//               <Download className="mr-2 h-4 w-4" />
//               Download
//             </Button>
//             <Button
//               variant="outline"
//               size="sm"
//               onClick={handleBack}
//               className="transition-all hover:scale-105 bg-transparent"
//             >
//               <ArrowLeft className="mr-2 h-4 w-4" />
//               Back
//             </Button>
//             <Button size="sm" onClick={handleGenerateQuiz} className="hidden transition-all hover:scale-105 sm:flex">
//               <Brain className="mr-2 h-4 w-4" />
//               Generate Quiz
//             </Button>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="px-4 py-8 sm:px-6 lg:py-12">
//         <div className="mx-auto max-w-7xl">
//           <div className="flex flex-col gap-6 lg:flex-row">
//             {/* Summary Content - Main Column */}
//             <div className="flex-1">
//               {/* Skeleton Loading Placeholder (for demonstration) */}
//               <Card className="mb-6 animate-pulse border border-border/50 bg-card/50 p-4">
//                 <div className="flex items-center gap-3">
//                   <div className="h-10 w-10 rounded-full bg-muted"></div>
//                   <div className="flex-1 space-y-2">
//                     <div className="h-4 w-3/4 rounded bg-muted"></div>
//                     <div className="h-3 w-1/2 rounded bg-muted"></div>
//                   </div>
//                 </div>
//               </Card>

//               {/* Summary Card with Glass Effect */}
//               <Card className="group animate-fade-in border border-border/50 bg-card/80 shadow-2xl backdrop-blur-sm transition-all hover:shadow-3xl">
//                 <div className="p-6 sm:p-8 lg:p-10">
//                   {/* Title */}
//                   <h2 className="mb-8 text-balance font-serif text-3xl font-bold leading-tight text-foreground sm:text-4xl">
//                     {summaryContent.title}
//                   </h2>

//                   {/* Summary Sections */}
//                   <div className="space-y-8">
//                     {summaryContent.sections.map((section, index) => (
//                       <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
//                         <h3 className="mb-3 font-serif text-xl font-semibold text-foreground sm:text-2xl">
//                           {section.heading}
//                         </h3>
//                         <p className="text-pretty leading-relaxed text-muted-foreground sm:text-lg">
//                           {section.content}
//                         </p>
//                       </div>
//                     ))}
//                   </div>

//                   {/* {summary ? (
//           <div className="rounded-xl bg-card p-6 shadow-md border"> */}
//             {/* whitespace-pre-line keeps paragraphs */}
//             {/* <p className="whitespace-pre-line leading-relaxed text-lg text-muted-foreground">
//               {summary}
//             </p> */}
//           {/* </div>
//         ) : (
//           <p className="mt-20 text-muted-foreground text-center text-lg">
//             ⚠️ No summary yet — go to Notes and process text.
//           </p>
//         )} */}


//                   {/* Divider */}
//                   <div className="my-8 border-t border-border/50"></div>

//                   {/* Bottom Actions - Mobile */}
//                   <div className="flex flex-wrap gap-3 sm:hidden">
//                     <Button variant="outline" size="sm" onClick={handleCopy} className="flex-1 bg-transparent">
//                       {copied ? <CheckCircle2 className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
//                       {copied ? "Copied" : "Copy"}
//                     </Button>
//                     <Button variant="outline" size="sm" onClick={handleDownload} className="flex-1 bg-transparent">
//                       <Download className="mr-2 h-4 w-4" />
//                       Download
//                     </Button>
//                   </div>

//                   {/* Footer Note */}
//                   <p className="mt-6 text-center text-sm text-muted-foreground">
//                     This summary was generated by AI. Review for accuracy and completeness.
//                   </p>
//                 </div>
//               </Card>
//             </div>

//             {/* Sidebar - Stats */}
//             <aside className="w-full lg:w-80">
//               <div className="sticky top-24 space-y-4">
//                 {/* Document Stats Card */}
//                 <Card className="border border-border/50 bg-card/80 p-6 shadow-lg backdrop-blur-sm">
//                   <h3 className="mb-4 font-semibold text-foreground">Document Insights</h3>
//                   <div className="space-y-4">
//                     {/* Reading Time */}
//                     <div className="flex items-center gap-3">
//                       <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
//                         <Clock className="h-5 w-5" />
//                       </div>
//                       <div>
//                         <div className="text-sm text-muted-foreground">Reading Time</div>
//                         <div className="font-semibold text-foreground">{summaryContent.stats.readingTime}</div>
//                       </div>
//                     </div>

//                     {/* Word Count */}
//                     <div className="flex items-center gap-3">
//                       <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
//                         <FileText className="h-5 w-5" />
//                       </div>
//                       <div>
//                         <div className="text-sm text-muted-foreground">Words</div>
//                         <div className="font-semibold text-foreground">{summaryContent.stats.words} words</div>
//                       </div>
//                     </div>

//                     {/* Character Count */}
//                     <div className="flex items-center gap-3">
//                       <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
//                         <TrendingUp className="h-5 w-5" />
//                       </div>
//                       <div>
//                         <div className="text-sm text-muted-foreground">Characters</div>
//                         <div className="font-semibold text-foreground">{summaryContent.stats.characters}</div>
//                       </div>
//                     </div>
//                   </div>
//                 </Card>

//                 {/* AI Confidence Badge */}
//                 <Card className="border border-border/50 bg-gradient-to-br from-primary/10 to-primary/5 p-6 shadow-lg backdrop-blur-sm">
//                   <div className="flex items-center gap-3">
//                     <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
//                       <Brain className="h-6 w-6" />
//                     </div>
//                     <div>
//                       <div className="text-sm text-muted-foreground">AI Confidence</div>
//                       <div className="text-2xl font-bold text-foreground">{summaryContent.stats.confidence}%</div>
//                     </div>
//                   </div>
//                   <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted">
//                     <div
//                       className="h-full rounded-full bg-primary transition-all"
//                       style={{ width: `${summaryContent.stats.confidence}%` }}
//                     ></div>
//                   </div>
//                 </Card>
//               </div>
//             </aside>
//           </div>
//         </div>
//       </main>

//       {/* Floating CTA Button - Bottom Right */}
//       <div className="fixed bottom-6 right-6 z-40 animate-fade-in">
//         <Button
//           size="lg"
//           onClick={handleGenerateQuiz}
//           className="group h-14 rounded-full px-6 shadow-2xl transition-all hover:scale-105 hover:shadow-3xl"
//         >
//           <span className="mr-2">Start Quiz</span>
//           <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
//         </Button>
//       </div>
//     </div>
//   )
// }
"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Copy, Download, ArrowLeft, Brain, ArrowRight, Clock, FileText, TrendingUp, CheckCircle2 } from "lucide-react"
import { useState, useEffect, useRef, useMemo } from "react"
import { useResults } from "@/store/useResults"
import { useRouter } from "next/navigation"
import ReactMarkdown from "react-markdown"

export default function SummaryPage() {
  const router = useRouter()
  
  // 1. Zustand Store Access
  const { 
    notes, 
    summary, 
    setSummary, 
    setQuiz, 
    setFlashcards, 
    setSimplified 
  } = useResults();

  // Local UI State
  const [isScrolled, setIsScrolled] = useState(false)
  const [copied, setCopied] = useState(false)
  
  // Ref to prevent double-fetching in React Strict Mode
  const hasFetched = useRef(false);

  // 2. Streaming Logic (The Engine)
  useEffect(() => {
    // Safety: If no notes exist, go back to input
    if (!notes) {
      router.push("/");
      return;
    }

    // Prevent running twice
    if (hasFetched.current) return;
    hasFetched.current = true;

    const runGenerators = async () => {
      try {
        // A. Start Standard APIs (Background)
        const quizPromise = fetch("/api/quiz", { 
          method: "POST", body: JSON.stringify({ text: notes }) 
        }).then(r => r.json());

        const flashPromise = fetch("/api/flashcards", { 
          method: "POST", body: JSON.stringify({ text: notes }) 
        }).then(r => r.json());

        const simplePromise = fetch("/api/simplify", { 
          method: "POST", body: JSON.stringify({ text: notes }) 
        }).then(r => r.json());

        // B. Start Streaming Summary (Real-time)
        // setSummary(""); // Clear previous
        // const response = await fetch("/api/summarize", {
        //   method: "POST",
        //   body: JSON.stringify({ text: notes }),
        // });

        // if (!response.body) throw new Error("No stream body");

        // const reader = response.body.getReader();
        // const decoder = new TextDecoder();
        // let done = false;
        // let accumulatedText = "";

        // while (!done) {
        //   const { value, done: doneReading } = await reader.read();
        //   done = doneReading;
        //   const chunkValue = decoder.decode(value, { stream: true });
          
        //   accumulatedText += chunkValue;
        //   setSummary(accumulatedText); // Triggers re-render
        // }

        setSummary(""); // Clear previous
        console.log("Starting summary generation..."); // DEBUG LOG

        const response = await fetch("/api/summarize", {
          method: "POST",
          body: JSON.stringify({ text: notes }),
        });

        console.log("Response received:", response.status); // DEBUG LOG

        // Handle Errors (If API returns 500 or 401)
        if (!response.ok) {
           setSummary("⚠️ Error: Could not generate summary. Please check your API Key or try again.");
           throw new Error(`API Error: ${response.statusText}`);
        }

        if (!response.body) throw new Error("No stream body");

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let done = false;
        let accumulatedText = "";

        while (!done) {
          const { value, done: doneReading } = await reader.read();
          done = doneReading;
          
          if (value) {
            const chunkValue = decoder.decode(value, { stream: true });
            console.log("Chunk received:", chunkValue); // DEBUG LOG
            accumulatedText += chunkValue;
            setSummary(accumulatedText);
          }
        }
        // C. Resolve Standard APIs
        const [quizRes, flashRes, simpleRes] = await Promise.all([
          quizPromise, 
          flashPromise, 
          simplePromise
        ]);

        setQuiz(quizRes.quiz);
        setFlashcards(flashRes.cards);
        setSimplified(simpleRes.simplified);

      } catch (error) {
        console.error("Generation error:", error);
      }
    };

    runGenerators();

  }, [notes, router, setSummary, setQuiz, setFlashcards, setSimplified]);


  // 3. Dynamic Stats Calculation
  const stats = useMemo(() => {
    const text = summary || "";
    const words = text.trim().split(/\s+/).length;
    const chars = text.length;
    // Avg reading speed: 200 words/min
    const readTime = Math.max(1, Math.ceil(words / 200)); 

    return {
      words: summary ? words : 0,
      characters: chars,
      readingTime: `${readTime} min`,
      confidence: 98, // Static for now, hard to get from stream
    };
  }, [summary]);


  // 4. UI Handlers
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleCopy = () => {
    if(!summary) return;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const handleDownload = () => {
    if(!summary) return;
    const blob = new Blob([summary], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "summary.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  const handleBack = () => router.push('/notes') // Assuming input is at root
  const handleGenerateQuiz = () => router.push('/flashcards')


  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      
      {/* Sticky Header */}
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          isScrolled
            ? "border-border/50 bg-background/80 shadow-sm backdrop-blur-xl"
            : "border-transparent bg-background"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <h1 className="text-lg font-semibold text-foreground sm:text-xl">AI Summary</h1>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              disabled={!summary}
              className="hidden transition-all hover:scale-105 sm:flex"
            >
              {copied ? <CheckCircle2 className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
              {copied ? "Copied" : "Copy"}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDownload}
              disabled={!summary}
              className="hidden transition-all hover:scale-105 sm:flex"
            >
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleBack}
              className="transition-all hover:scale-105 bg-transparent"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button size="sm" onClick={handleGenerateQuiz} className="hidden transition-all hover:scale-105 sm:flex">
              <Brain className="mr-2 h-4 w-4" />
              Watch FlasCards
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-8 sm:px-6 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row">
            
            {/* Summary Content - Main Column */}
            <div className="flex-1">
              
              {/* Loading Skeleton (Only visible when summary is empty) */}
              {!summary && (
                 <Card className="mb-6 animate-pulse border border-border/50 bg-card/50 p-4">
                 <div className="flex items-center gap-3">
                   <div className="h-10 w-10 rounded-full bg-muted"></div>
                   <div className="flex-1 space-y-2">
                     <div className="h-4 w-3/4 rounded bg-muted"></div>
                     <div className="h-3 w-1/2 rounded bg-muted"></div>
                   </div>
                 </div>
                 <p className="mt-4 text-sm text-muted-foreground ml-14">Generating summary...</p>
               </Card>
              )}

              {/* Summary Card with Streaming Content */}
              <Card className="group animate-fade-in border border-border/50 bg-card/80 shadow-2xl backdrop-blur-sm transition-all hover:shadow-3xl min-h-[400px]">
                <div className="p-6 sm:p-8 lg:p-10">
                  
                  {/* Title */}
                  <h2 className="mb-8 text-balance font-serif text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                    Your AI Summary
                  </h2>

                  {/* Streaming Content via ReactMarkdown */}
                  <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                    {summary ? (
                       <ReactMarkdown>{summary}</ReactMarkdown>
                    ) : (
                       <div className="space-y-4 opacity-50">
                          <div className="h-4 bg-muted rounded w-3/4"></div>
                          <div className="h-4 bg-muted rounded w-full"></div>
                          <div className="h-4 bg-muted rounded w-5/6"></div>
                       </div>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="my-8 border-t border-border/50"></div>

                  {/* Bottom Actions - Mobile */}
                  <div className="flex flex-wrap gap-3 sm:hidden">
                    <Button variant="outline" size="sm" onClick={handleCopy} className="flex-1 bg-transparent">
                      {copied ? <CheckCircle2 className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                      {copied ? "Copied" : "Copy"}
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleDownload} className="flex-1 bg-transparent">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>

                  {/* Footer Note */}
                  <p className="mt-6 text-center text-sm text-muted-foreground">
                    This summary was generated by AI. Review for accuracy and completeness.
                  </p>
                </div>
              </Card>
            </div>

            {/* Sidebar - Stats */}
            <aside className="w-full lg:w-80">
              <div className="sticky top-24 space-y-4">
                {/* Document Stats Card */}
                <Card className="border border-border/50 bg-card/80 p-6 shadow-lg backdrop-blur-sm">
                  <h3 className="mb-4 font-semibold text-foreground">Document Insights</h3>
                  <div className="space-y-4">
                    {/* Reading Time */}
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Reading Time</div>
                        <div className="font-semibold text-foreground">{stats.readingTime}</div>
                      </div>
                    </div>

                    {/* Word Count */}
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Words</div>
                        <div className="font-semibold text-foreground">{stats.words} words</div>
                      </div>
                    </div>

                    {/* Character Count */}
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <TrendingUp className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Characters</div>
                        <div className="font-semibold text-foreground">{stats.characters}</div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* AI Confidence Badge */}
                <Card className="border border-border/50 bg-gradient-to-br from-primary/10 to-primary/5 p-6 shadow-lg backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Brain className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">AI Score</div>
                      <div className="text-2xl font-bold text-foreground">{stats.confidence}%</div>
                    </div>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-1000"
                      style={{ width: `${stats.confidence}%` }}
                    ></div>
                  </div>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Floating CTA Button - Bottom Right */}
      <div className="fixed bottom-6 right-6 z-40 animate-fade-in">
        <Button
          size="lg"
          onClick={handleGenerateQuiz}
          className="group h-14 rounded-full px-6 shadow-2xl transition-all hover:scale-105 hover:shadow-3xl"
        >
          <span className="mr-2">Start Quiz</span>
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  )
}