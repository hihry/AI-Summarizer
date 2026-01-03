// "use client"

// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { ChevronLeft, ChevronRight, RotateCw, Trophy } from "lucide-react"
// import { useState } from "react"

// // Mock flashcard data
// const flashcards = [
//   {
//     id: 1,
//     front: "What is Machine Learning?",
//     back: "A subset of artificial intelligence that enables systems to automatically learn and improve from experience without being explicitly programmed.",
//   },
//   {
//     id: 2,
//     front: "What is Supervised Learning?",
//     back: "A type of machine learning where the algorithm learns from labeled training data to predict outcomes for new, unseen data.",
//   },
//   {
//     id: 3,
//     front: "What is Unsupervised Learning?",
//     back: "A machine learning technique that finds hidden patterns or intrinsic structures in unlabeled data without predefined categories.",
//   },
//   {
//     id: 4,
//     front: "What is Reinforcement Learning?",
//     back: "A learning method where an agent learns to make decisions by performing actions in an environment to maximize cumulative reward.",
//   },
//   {
//     id: 5,
//     front: "What is a Neural Network?",
//     back: "A computing system inspired by biological neural networks, consisting of interconnected nodes (neurons) that process information.",
//   },
//   {
//     id: 6,
//     front: "What is Deep Learning?",
//     back: "A subset of machine learning that uses multi-layered neural networks to learn complex patterns in large amounts of data.",
//   },
//   {
//     id: 7,
//     front: "What is Overfitting?",
//     back: "When a model learns the training data too well, including noise and outliers, resulting in poor performance on new data.",
//   },
//   {
//     id: 8,
//     front: "What is a Feature?",
//     back: "An individual measurable property or characteristic used as input for a machine learning algorithm.",
//   },
//   {
//     id: 9,
//     front: "What is Training Data?",
//     back: "The dataset used to train a machine learning model, helping it learn patterns and relationships.",
//   },
//   {
//     id: 10,
//     front: "What is Cross-Validation?",
//     back: "A technique to evaluate model performance by dividing data into subsets and testing on different combinations.",
//   },
// ]

// export default function FlashcardsPage() {
//   const [currentCard, setCurrentCard] = useState(0)
//   const [isFlipped, setIsFlipped] = useState(false)
//   const [studiedCards, setStudiedCards] = useState<boolean[]>(new Array(flashcards.length).fill(false))
//   const [isCompleted, setIsCompleted] = useState(false)

//   const totalCards = flashcards.length
//   const studiedCount = studiedCards.filter(Boolean).length
//   const remainingCount = totalCards - studiedCount
//   const progressPercentage = (studiedCount / totalCards) * 100

//   const handleFlip = () => {
//     setIsFlipped(!isFlipped)
//     if (!studiedCards[currentCard]) {
//       const newStudied = [...studiedCards]
//       newStudied[currentCard] = true
//       setStudiedCards(newStudied)

//       // Check if all cards studied
//       if (newStudied.every(Boolean)) {
//         setTimeout(() => setIsCompleted(true), 800)
//       }
//     }
//   }

//   const handleNext = () => {
//     if (currentCard < totalCards - 1) {
//       setCurrentCard(currentCard + 1)
//       setIsFlipped(false)
//     }
//   }

//   const handlePrevious = () => {
//     if (currentCard > 0) {
//       setCurrentCard(currentCard - 1)
//       setIsFlipped(false)
//     }
//   }

//   const handleReset = () => {
//     setCurrentCard(0)
//     setIsFlipped(false)
//     setStudiedCards(new Array(flashcards.length).fill(false))
//     setIsCompleted(false)
//   }

//   if (isCompleted) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
//         <div className="flex min-h-screen items-center justify-center px-4 py-16">
//           <Card className="w-full max-w-[600px] border border-border/50 bg-card/80 p-8 shadow-2xl backdrop-blur-sm sm:p-12">
//             {/* Trophy Icon */}
//             <div className="mb-6 flex justify-center">
//               <div className="rounded-full bg-muted/50 p-6 text-green-500">
//                 <Trophy className="h-16 w-16" />
//               </div>
//             </div>

//             {/* Headline */}
//             <h1 className="mb-4 text-center text-balance font-sans text-3xl font-bold text-foreground sm:text-4xl">
//               All Cards Studied!
//             </h1>

//             <p className="mb-8 text-center text-lg text-muted-foreground">
//               Great work! You've reviewed all <span className="font-bold text-foreground">{totalCards} flashcards</span>
//               .
//             </p>

