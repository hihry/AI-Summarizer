"use client"

import { useEffect, useState } from "react"

export default function ProcessingPage() {
  const [currentPhrase, setCurrentPhrase] = useState(0)

  const phrases = ["Reading your notes…", "Extracting key concepts…", "Building flashcards…", "Designing questions…"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [phrases.length])

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Animated starfield background */}
      <div className="absolute inset-0">
        <div className="absolute left-[10%] top-[20%] h-1 w-1 animate-pulse rounded-full bg-foreground/20" />
        <div className="absolute left-[80%] top-[30%] h-1 w-1 animate-pulse rounded-full bg-foreground/30 [animation-delay:0.5s]" />
        <div className="absolute left-[25%] top-[60%] h-1.5 w-1.5 animate-pulse rounded-full bg-foreground/20 [animation-delay:1s]" />
        <div className="absolute left-[70%] top-[70%] h-1 w-1 animate-pulse rounded-full bg-foreground/25 [animation-delay:1.5s]" />
        <div className="absolute left-[45%] top-[15%] h-1 w-1 animate-pulse rounded-full bg-foreground/30 [animation-delay:0.3s]" />
        <div className="absolute left-[15%] top-[85%] h-1.5 w-1.5 animate-pulse rounded-full bg-foreground/20 [animation-delay:0.8s]" />
        <div className="absolute left-[90%] top-[50%] h-1 w-1 animate-pulse rounded-full bg-foreground/25 [animation-delay:1.2s]" />
        <div className="absolute left-[35%] top-[40%] h-1 w-1 animate-pulse rounded-full bg-foreground/30 [animation-delay:0.2s]" />
      </div>

      {/* Center content */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-4">
        {/* Microtag */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-muted/30 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground backdrop-blur-sm">
          AI IS THINKING
        </div>

        {/* Glowing orb with particles */}
        <div className="relative mb-12 flex items-center justify-center">
          {/* Rotating particles */}
          <div className="absolute h-64 w-64 animate-spin [animation-duration:20s]">
            <div className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-foreground/20" />
            <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-foreground/20" />
            <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-foreground/20" />
            <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-foreground/20" />
          </div>

          {/* Outer glow rings */}
          <div className="absolute h-56 w-56 animate-pulse rounded-full bg-foreground/5 blur-3xl [animation-duration:3s]" />
          <div className="absolute h-48 w-48 animate-pulse rounded-full bg-foreground/10 blur-2xl [animation-delay:0.5s] [animation-duration:3s]" />

          {/* Main orb */}
          <div className="relative h-32 w-32 animate-pulse rounded-full bg-gradient-to-br from-foreground/30 via-foreground/20 to-foreground/10 shadow-2xl [animation-duration:2s]">
            <div className="absolute inset-2 animate-spin rounded-full bg-gradient-to-tr from-transparent via-foreground/20 to-transparent [animation-duration:4s]" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-bl from-foreground/30 to-transparent" />
          </div>
        </div>

        {/* Cycling text */}
        <div className="relative h-8 overflow-hidden">
          {phrases.map((phrase, index) => (
            <p
              key={phrase}
              className={`absolute inset-0 text-center text-lg font-medium tracking-tight text-foreground transition-all duration-500 ${
                index === currentPhrase
                  ? "translate-y-0 opacity-100"
                  : index < currentPhrase
                    ? "-translate-y-full opacity-0"
                    : "translate-y-full opacity-0"
              }`}
            >
              {phrase}
            </p>
          ))}
        </div>
      </div>

      {/* Animated progress bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden bg-border/50">
        <div className="h-full w-1/3 animate-pulse bg-gradient-to-r from-transparent via-foreground/40 to-transparent [animation-duration:2s]" />
        <div className="absolute left-0 top-0 h-full w-full animate-[shimmer_2s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </main>
  )
}
