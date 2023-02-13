interface IThemeContext {
  theme?: 'light' | 'dark'
  toggleTheme?: () => void
}

interface ThemeContextProviderProps {
  themeFromCookies?: IThemeContext['theme']
  children: ReactNode
}
