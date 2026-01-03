// "use client"

// import type React from "react"

// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { Lightbulb, ArrowLeft, Sparkles } from "lucide-react"
// import { useState } from "react"

// export default function SimplePage() {
//   const [inputText, setInputText] = useState("")
//   const [showResult, setShowResult] = useState(false)

//   const handleSimplify = () => {
//     if (inputText.trim()) {
//       setShowResult(true)
//     }
//   }

//   // Mock simplified output
//   const simplifiedText = `Machine learning is like teaching a computer to learn from examples, just like you learn from experience! 

// Instead of programming every single rule, we show the computer lots of examples. For instance, if we want it to recognize cats, we show it thousands of cat pictures. The computer finds patterns - like pointy ears, whiskers, and four legs - and learns what makes a cat a cat.

// Think of it like learning to ride a bike. You don't memorize every rule about balance and steering. You try it, fall a few times, and your brain figures out the patterns. Machine learning works the same way for computers!`

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
//       {/* Header */}
//       <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
//         <div className="mx-auto max-w-[700px] px-4 py-4">
//           <Button variant="ghost" size="sm" className="gap-2">
//             <ArrowLeft className="h-4 w-4" />
//             Back
//           </Button>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="px-4 py-12">
//         <div className="mx-auto max-w-[700px]">
//           {/* Page Title */}
//           <div className="mb-8 text-center">
//             <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur">
//               <Lightbulb className="h-4 w-4" />
//               <span>Kid-Friendly Explanations</span>
//             </div>
//             <h1 className="mb-3 text-balance font-sans text-4xl font-bold text-foreground sm:text-5xl">
//               Explain This Simply
//             </h1>
//             <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
//               Turn complex content into a simple explanation anyone can understand.
//             </p>
//           </div>

//           {/* Input Section */}
//           <Card className="mb-6 border border-border/50 bg-card/80 p-6 shadow-xl backdrop-blur-sm">
//             <label htmlFor="input-text" className="mb-2 block text-sm font-medium text-foreground">
//               Paste your complex text here
//             </label>
//             <textarea
//               id="input-text"
//               value={inputText}
//               onChange={(e) => setInputText(e.target.value)}
//               placeholder="Example: Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed..."
//               className="min-h-[180px] w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
//               style={{ fieldSizing: "content" } as React.CSSProperties}
//             />
//             <div className="mt-2 flex items-center justify-between">
//               <span className="text-sm text-muted-foreground">{inputText.length} characters</span>
//               <Button
//                 onClick={handleSimplify}
//                 disabled={!inputText.trim()}
//                 className="gap-2 transition-all hover:scale-105 disabled:opacity-50"
//               >
//                 <Sparkles className="h-4 w-4" />
//                 Simplify
//               </Button>
//             </div>
//           </Card>

//           {/* Result Section */}
//           {showResult && (
//             <div className="space-y-6">
//               {/* Simplified Explanation Card */}
//               <Card className="relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-card/90 to-primary/5 p-8 shadow-2xl backdrop-blur-sm">
//                 {/* Decorative Corner */}
//                 <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
//                 <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />

//                 <div className="relative">
//                   <div className="mb-4 flex items-center gap-2">
//                     <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
//                       <Lightbulb className="h-5 w-5" />
//                     </div>
//                     <h2 className="font-serif text-2xl font-bold text-foreground">Simple Explanation</h2>
//                   </div>

//                   <div className="space-y-4 font-sans text-base leading-relaxed text-foreground/90">
//                     {simplifiedText.split("\n\n").map((paragraph, index) => (
//                       <p key={index} className="text-pretty">
//                         {paragraph}
//                       </p>
//                     ))}
//                   </div>
//                 </div>
//               </Card>

