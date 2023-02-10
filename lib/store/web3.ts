import { create, type StateCreator } from 'zustand'

import { MetaMaskWalletSlice } from './metamask'

export enum WalletType {
  MetaMask = 'metamask',
}

export interface Account {
  name?: string
  address: string
  readonly: boolean
  connected: boolean
  walletType: WalletType
}

export interface Web3Slice {
  initialized: boolean
  accounts: Account[]

  initialize: () => void
}

export const createWeb3Slice: StateCreator<
  Web3Slice & MetaMaskWalletSlice,
  [],
  [],
  Web3Slice
> = (set, get) => ({
  initialized: false,
  accounts: [],

  initialize: async () => {
    if (get().initialized) {
      return
    }

    await Promise.all([get().initMetaMask()])

    set({ initialized: true })
  },
})
