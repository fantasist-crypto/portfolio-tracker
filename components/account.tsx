'use client'

import { useEffect, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AvatarImg from '@/assets/avatar.jpeg'
import { shortenAddress } from '@/utils'
import { Plus, Wallet } from 'lucide-react'

import { useStore } from '@/lib/store'
import { cn } from '@/lib/utils'

import { Button, buttonVariants } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function Account() {
  const { initialized, initialize, accounts } = useStore()

  const currentAccount = useMemo(
    () => accounts.find((account) => account.connected) ?? accounts[0],
    [accounts],
  )

  useEffect(() => {
    void initialize()
  }, [initialize])

  if (!initialized) {
    return (
      <div className="h-9 w-32 animate-pulse rounded-md bg-zinc-100 dark:bg-zinc-800"></div>
    )
  }

  if (!currentAccount) {
    return (
      <Link
        href="/connect"
        className={cn(
          buttonVariants({
            variant: 'primary',
            size: 'sm',
            className: 'cursor-pointer',
          }),
        )}
      >
        Connect Wallet
      </Link>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="space-x-2">
          <Image
            src={AvatarImg}
            alt=""
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="hidden font-bold md:block">
            {shortenAddress(currentAccount.address)}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Wallets</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {accounts.map((account) => (
            <DropdownMenuItem key={account.address}>
              <Image
                src={AvatarImg}
                alt=""
                width={24}
                height={24}
                className="mr-2 rounded-full"
              />
              <span className="font-semibold">
                {shortenAddress(account.address)}
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="space-y-1">
          <DropdownMenuItem asChild>
            <Link
              href="/connect"
              className={cn(
                buttonVariants({
                  className: 'w-full cursor-pointer justify-start',
                  variant: 'ghost',
                  size: 'sm',
                }),
              )}
            >
              <Plus className="mr-2 h-4 w-4" />
              Connect another wallet
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link
              href="/wallets"
              className={cn(
                buttonVariants({
                  className: 'w-full cursor-pointer justify-start',
                  variant: 'ghost',
                  size: 'sm',
                }),
              )}
            >
              <Wallet className="mr-2 h-4 w-4" />
              Manage Wallets
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
