"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookOpen, Brain, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter();

  function routeToNext(){
    router.push('./notes')
  }
  
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="flex min-h-[80vh] items-center justify-center px-4 py-16">
        <div className="mx-auto w-full max-w-[700px] text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur">
            <Sparkles className="h-4 w-4" />
            <span>Powered by AI</span>
          </div>

          <h1 className="mb-8 text-balance font-sans text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl lg:leading-[1.1]">
            Transform Your Study Notes Into Deep Learning
          </h1>

          <p className="mb-10 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl lg:leading-relaxed">
            AI Learning Companion turns your lecture notes into summaries, quizzes, and flashcards — helping you learn
            faster and retain more.
          </p>

          <Button
            onClick={routeToNext}
            size="lg"
            className="h-12 rounded-full px-8 text-base font-medium shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            Get Started
          </Button>
        </div>
      </section>

      {/* Feature Section */}
      <section className="px-4 py-16">
        <div className="mx-auto w-full max-w-[700px]">
          <div className="grid gap-6 sm:grid-cols-3">
            {/* Feature 1 */}
            <Card className="group relative overflow-hidden border border-border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-balance font-sans text-lg font-semibold text-card-foreground">
                Generate Summaries
              </h3>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                Get concise, AI-powered summaries of your lecture notes in seconds.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="group relative overflow-hidden border border-border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-balance font-sans text-lg font-semibold text-card-foreground">Test Yourself</h3>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                Practice with auto-generated quizzes tailored to your study material.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="group relative overflow-hidden border border-border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-balance font-sans text-lg font-semibold text-card-foreground">AI Flashcards</h3>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                Master concepts with intelligent flashcards that adapt to your learning.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
