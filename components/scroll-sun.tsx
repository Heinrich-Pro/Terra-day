"use client"

import { useEffect, useState } from "react"

export function ScrollSun() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = window.scrollY / totalHeight
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate sun position and size based on scroll
  // Sun starts small and far (top right), grows and moves closer as you scroll
  const sunSize = 80 + scrollProgress * 200 // 80px to 280px
  const sunRight = 5 - scrollProgress * 3 // Moves slightly left
  const sunTop = 5 + scrollProgress * 15 // Moves down
  const sunOpacity = 0.6 + scrollProgress * 0.3 // Gets brighter
  const sunBlur = 40 - scrollProgress * 20 // Less blur as it gets closer

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      <div
        className="absolute transition-all duration-300 ease-out"
        style={{
          right: `${sunRight}%`,
          top: `${sunTop}%`,
          width: `${sunSize}px`,
          height: `${sunSize}px`,
          opacity: sunOpacity,
        }}
      >
        {/* Sun core */}
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500"
          style={{
            boxShadow: `0 0 ${sunBlur}px rgba(251, 191, 36, 0.8), 0 0 ${sunBlur * 2}px rgba(251, 146, 60, 0.6)`,
          }}
        />

        {/* Sun rays */}
        <div
          className="absolute inset-0 rounded-full animate-spin"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0%, rgba(251, 191, 36, 0.3) 10%, transparent 20%, rgba(251, 191, 36, 0.3) 30%, transparent 40%, rgba(251, 191, 36, 0.3) 50%, transparent 60%, rgba(251, 191, 36, 0.3) 70%, transparent 80%, rgba(251, 191, 36, 0.3) 90%, transparent 100%)",
            animationDuration: "20s",
            filter: `blur(${sunBlur / 2}px)`,
          }}
        />

        {/* Outer glow */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, transparent 70%)",
            transform: "scale(1.5)",
            filter: `blur(${sunBlur}px)`,
          }}
        />
      </div>
    </div>
  )
}
