"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button 
    onClick={() => {theme == "light" ? setTheme("dark") : setTheme("light")}}
    size={'icon'}
    >
      {theme == "light" ? <Moon /> : <Sun />}
    </Button>
  )
}
