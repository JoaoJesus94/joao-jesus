import '@/styles/globals.css'

import { cookies } from 'next/headers'

import { Header } from '@/components/Header'
import { ThemeContextProvider } from '@/components/ThemeContextProvider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const themeFromCookies = cookies().get('theme')?.value as IThemeContext['theme']

  return (
    <ThemeContextProvider themeFromCookies={themeFromCookies}>
      <html lang='en' className={themeFromCookies}>
        <head />

        <body className='bg-white dark:bg-background text-black dark:text-white font-body pt-6 px-6 max-w-screen-lg m-auto transition-colors duration-300'>
          <Header />
          {children}
        </body>
      </html>
    </ThemeContextProvider>
  )
}
