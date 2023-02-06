import Image from 'next/image'
import EthIcon from '@/assets/coins/eth.svg'

import { Account } from './account'
import { Brand } from './brand'
import { Search } from './search'
import { SearchMobile } from './search-mobile'
import { ThemeToggle } from './theme-toggle'
import { Button } from './ui/button'

export function Header() {
  return (
    <header className="flex items-center border-b border-b-primary-200 dark:border-b-primary-700">
      <div className="block md:hidden">
        <Brand />
      </div>
      <div className="hidden flex-none md:block">
        <Search />
      </div>
      <div className="flex flex-1 justify-end space-x-2.5">
        <div className="block md:hidden">
          <SearchMobile />
        </div>
        <Account />
        <Button variant="ghost" size="sm">
          <Image src={EthIcon} alt="" width={24} height={24} />
        </Button>
        <ThemeToggle />
      </div>
    </header>
  )
}
