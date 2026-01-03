// "use client"

// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { ArrowRight, Trophy, RotateCcw, FileText } from "lucide-react"
// import { useState } from "react"

// // Mock quiz data
// const quizData = [
//   {
//     id: 1,
//     question: "What is Machine Learning?",
//     options: [
//       "A subset of AI that enables systems to learn from experience",
//       "A programming language for data science",
//       "A type of database management system",
//       "A hardware component for faster computing",
//     ],
//     correctAnswer: 0,
//   },
//   {
//     id: 2,
//     question: "Which of the following is NOT a type of Machine Learning?",
//     options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Compiled Learning"],
//     correctAnswer: 3,
//   },
//   {
//     id: 3,
//     question: "What is the primary goal of supervised learning?",
//     options: [
//       "To find hidden patterns in unlabeled data",
//       "To learn by trial and error with rewards",
//       "To predict outputs based on labeled training data",
//       "To reduce computational complexity",
//     ],
//     correctAnswer: 2,
//   },
//   {
//     id: 4,
//     question: "Which industry does NOT commonly use machine learning?",
//     options: ["Healthcare", "Finance", "Entertainment", "None - ML is used in all industries"],
//     correctAnswer: 3,
//   },
//   {
//     id: 5,
//     question: "What are 'features' in machine learning?",
//     options: [
//       "The desired output of a model",
//       "Individual measurable properties used as input",
//       "The algorithms used for training",
//       "The visualization tools for data",
//     ],
//     correctAnswer: 1,
//   },
// ]

// export default function QuizPage() {
//   const [currentQuestion, setCurrentQuestion] = useState(0)
//   const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
//   const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(quizData.length).fill(false))
//   const [correctAnswers, setCorrectAnswers] = useState<boolean[]>(new Array(quizData.length).fill(false))
//   const [showFeedback, setShowFeedback] = useState(false)
//   const [isCompleted, setIsCompleted] = useState(false)

//   const totalQuestions = quizData.length
//   const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100
//   const score = correctAnswers.filter(Boolean).length

//   const handleAnswerSelect = (index: number) => {
//     if (answeredQuestions[currentQuestion]) return // Already answered

//     setSelectedAnswer(index)
//     setShowFeedback(true)

//     const isCorrect = index === quizData[currentQuestion].correctAnswer
//     const newAnswered = [...answeredQuestions]
//     const newCorrect = [...correctAnswers]

//     newAnswered[currentQuestion] = true
//     newCorrect[currentQuestion] = isCorrect

//     setAnsweredQuestions(newAnswered)
//     setCorrectAnswers(newCorrect)
//   }

//   const handleNext = () => {
//     if (currentQuestion < totalQuestions - 1) {
//       setCurrentQuestion(currentQuestion + 1)
//       setSelectedAnswer(null)
//       setShowFeedback(false)
//     } else {
//       setIsCompleted(true)
//     }
//   }

//   const handleRetry = () => {
//     setCurrentQuestion(0)
//     setSelectedAnswer(null)
//     setAnsweredQuestions(new Array(quizData.length).fill(false))
//     setCorrectAnswers(new Array(quizData.length).fill(false))
//     setShowFeedback(false)
//     setIsCompleted(false)
//   }

//   const handleReviewSummary = () => {
//     console.log("Review Summary clicked")
//   }

//   const getAnswerClassName = (index: number) => {
//     if (!answeredQuestions[currentQuestion]) {
//       // Not answered yet
//       return "bg-card hover:bg-muted/50 border-border hover:border-foreground/20 text-foreground"
//     }

//     const correctIndex = quizData[currentQuestion].correctAnswer

//     if (index === correctIndex) {
//       // Correct answer
//       return "bg-green-500 border-green-500 text-white hover:bg-green-600"
//     }

//     if (index === selectedAnswer && index !== correctIndex) {
//       // Incorrect selected answer
//       return "bg-red-500 border-red-500 text-white hover:bg-red-600"
//     }

//     // Other options
//     return "bg-card border-border text-muted-foreground opacity-60"
//   }

//   if (isCompleted) {
//     const scorePercentage = Math.round((score / totalQuestions) * 100)
//     const getTrophyColor = () => {
//       if (scorePercentage >= 90) return "text-yellow-500"
//       if (scorePercentage >= 70) return "text-blue-500"
//       return "text-muted-foreground"
//     }

