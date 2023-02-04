import type { ReactNode } from 'react'

import '@/styles/globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white font-sans text-zinc-900 antialiased dark:bg-zinc-900 dark:text-zinc-50">
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
