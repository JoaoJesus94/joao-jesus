import { useEffect, useState } from 'react'

export function useSwitchTheme() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    if (typeof window === 'undefined') return false

    try {
      const localStorageDarkTheme = window.localStorage.getItem('isDarkTheme')
      if (localStorageDarkTheme) return localStorageDarkTheme === '1'

      return window.matchMedia('(prefers-color-scheme: dark)').matches
    } catch (error) {
      return false
    }
  })

  useEffect(() => {
    window.localStorage.setItem('isDarkTheme', isDarkTheme ? '1' : '0')
    if (isDarkTheme) {
      document.documentElement.setAttribute('class', 'dark')
    } else {
      document.documentElement.removeAttribute('class')
    }
  }, [isDarkTheme])

  const toggleTheme = () => setIsDarkTheme(prevState => !prevState)

  return { isDarkTheme, toggleTheme }
}
