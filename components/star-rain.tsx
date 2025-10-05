"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
}

export function StarRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create stars
    const stars: Star[] = []
    const starCount = 150

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.5 + 0.3,
      })
    }

    // Animation loop
    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        // Draw star
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(6, 182, 212, ${star.opacity})`
        ctx.fill()

        // Add glow effect
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3)
        gradient.addColorStop(0, `rgba(6, 182, 212, ${star.opacity * 0.8})`)
        gradient.addColorStop(1, "rgba(6, 182, 212, 0)")
        ctx.fillStyle = gradient
        ctx.fill()

        // Move star down
        star.y += star.speed

        // Reset star to top when it goes off screen
        if (star.y > canvas.height) {
          star.y = -10
          star.x = Math.random() * canvas.width
        }

        // Twinkle effect
        star.opacity += (Math.random() - 0.5) * 0.02
        star.opacity = Math.max(0.2, Math.min(0.8, star.opacity))
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}
