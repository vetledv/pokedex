import { useState, useEffect } from 'react'
import { themeState } from '../interfaces/components'

//default to user system pref
const mq = window.matchMedia('(prefers-color-scheme: dark)')
const userPref = mq.matches ? 'dark' : 'light'

export const useTheme = () => {
  const [theme, setTheme] = useState<themeState>(localStorage.theme || userPref)
  const colorTheme = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(colorTheme)
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme, colorTheme])
  return [colorTheme, setTheme] as const
}
