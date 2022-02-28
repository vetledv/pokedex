import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { DarkModeState } from '../interfaces/components'

export const useDarkMode = () => {
  const [theme, setTheme] = useState<DarkModeState>(
    localStorage.theme || 'dark'
  )
  const colorTheme = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove(colorTheme)
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme, colorTheme])
  return [colorTheme, setTheme] as const
}
