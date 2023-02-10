interface IThemeContext {
  theme?: 'light' | 'dark'
  toggleTheme?: () => void
}

interface IThemeContextProvider {
  themeFromCookies?: IThemeContext['theme']
  children: ReactNode
}
