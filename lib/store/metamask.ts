import detectEthereumProvider from '@metamask/detect-provider'
import MetaMaskOnboarding from '@metamask/onboarding'
import type { MetaMaskInpageProvider } from '@metamask/providers'
import type { StateCreator } from 'zustand'

import { connectMetaMask } from '../connectors/metamask'
import { WalletType, type Web3Slice } from './web3'

export interface MetaMaskWalletSlice {
  metaMaskInitialized: boolean

  initMetaMask: () => Promise<void>
  connectMetaMask: () => Promise<void>
}

export interface ProviderRpcError extends Error {
  message: string
  code: number
  data?: unknown
}

export const createMetaMaskWalletSlice: StateCreator<
  MetaMaskWalletSlice & Web3Slice,
  [],
  [],
  MetaMaskWalletSlice
> = (set, get) => {
  const handleAccountsChanged = ([address]: string[]) => {
    if (!address) {
      return
    }

    let accounts = [...get().accounts]

    const existedAccount = accounts.find(
      (account) => account.address === address,
    )

    if (existedAccount && existedAccount.connected) {
      return
    }

    const connectedAccount = accounts.find(
      (account) =>
        account.walletType === WalletType.MetaMask && account.connected,
    )
    connectedAccount && (connectedAccount.connected = false)

    if (existedAccount) {
      existedAccount.connected = true
    } else {
      accounts.push({
        address,
        readonly: false,
        connected: true,
        walletType: WalletType.MetaMask,
      })
    }

    set({ accounts })
  }

  const handleDisconnect = (error: ProviderRpcError) => {
    console.log('>> disconnect')
    if (error) {
      console.error(error.message)
    }
  }

  return {
    metaMaskInitialized: false,

    initMetaMask: async () => {
      if (get().metaMaskInitialized) {
        return
      }

      if (!MetaMaskOnboarding.isMetaMaskInstalled()) {
        // TODO
        return
      }

      const provider = await detectEthereumProvider<MetaMaskInpageProvider>({
        mustBeMetaMask: true,
      })

      provider!.on(
        'disconnect',
        handleDisconnect as (...args: unknown[]) => void,
      )

      provider!.on(
        'accountsChanged',
        handleAccountsChanged as (...args: unknown[]) => void,
      )

      set({ metaMaskInitialized: true })
    },
    connectMetaMask: async () => {
      if (!MetaMaskOnboarding.isMetaMaskInstalled()) {
        // TODO
        return
      }

      const { accounts } = await connectMetaMask()
      handleAccountsChanged(accounts as string[])
    },
  }
}