//               {/* Tips Sidebar */}
//               <Card className="border border-border/50 bg-muted/30 p-6 shadow-lg backdrop-blur-sm">
//                 <h3 className="mb-3 flex items-center gap-2 font-semibold text-foreground">
//                   <Sparkles className="h-4 w-4 text-primary" />
//                   Tips for Better Simplifications
//                 </h3>
//                 <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
//                   <li className="flex gap-2">
//                     <span className="text-primary">•</span>
//                     <span>Use everyday language and familiar comparisons</span>
//                   </li>
//                   <li className="flex gap-2">
//                     <span className="text-primary">•</span>
//                     <span>Break down complex ideas into smaller chunks</span>
//                   </li>
//                   <li className="flex gap-2">
//                     <span className="text-primary">•</span>
//                     <span>Focus on the main concept rather than technical details</span>
//                   </li>
//                 </ul>
//               </Card>
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   )
// }

"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Lightbulb, ArrowLeft, Sparkles, Loader2 } from "lucide-react"
import { useState, useEffect } from "react"
import { useResults } from "@/store/useResults" // 1. Import Store
import { useRouter } from "next/navigation"

export default function SimplePage() {
  const router = useRouter()
  // 2. Get data from store
  const { notes, simplified, setSimplified } = useResults()

  // Local state
  const [inputText, setInputText] = useState("")
  const [loading, setLoading] = useState(false)
  
  // 3. On load, if there are notes in the store, fill the input
  useEffect(() => {
    if (notes && !inputText) {
      setInputText(notes)
    }
    // If we already have a result in store, show it immediately? 
    // Optional: currently we just autofill input.
  }, [notes])

  const handleSimplify = async () => {
    if (!inputText.trim()) return

    setLoading(true)
    
    try {
      // 4. Call the API
      const response = await fetch("/api/simplify", {
        method: "POST",
        body: JSON.stringify({ text: inputText }),
      })

      const data = await response.json()
      
      // 5. Save to store
      setSimplified(data.simplified)
      
    } catch (error) {
      console.error("Simplify error:", error)
    } finally {
      setLoading(false)
    }
  }

  // Use the store's simplified text if available
  const resultText = simplified

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-[700px] px-4 py-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className="gap-2"
            onClick={() => router.push('/summary')}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Summary
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-12">
        <div className="mx-auto max-w-[700px]">
          {/* Page Title */}
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur">
              <Lightbulb className="h-4 w-4" />
              <span>Kid-Friendly Explanations</span>
            </div>
            <h1 className="mb-3 text-balance font-sans text-4xl font-bold text-foreground sm:text-5xl">
              Explain This Simply
            </h1>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Turn complex content into a simple explanation anyone can understand.
            </p>
          </div>

          {/* Input Section */}
          <Card className="mb-6 border border-border/50 bg-card/80 p-6 shadow-xl backdrop-blur-sm">
            <label htmlFor="input-text" className="mb-2 block text-sm font-medium text-foreground">
              Paste your complex text here
            </label>
            <textarea
              id="input-text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Example: Machine learning is a subset of artificial intelligence..."
              className="min-h-[180px] w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{inputText.length} characters</span>
              <Button
                onClick={handleSimplify}
                disabled={!inputText.trim() || loading}
                className="gap-2 transition-all hover:scale-105 disabled:opacity-50"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="h-4 w-4" />
                )}
                {loading ? "Simplifying..." : "Simplify"}
              </Button>
            </div>
          </Card>

          {/* Result Section */}
          {resultText && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Simplified Explanation Card */}
              <Card className="relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-card/90 to-primary/5 p-8 shadow-2xl backdrop-blur-sm">
                {/* Decorative Corner */}
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />

                <div className="relative">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Lightbulb className="h-5 w-5" />
                    </div>
                    <h2 className="font-serif text-2xl font-bold text-foreground">Simple Explanation</h2>
                  </div>

                  <div className="space-y-4 font-sans text-base leading-relaxed text-foreground/90">
                    {resultText.split("\n").map((paragraph, index) => (
                      paragraph.trim() && (
                        <p key={index} className="text-pretty">
                          {paragraph}
                        </p>
                      )
                    ))}
                  </div>
                </div>
              </Card>

              {/* Tips Sidebar */}
              <Card className="border border-border/50 bg-muted/30 p-6 shadow-lg backdrop-blur-sm">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-foreground">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Tips for Better Simplifications
                </h3>
                <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Use everyday language and familiar comparisons</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Break down complex ideas into smaller chunks</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Focus on the main concept rather than technical details</span>
                  </li>
                </ul>
              </Card>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}