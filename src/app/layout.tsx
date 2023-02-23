import '@/styles/globals.css'

import { cookies } from 'next/headers'

import { AnalyticsWrapper } from '@/components/Analytics'
import { Header } from '@/components/Header'
import { Maintenance } from '@/components/Maintenance'
import { ThemeContextProvider } from '@/context/ThemeContextProvider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const themeFromCookies = cookies().get('theme')?.value as IThemeContext['theme']
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === '1'

  return (
    <ThemeContextProvider themeFromCookies={themeFromCookies}>
      <html lang='en' className={themeFromCookies}>
        <head />
        {isMaintenanceMode ? (
          <Maintenance />
        ) : (
          <>
            <body className='bg-white dark:bg-background text-black dark:text-white font-body pt-6 px-6 max-w-screen-lg m-auto transition-colors duration-300'>
              <Header />
              {children}
            </body>
          </>
        )}
        <AnalyticsWrapper />
      </html>
    </ThemeContextProvider>
  )
}
