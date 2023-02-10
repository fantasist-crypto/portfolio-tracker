import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { createMetaMaskWalletSlice, type MetaMaskWalletSlice } from './metamask'
import { createWeb3Slice, type Web3Slice } from './web3'

export const useStore = create<Web3Slice & MetaMaskWalletSlice>()(
  persist(
    (...a) => ({
      ...createWeb3Slice(...a),
      ...createMetaMaskWalletSlice(...a),
    }),
    {
      name: 'storage',
      partialize: ({ accounts }) => ({ accounts }),
    },
  ),
)
