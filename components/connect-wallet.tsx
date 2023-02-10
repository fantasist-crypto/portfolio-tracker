'use client'

import Image from 'next/image'
import MetaMaskLogo from '@/assets/metamask.svg'
import { toast } from '@/hooks/use-toast'

import { useStore } from '@/lib/store'
import { ProviderRpcError } from '@/lib/store/metamask'

import { Button } from './ui/button'

export function ConnectWallet() {
  const { connectMetaMask } = useStore()

  const handleConnectMetaMask = async () => {
    try {
      await connectMetaMask()
    } catch (error) {
      if ((error as ProviderRpcError).code === 4001) {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: 'The request was rejected by the user.',
        })
      } else if ((error as ProviderRpcError).code === -32602) {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request parameters.',
        })
      } else if ((error as ProviderRpcError).code === -32602) {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: 'There was a unknown problem with your request.',
        })
      }
    }
  }

  return (
    <>
      <h2 className="mt-10 scroll-m-20 pb-4 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Connect Wallet
      </h2>
      <ul className="flex">
        <Button
          className="h-auto w-auto flex-col space-y-2 p-4"
          variant="ghost"
          size="lg"
          onClick={handleConnectMetaMask}
        >
          <Image src={MetaMaskLogo} alt="MetaMask" width={40} height={40} />
          <span className="mt-2 text-xs font-semibold">MetaMask</span>
        </Button>
      </ul>
    </>
  )
}
