'use client'

import Image from 'next/image'
import AvatarImg from '@/assets/avatar.jpeg'

import { Button } from './ui/button'

export function Account() {
  return (
    <Button variant="ghost" size="sm" className="space-x-2">
      <Image
        src={AvatarImg}
        alt=""
        width={24}
        height={24}
        className="rounded-full"
      />
      <span className="hidden font-bold md:block">0xf39f...2266</span>
    </Button>
  )
}
