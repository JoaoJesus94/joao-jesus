import '@/styles/globals.css'

import { cookies } from 'next/headers'
import { cx } from 'class-variance-authority'
import { Poppins, DM_Sans } from 'next/font/google'
import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'

import { Header } from '@/components/Header'
import { Maintenance } from '@/components/Maintenance'
import { ThemeContextProvider } from '@/context/ThemeContextProvider'

export const metadata: Metadata = {
  title: 'João Jesus | Frontend Developer',
  description:
    'Frontend developer with experience in building and maintaining web applications. Based in Portugal. Specializing in React.',
}

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400'],
  display: 'swap',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const themeFromCookies = cookieStore.get('theme')?.value as IThemeContext['theme']
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === '1'

  return (
    <ThemeContextProvider themeFromCookies={themeFromCookies}>
      <html lang='en' className={cx(themeFromCookies, dmSans.variable, poppins.variable)}>
        <head />
        {isMaintenanceMode ? (
          <Maintenance />
        ) : (
          <>
            <body className='bg-white dark:bg-background text-black dark:text-white font-body pt-6 px-6 max-w-screen-lg m-auto transition-colors duration-300'>
              <Header />
              {children}
              <Analytics />
              <SpeedInsights />
            </body>
          </>
        )}
      </html>
    </ThemeContextProvider>
  )
}
