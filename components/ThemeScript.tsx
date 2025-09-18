'use client'
import { useEffect } from 'react'

// Prevents theme flash on first paint by applying stored theme early
export default function ThemeScript() {
  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') {
      document.documentElement.setAttribute('data-theme', stored)
    }
  }, [])
  return null
}