//     return (
//       <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
//         <div className="flex min-h-screen items-center justify-center px-4 py-16">
//           <Card className="w-full max-w-[600px] border border-border/50 bg-card/80 p-8 shadow-2xl backdrop-blur-sm sm:p-12">
//             {/* Trophy Icon */}
//             <div className="mb-6 flex justify-center">
//               <div className={`rounded-full bg-muted/50 p-6 ${getTrophyColor()}`}>
//                 <Trophy className="h-16 w-16" />
//               </div>
//             </div>

//             {/* Headline */}
//             <h1 className="mb-4 text-center text-balance font-sans text-3xl font-bold text-foreground sm:text-4xl">
//               You're Done!
//             </h1>

//             {/* Score */}
//             <p className="mb-8 text-center text-lg text-muted-foreground">
//               You scored{" "}
//               <span className="font-bold text-foreground">
//                 {score} out of {totalQuestions}
//               </span>{" "}
//               ({scorePercentage}%)
//             </p>

//             {/* Stats Breakdown */}
//             <div className="mb-8 grid grid-cols-3 gap-4 rounded-xl bg-muted/30 p-6">
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-green-500">{score}</div>
//                 <div className="text-sm text-muted-foreground">Correct</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-red-500">{totalQuestions - score}</div>
//                 <div className="text-sm text-muted-foreground">Incorrect</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-foreground">{totalQuestions}</div>
//                 <div className="text-sm text-muted-foreground">Total</div>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex flex-col gap-3 sm:flex-row">
//               <Button
//                 variant="outline"
//                 size="lg"
//                 onClick={handleReviewSummary}
//                 className="flex-1 bg-transparent transition-all hover:scale-105"
//               >
//                 <FileText className="mr-2 h-5 w-5" />
//                 Review Summary
//               </Button>
//               <Button size="lg" onClick={handleRetry} className="flex-1 transition-all hover:scale-105">
//                 <RotateCcw className="mr-2 h-5 w-5" />
//                 Retry Quiz
//               </Button>
//             </div>
//           </Card>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
//       {/* Sticky Header with Progress */}
//       <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 shadow-sm backdrop-blur-xl">
//         <div className="mx-auto max-w-[720px] px-4 py-4">
//           <div className="mb-3 flex items-center justify-between">
//             <h1 className="text-lg font-semibold text-foreground">Your Quiz</h1>
//             <span className="text-sm text-muted-foreground">
//               Question {currentQuestion + 1} of {totalQuestions}
//             </span>
//           </div>
//           {/* Progress Bar */}
//           <div className="h-2 overflow-hidden rounded-full bg-muted">
//             <div
//               className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
//               style={{ width: `${progressPercentage}%` }}
//             ></div>
//           </div>
//         </div>
//       </header>

//       {/* Main Quiz Content */}
//       <main className="px-4 py-8 sm:py-12">
//         <div className="mx-auto max-w-[720px]">
//           {/* Question Card */}
//           <Card className="mb-6 border border-border/50 bg-card/80 p-6 shadow-xl backdrop-blur-sm transition-all sm:p-8">
//             <h2 className="text-balance text-xl font-semibold leading-relaxed text-foreground sm:text-2xl">
//               {quizData[currentQuestion].question}
//             </h2>
//           </Card>

//           {/* Answer Choices */}
//           <div className="space-y-3">
//             {quizData[currentQuestion].options.map((option, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleAnswerSelect(index)}
//                 disabled={answeredQuestions[currentQuestion]}
//                 className={`w-full rounded-xl border-2 p-4 text-left font-medium transition-all duration-300 disabled:cursor-not-allowed sm:p-5 ${getAnswerClassName(
//                   index,
//                 )} ${
//                   selectedAnswer === index && !answeredQuestions[currentQuestion]
//                     ? "scale-[1.02] border-primary shadow-lg"
//                     : ""
//                 }`}
//               >
//                 <div className="flex items-center gap-3">
//                   <div
//                     className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold ${
//                       answeredQuestions[currentQuestion]
//                         ? index === quizData[currentQuestion].correctAnswer
//                           ? "border-white bg-white/20"
//                           : index === selectedAnswer
//                             ? "border-white bg-white/20"
//                             : "border-current"
//                         : "border-current"
//                     }`}
//                   >
//                     {String.fromCharCode(65 + index)}
//                   </div>
//                   <span className="text-pretty leading-relaxed">{option}</span>
//                 </div>
//               </button>
//             ))}
//           </div>

