import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export type themeState = 'dark' | 'light'
export type setThemeState = Dispatch<SetStateAction<themeState>>

export const useDarkMode = () => {
  const [theme, setTheme] = useState<themeState>(localStorage.theme || 'dark')
  const colorTheme = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(colorTheme)
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme, colorTheme])
  return [colorTheme, setTheme] as const
}
