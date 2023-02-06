import type { ReactNode } from 'react'

import '@/styles/globals.css'
import { Brand } from '@/components/brand'
import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { ThemeProvider } from '@/components/theme-provider'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white font-sans text-primary-900 antialiased dark:bg-primary-900 dark:text-primary-50">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="container mx-auto grid min-h-screen grid-rows-[64px_minmax(0,1fr)] md:grid-cols-[240px_minmax(0,1fr)] md:gap-x-6 md:gap-y-2 lg:grid-cols-[256px_minmax(0,1fr)] lg:gap-y-2 lg:gap-x-10">
            <div className="hidden items-center md:flex">
              <Brand />
            </div>
            <Header />
            <div className="hidden md:block">
              <Sidebar />
            </div>
            <main className="py-6 lg:py-10">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