//           {/* Feedback Message */}
//           {showFeedback && (
//             <div className="mt-6">
//               {correctAnswers[currentQuestion] ? (
//                 <p className="text-center text-lg font-semibold text-green-600">Correct! Well done!</p>
//               ) : (
//                 <p className="text-center text-lg font-semibold text-red-600">
//                   Not quite. The correct answer is highlighted in green.
//                 </p>
//               )}
//             </div>
//           )}
//         </div>
//       </main>

//       {/* Floating Next Button */}
//       {answeredQuestions[currentQuestion] && (
//         <div className="fixed bottom-6 right-6 z-40">
//           <Button
//             size="lg"
//             onClick={handleNext}
//             className="group h-14 rounded-full px-8 shadow-2xl transition-all hover:scale-105 hover:shadow-3xl"
//           >
//             <span className="mr-2">{currentQuestion === totalQuestions - 1 ? "Finish" : "Next"}</span>
//             <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
//           </Button>
//         </div>
//       )}
//     </div>
//   )
// }
"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Trophy, RotateCcw, FileText, Home } from "lucide-react"
import { useState, useEffect } from "react"
import { useResults } from "@/store/useResults" // 1. Import Store
import { useRouter } from "next/navigation"

export default function QuizPage() {
  const router = useRouter()
  // 2. Get real quiz data from Zustand
  const { quiz } = useResults()

  // State
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  // Initialize arrays based on the quiz length (safely)
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([])
  const [correctAnswers, setCorrectAnswers] = useState<boolean[]>([])
  
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  // 3. Initialize state when quiz loads
  useEffect(() => {
    if (quiz && quiz.length > 0) {
      setAnsweredQuestions(new Array(quiz.length).fill(false))
      setCorrectAnswers(new Array(quiz.length).fill(false))
    }
  }, [quiz])

  // 4. Safety Check: If no quiz exists, show "Empty State"
  if (!quiz || quiz.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">No Quiz Generated Yet</h2>
        <p className="text-gray-600 mb-8 max-w-md">
          It looks like you haven't generated a quiz yet. Go back to the home page to paste your notes.
        </p>
        <Button onClick={() => router.push('/')} size="lg">
          <Home className="mr-2 h-4 w-4" /> Go Home
        </Button>
      </div>
    )
  }

  // Derived calculations
  const totalQuestions = quiz.length
  const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100
  const score = correctAnswers.filter(Boolean).length

  // Handlers
  const handleAnswerSelect = (index: number) => {
    if (answeredQuestions[currentQuestion]) return // Already answered

    setSelectedAnswer(index)
    setShowFeedback(true)

    // Note: The AI API returns 'answer' (index), distinct from 'correctAnswer' in your mock
    const isCorrect = index === quiz[currentQuestion].answer 
    const newAnswered = [...answeredQuestions]
    const newCorrect = [...correctAnswers]

    newAnswered[currentQuestion] = true
    newCorrect[currentQuestion] = isCorrect

    setAnsweredQuestions(newAnswered)
    setCorrectAnswers(newCorrect)
  }

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    } else {
      setIsCompleted(true)
    }
  }

  const handleRetry = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setAnsweredQuestions(new Array(quiz.length).fill(false))
    setCorrectAnswers(new Array(quiz.length).fill(false))
    setShowFeedback(false)
    setIsCompleted(false)
  }

  const handleReviewSummary = () => {
    router.push('/flashcards') // Navigate back to summary
  }

  const getAnswerClassName = (index: number) => {
    if (!answeredQuestions[currentQuestion]) {
      // Not answered yet
      return "bg-card hover:bg-muted/50 border-border hover:border-foreground/20 text-foreground"
    }

    const correctIndex = quiz[currentQuestion].answer

    if (index === correctIndex) {
      // Correct answer
      return "bg-green-500 border-green-500 text-white hover:bg-green-600"
    }

    if (index === selectedAnswer && index !== correctIndex) {
      // Incorrect selected answer
      return "bg-red-500 border-red-500 text-white hover:bg-red-600"
    }

    // Other options
    return "bg-card border-border text-muted-foreground opacity-60"
  }

  // --- RESULTS SCREEN ---
  if (isCompleted) {
    const scorePercentage = Math.round((score / totalQuestions) * 100)
    const getTrophyColor = () => {
      if (scorePercentage >= 90) return "text-yellow-500"
      if (scorePercentage >= 70) return "text-blue-500"
      return "text-muted-foreground"
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <div className="flex min-h-screen items-center justify-center px-4 py-16">
          <Card className="w-full max-w-[600px] border border-border/50 bg-card/80 p-8 shadow-2xl backdrop-blur-sm sm:p-12">
            {/* Trophy Icon */}
            <div className="mb-6 flex justify-center">
              <div className={`rounded-full bg-muted/50 p-6 ${getTrophyColor()}`}>
                <Trophy className="h-16 w-16" />
              </div>
            </div>

            {/* Headline */}
            <h1 className="mb-4 text-center text-balance font-sans text-3xl font-bold text-foreground sm:text-4xl">
              You're Done!
            </h1>

            {/* Score */}
            <p className="mb-8 text-center text-lg text-muted-foreground">
              You scored{" "}
              <span className="font-bold text-foreground">
                {score} out of {totalQuestions}
              </span>{" "}
              ({scorePercentage}%)
            </p>

            {/* Stats Breakdown */}
            <div className="mb-8 grid grid-cols-3 gap-4 rounded-xl bg-muted/30 p-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500">{score}</div>
                <div className="text-sm text-muted-foreground">Correct</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">{totalQuestions - score}</div>
                <div className="text-sm text-muted-foreground">Incorrect</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">{totalQuestions}</div>
                <div className="text-sm text-muted-foreground">Total</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                variant="outline"
                size="lg"
                onClick={handleReviewSummary}
                className="flex-1 bg-transparent transition-all hover:scale-105"
              >
                <FileText className="mr-2 h-5 w-5" />
                Review Flashcards
              </Button>
              <Button size="lg" onClick={handleRetry} className="flex-1 transition-all hover:scale-105">
                <RotateCcw className="mr-2 h-5 w-5" />
                Retry Quiz
              </Button>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  // --- QUESTION SCREEN ---
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Sticky Header with Progress */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 shadow-sm backdrop-blur-xl">
        <div className="mx-auto max-w-[720px] px-4 py-4">
          <div className="mb-3 flex items-center justify-between">
            <h1 className="text-lg font-semibold text-foreground">Your Quiz</h1>
            <span className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {totalQuestions}
            </span>
          </div>
          {/* Progress Bar */}
          <div className="h-2 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </header>

      {/* Main Quiz Content */}
      <main className="px-4 py-8 sm:py-12">
        <div className="mx-auto max-w-[720px]">
          {/* Question Card */}
          <Card className="mb-6 border border-border/50 bg-card/80 p-6 shadow-xl backdrop-blur-sm transition-all sm:p-8">
            <h2 className="text-balance text-xl font-semibold leading-relaxed text-foreground sm:text-2xl">
              {quiz[currentQuestion].question}
            </h2>
          </Card>

          {/* Answer Choices */}
          <div className="space-y-3">
            {quiz[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={answeredQuestions[currentQuestion]}
                className={`w-full rounded-xl border-2 p-4 text-left font-medium transition-all duration-300 disabled:cursor-not-allowed sm:p-5 ${getAnswerClassName(
                  index
                )} ${
                  selectedAnswer === index && !answeredQuestions[currentQuestion]
                    ? "scale-[1.02] border-primary shadow-lg"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold ${
                      answeredQuestions[currentQuestion]
                        ? index === quiz[currentQuestion].answer
                          ? "border-white bg-white/20"
                          : index === selectedAnswer
                            ? "border-white bg-white/20"
                            : "border-current"
                        : "border-current"
                    }`}
                  >
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-pretty leading-relaxed">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Feedback Message */}
          {showFeedback && (
            <div className="mt-6 animate-in fade-in slide-in-from-top-2">
              {correctAnswers[currentQuestion] ? (
                <p className="text-center text-lg font-semibold text-green-600">Correct! Well done!</p>
              ) : (
                <p className="text-center text-lg font-semibold text-red-600">
                  Not quite. The correct answer is highlighted in green.
                </p>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Floating Next Button */}
      {answeredQuestions[currentQuestion] && (
        <div className="fixed bottom-6 right-6 z-40 animate-in fade-in zoom-in">
          <Button
            size="lg"
            onClick={handleNext}
            className="group h-14 rounded-full px-8 shadow-2xl transition-all hover:scale-105 hover:shadow-3xl"
          >
            <span className="mr-2">{currentQuestion === totalQuestions - 1 ? "Finish" : "Next"}</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      )}
    </div>
  )
}