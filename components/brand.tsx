import Link from 'next/link'

import { LogoIcon } from './icons/logo'

export function Brand() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <LogoIcon className="h-8 w-8 md:h-10 md:w-10" />
      <span className="hidden text-xl font-semibold md:block">
        Portfolio Tracker
      </span>
    </Link>
  )
}
