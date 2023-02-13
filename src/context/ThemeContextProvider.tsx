'use client'

import { createContext, useState } from 'react'

const ThemeContext = createContext<IThemeContext>({
  theme: undefined,
  toggleTheme: undefined,
})

function ThemeContextProvider({ themeFromCookies = 'light', children }: ThemeContextProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<IThemeContext['theme']>(themeFromCookies)

  const toggleThemeHandler = () => {
    setCurrentTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light'
      document.documentElement.setAttribute('class', newTheme!)
      document.cookie = `theme=${newTheme};`
      return newTheme
    })
  }

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme: toggleThemeHandler }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