//             {/* Stats */}
//             <div className="mb-8 rounded-xl bg-muted/30 p-6">
//               <div className="text-center">
//                 <div className="text-4xl font-bold text-foreground">{totalCards}</div>
//                 <div className="text-sm text-muted-foreground">Cards Studied</div>
//               </div>
//             </div>

//             {/* Action Button */}
//             <Button size="lg" onClick={handleReset} className="w-full transition-all hover:scale-105">
//               <RotateCw className="mr-2 h-5 w-5" />
//               Study Again
//             </Button>
//           </Card>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
//       {/* Header */}
//       <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
//         <div className="mx-auto max-w-[720px] px-4 py-6">
//           <h1 className="mb-2 text-center text-2xl font-bold text-foreground">Flashcards</h1>
//           <p className="text-center text-sm text-muted-foreground">Tap to flip — swipe to move</p>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="px-4 py-8 sm:py-12">
//         <div className="mx-auto max-w-[720px]">
//           {/* Progress Indicator */}
//           <div className="mb-6 text-center">
//             <p className="text-sm font-medium text-muted-foreground">
//               Card {currentCard + 1} of {totalCards}
//             </p>
//             <div className="mx-auto mt-2 h-2 w-48 overflow-hidden rounded-full bg-muted">
//               <div
//                 className="h-full rounded-full bg-primary transition-all duration-500"
//                 style={{ width: `${((currentCard + 1) / totalCards) * 100}%` }}
//               ></div>
//             </div>
//           </div>

//           {/* Flashcard */}
//           <div className="mb-8 flex justify-center">
//             <div
//               className="group relative h-[400px] w-full cursor-pointer sm:h-[450px]"
//               onClick={handleFlip}
//               style={{ perspective: "1000px" }}
//             >
//               <div
//                 className="relative h-full w-full transition-transform duration-700"
//                 style={{
//                   transformStyle: "preserve-3d",
//                   transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
//                 }}
//               >
//                 {/* Front of Card */}
//                 <Card
//                   className="absolute inset-0 flex items-center justify-center border-2 border-border/50 bg-card/90 p-8 shadow-2xl backdrop-blur-sm transition-all group-hover:border-foreground/20 group-hover:shadow-3xl sm:p-12"
//                   style={{
//                     backfaceVisibility: "hidden",
//                   }}
//                 >
//                   <div className="text-center">
//                     <p className="text-balance text-xl font-semibold leading-relaxed text-foreground sm:text-2xl">
//                       {flashcards[currentCard].front}
//                     </p>
//                     <p className="mt-6 text-sm text-muted-foreground">Click to reveal answer</p>
//                   </div>
//                 </Card>

//                 {/* Back of Card */}
//                 <Card
//                   className="absolute inset-0 flex items-center justify-center border-2 border-primary/50 bg-primary/5 p-8 shadow-2xl backdrop-blur-sm sm:p-12"
//                   style={{
//                     backfaceVisibility: "hidden",
//                     transform: "rotateY(180deg)",
//                   }}
//                 >
//                   <div className="text-center">
//                     <p className="text-balance text-lg leading-relaxed text-foreground sm:text-xl">
//                       {flashcards[currentCard].back}
//                     </p>
//                     <p className="mt-6 text-sm text-muted-foreground">Click to flip back</p>
//                   </div>
//                 </Card>
//               </div>
//             </div>
//           </div>

//           {/* Navigation Buttons */}
//           <div className="flex items-center justify-center gap-4">
//             <Button
//               variant="outline"
//               size="lg"
//               onClick={handlePrevious}
//               disabled={currentCard === 0}
//               className="h-12 w-32 transition-all hover:scale-105 disabled:opacity-50 bg-transparent"
//             >
//               <ChevronLeft className="mr-2 h-5 w-5" />
//               Previous
//             </Button>

//             <Button size="lg" onClick={handleFlip} className="h-12 w-32 transition-all hover:scale-105">
//               <RotateCw className="mr-2 h-5 w-5" />
//               Flip Card
//             </Button>

//             <Button
//               variant="outline"
//               size="lg"
//               onClick={handleNext}
//               disabled={currentCard === totalCards - 1}
//               className="h-12 w-32 transition-all hover:scale-105 disabled:opacity-50 bg-transparent"
//             >
//               Next
//               <ChevronRight className="ml-2 h-5 w-5" />
//             </Button>
//           </div>
//         </div>
//       </main>

