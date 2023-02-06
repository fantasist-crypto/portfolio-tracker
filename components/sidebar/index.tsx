import { HTMLAttributes } from 'react'
import Link from 'next/link'
import { ArrowLeftRight, Home, LayoutDashboard, Send, Star } from 'lucide-react'

import { NavItem } from './nav-item'

export interface SidebarProps extends HTMLAttributes<HTMLElement> {}

export function Sidebar({ ...props }: SidebarProps) {
  return (
    <aside {...props}>
      <ul className="space-y-2">
        <li>
          <Link href="/portfolio">
            <NavItem
              title="My Portfolio"
              href="/portfolio"
              icon={<Home className="h-5 w-5" />}
            />
          </Link>
        </li>

        <li>
          <Link href="/browse">
            <NavItem
              title="Browse"
              href="/browse"
              icon={<LayoutDashboard className="h-5 w-5" />}
            />
          </Link>
        </li>

        <li>
          <Link href="/favorites">
            <NavItem
              title="Favorites"
              href="/favorites"
              icon={<Star className="h-5 w-5" />}
            />
          </Link>
        </li>

        <li>
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
            Tools
          </h4>
        </li>

        <li>
          <NavItem
            title="Send"
            href="/send"
            icon={<Send className="h-5 w-5" />}
            disabled
          />
        </li>

        <li>
          <NavItem
            title="Swap"
            href="/swap"
            icon={<ArrowLeftRight className="h-5 w-5" />}
            disabled
          />
        </li>
      </ul>
    </aside>
  )
}
