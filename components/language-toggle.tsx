"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

interface LanguageToggleProps {
  language: "en" | "fr"
  onToggle: () => void
}

export function LanguageToggle({ language, onToggle }: LanguageToggleProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onToggle}
      className="border-cyan-400/30 text-cyan-100 hover:bg-cyan-400/20 bg-transparent gap-2"
    >
      <Globe className="h-4 w-4" />
      <span className="font-semibold">{language === "en" ? "FR" : "EN"}</span>
    </Button>
  )
}
