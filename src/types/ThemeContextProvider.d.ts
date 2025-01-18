type Theme = 'light' | 'dark'

interface IThemeContext {
  theme?: Theme
  toggleTheme?: () => void
}

interface ThemeContextProviderProps {
  themeFromCookies: Theme
  children: ReactNode
}
