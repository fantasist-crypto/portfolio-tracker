import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ConnectWallet } from '@/components/connect-wallet'

export default function Page() {
  return (
    <div className="mx-auto max-w-screen-sm">
      <ConnectWallet />
      <h4 className="mt-8 scroll-m-20 pb-4 text-xl font-semibold tracking-tight">
        Watch any wallet
      </h4>
      <div className="flex space-x-3">
        <Input />
        <Button variant="outline">Add</Button>
      </div>
    </div>
  )
}
