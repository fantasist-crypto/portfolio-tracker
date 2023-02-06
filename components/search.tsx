'use client'

import type { HTMLAttributes, SyntheticEvent } from 'react'

import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'

export interface SearchProps extends HTMLAttributes<HTMLFormElement> {}

export function Search({ className, ...props }: SearchProps) {
  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn('relative w-full', className)}
      {...props}
    >
      <Input
        type="search"
        placeholder="Search..."
        className="block h-9 sm:pr-12 md:w-40 lg:w-64"
        disabled
      />
      <kbd className="pointer-events-none absolute top-2 right-1.5 hidden h-5 select-none items-center gap-1 rounded border border-primary-100 bg-primary-100 px-1.5 font-mono text-[10px] font-medium text-primary-600 opacity-100 dark:border-primary-700 dark:bg-primary-900 dark:text-primary-400 sm:flex">
        <span className="text-xs">⌘</span>K
      </kbd>
    </form>
  )
}