//       {/* Sidebar Stats (Desktop Only) */}
//       <aside className="fixed right-6 top-32 hidden w-48 lg:block">
//         <Card className="border border-border/50 bg-card/80 p-4 shadow-lg backdrop-blur-sm">
//           <h3 className="mb-4 text-sm font-semibold text-foreground">Study Progress</h3>

//           <div className="mb-4">
//             <div className="mb-1 flex items-center justify-between text-sm">
//               <span className="text-muted-foreground">Progress</span>
//               <span className="font-semibold text-foreground">{Math.round(progressPercentage)}%</span>
//             </div>
//             <div className="h-2 overflow-hidden rounded-full bg-muted">
//               <div
//                 className="h-full rounded-full bg-primary transition-all duration-500"
//                 style={{ width: `${progressPercentage}%` }}
//               ></div>
//             </div>
//           </div>

//           <div className="space-y-2 border-t border-border/50 pt-4">
//             <div className="flex items-center justify-between">
//               <span className="text-xs text-muted-foreground">Studied</span>
//               <span className="text-sm font-semibold text-green-600">{studiedCount}</span>
//             </div>
//             <div className="flex items-center justify-between">
//               <span className="text-xs text-muted-foreground">Remaining</span>
//               <span className="text-sm font-semibold text-muted-foreground">{remainingCount}</span>
//             </div>
//             <div className="flex items-center justify-between">
//               <span className="text-xs text-muted-foreground">Total</span>
//               <span className="text-sm font-semibold text-foreground">{totalCards}</span>
//             </div>
//           </div>
//         </Card>
//       </aside>
//     </div>
//   )
// }

"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, RotateCw, Trophy, Home, ArrowLeft } from "lucide-react"
import { useState, useEffect } from "react"
import { useResults } from "@/store/useResults" // 1. Import Store
import { useRouter } from "next/navigation"

