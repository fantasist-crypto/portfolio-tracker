import { Search } from 'lucide-react'

import { Button } from './ui/button'

export function SearchMobile() {
  return (
    <Button variant="ghost" size="sm">
      <Search className="h-5 w-5" />
    </Button>
  )
}
