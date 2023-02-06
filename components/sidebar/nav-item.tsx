'use client'

import { ReactNode, useMemo } from 'react'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

export interface NavItemProps {
  title: string
  href?: string
  icon?: ReactNode
  disabled?: boolean
  external?: boolean
}

export function NavItem({ title, href, disabled, icon }: NavItemProps) {
  const pathname = usePathname()
  const isActive = useMemo(
    () => pathname && href && pathname.startsWith(href),
    [pathname, href],
  )

  return (
    <div
      className={cn(
        'flex h-10 items-center space-x-2 rounded-lg px-4 text-sm font-medium',
        isActive
          ? 'text-zinc-900 dark:text-white'
          : 'text-zinc-600 dark:text-zinc-400',
        disabled
          ? 'cursor-not-allowed text-zinc-400 dark:text-zinc-600'
          : 'hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:hover:text-zinc-100',
      )}
    >
      {icon}
      <span>{title}</span>
    </div>
  )
}