export default function FlashcardsPage() {
  const router = useRouter()
  // 2. Get data from store
  const { flashcards } = useResults()

  const [currentCard, setCurrentCard] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  // Initialize as empty array first
  const [studiedCards, setStudiedCards] = useState<boolean[]>([])
  const [isCompleted, setIsCompleted] = useState(false)

  // 3. Sync state with store data
  useEffect(() => {
    if (flashcards && flashcards.length > 0) {
      setStudiedCards(new Array(flashcards.length).fill(false))
    }
  }, [flashcards])

  // 4. Safety Check: Handle Empty State
  if (!flashcards || flashcards.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">No Flashcards Ready</h2>
        <p className="text-gray-600 mb-8 max-w-md">
          Go back to the notes page to generate your study materials.
        </p>
        <Button onClick={() => router.push('/')} size="lg">
          <Home className="mr-2 h-4 w-4" /> Go Home
        </Button>
      </div>
    )
  }

  const totalCards = flashcards.length
  const studiedCount = studiedCards.filter(Boolean).length
  const remainingCount = totalCards - studiedCount
  const progressPercentage = totalCards > 0 ? (studiedCount / totalCards) * 100 : 0

  // Handlers
  const handleFlip = () => {
    setIsFlipped(!isFlipped)
    if (!studiedCards[currentCard]) {
      const newStudied = [...studiedCards]
      newStudied[currentCard] = true
      setStudiedCards(newStudied)

      // Check if all cards studied
      if (newStudied.every(Boolean)) {
        setTimeout(() => setIsCompleted(true), 800)
      }
    }
  }

  const handleNext = () => {
    if (currentCard < totalCards - 1) {
      setCurrentCard(currentCard + 1)
      setIsFlipped(false)
    }
  }

  const handlePrevious = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1)
      setIsFlipped(false)
    }
  }

  const handleReset = () => {
    setCurrentCard(0)
    setIsFlipped(false)
    setStudiedCards(new Array(flashcards.length).fill(false))
    setIsCompleted(false)
  }

  // --- COMPLETION SCREEN ---
  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <div className="flex min-h-screen items-center justify-center px-4 py-16">
          <Card className="w-full max-w-[600px] border border-border/50 bg-card/80 p-8 shadow-2xl backdrop-blur-sm sm:p-12">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-muted/50 p-6 text-green-500">
                <Trophy className="h-16 w-16" />
              </div>
            </div>

            <h1 className="mb-4 text-center text-balance font-sans text-3xl font-bold text-foreground sm:text-4xl">
              All Cards Studied!
            </h1>

            <p className="mb-8 text-center text-lg text-muted-foreground">
              Great work! You've reviewed all <span className="font-bold text-foreground">{totalCards} flashcards</span>.
            </p>

            <div className="mb-8 rounded-xl bg-muted/30 p-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-foreground">{totalCards}</div>
                <div className="text-sm text-muted-foreground">Cards Studied</div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => router.push('/summary')}
                className="flex-1 bg-transparent"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Summary
              </Button>
              <Button size="lg" onClick={handleReset} className="flex-1 transition-all hover:scale-105">
                <RotateCw className="mr-2 h-5 w-5" />
                Study Again
              </Button>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  // --- MAIN FLASHCARD UI ---
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-10">
        <div className="mx-auto max-w-[720px] px-4 py-4 flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={() => router.push('/summary')}>
                <ChevronLeft className="h-4 w-4 mr-1" /> Back
            </Button>
            <h1 className="text-lg font-bold text-foreground">Flashcards</h1>
            <div className="w-16"></div> {/* Spacer for alignment */}
        </div>
      </header>

      <main className="px-4 py-8 sm:py-12">
        <div className="mx-auto max-w-[720px]">
          {/* Progress Indicator */}
          <div className="mb-6 text-center">
            <p className="text-sm font-medium text-muted-foreground">
              Card {currentCard + 1} of {totalCards}
            </p>
            <div className="mx-auto mt-2 h-2 w-48 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500"
                style={{ width: `${((currentCard + 1) / totalCards) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Flashcard Area */}
          <div className="mb-8 flex justify-center">
            <div
              className="group relative h-[400px] w-full cursor-pointer sm:h-[450px]"
              onClick={handleFlip}
              style={{ perspective: "1000px" }}
            >
              <div
                className="relative h-full w-full transition-transform duration-700"
                style={{
                  transformStyle: "preserve-3d",
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* Front of Card */}
                <Card
                  className="absolute inset-0 flex items-center justify-center border-2 border-border/50 bg-card/90 p-8 shadow-2xl backdrop-blur-sm transition-all group-hover:border-foreground/20 group-hover:shadow-3xl sm:p-12"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="text-center">
                    <p className="text-balance text-xl font-semibold leading-relaxed text-foreground sm:text-2xl">
                      {flashcards[currentCard]?.front}
                    </p>
                    <p className="mt-6 text-sm text-muted-foreground animate-pulse">Click to reveal answer</p>
                  </div>
                </Card>

                {/* Back of Card */}
                <Card
                  className="absolute inset-0 flex items-center justify-center border-2 border-primary/50 bg-primary/5 p-8 shadow-2xl backdrop-blur-sm sm:p-12"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className="text-center">
                    <p className="text-balance text-lg leading-relaxed text-foreground sm:text-xl">
                      {flashcards[currentCard]?.back}
                    </p>
                    <p className="mt-6 text-sm text-muted-foreground">Click to flip back</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={handlePrevious}
              disabled={currentCard === 0}
              className="h-12 w-32 transition-all hover:scale-105 disabled:opacity-50 bg-transparent"
            >
              <ChevronLeft className="mr-2 h-5 w-5" />
              Prev
            </Button>

            <Button size="lg" onClick={handleFlip} className="h-12 w-32 transition-all hover:scale-105">
              <RotateCw className="mr-2 h-5 w-5" />
              Flip
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={handleNext}
              disabled={currentCard === totalCards - 1}
              className="h-12 w-32 transition-all hover:scale-105 disabled:opacity-50 bg-transparent"
            >
              Next
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </main>

      {/* Sidebar Stats (Desktop Only) */}
      <aside className="fixed right-6 top-32 hidden w-48 lg:block">
        <Card className="border border-border/50 bg-card/80 p-4 shadow-lg backdrop-blur-sm">
          <h3 className="mb-4 text-sm font-semibold text-foreground">Study Progress</h3>
          <div className="mb-4">
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-semibold text-foreground">{Math.round(progressPercentage)}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
          <div className="space-y-2 border-t border-border/50 pt-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Studied</span>
              <span className="text-sm font-semibold text-green-600">{studiedCount}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Remaining</span>
              <span className="text-sm font-semibold text-muted-foreground">{remainingCount}</span>
            </div>
          </div>
        </Card>
      </aside>
    </div>
  )
}