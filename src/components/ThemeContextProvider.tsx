'use client'

import { createContext, useState } from 'react'

const ThemeContext = createContext<IThemeContext>({
  theme: undefined,
  toggleTheme: undefined,
})

function ThemeContextProvider({ themeFromCookies = 'light', children }: IThemeContextProvider) {
  const [currentTheme, setCurrentTheme] = useState<IThemeContext['theme']>(themeFromCookies)

  const toggleThemeHandler = () => {
    setCurrentTheme(prev => {
      const nextTheme = prev === 'light' ? 'dark' : 'light'
      document.documentElement.setAttribute('class', nextTheme!)
      document.cookie = `theme=${nextTheme};`
      return nextTheme
    })
  }

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme: toggleThemeHandler }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
