import type { ReactNode } from 'react'

import '@/styles/globals.css'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white font-sans">{children}</body>
    </html>
  )
}
