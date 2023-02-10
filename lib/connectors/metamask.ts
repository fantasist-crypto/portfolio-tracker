import detectEthereumProvider from '@metamask/detect-provider'
import MetaMaskOnboarding from '@metamask/onboarding'
import type { MetaMaskInpageProvider } from '@metamask/providers'

let metaMaskOnboarding: MetaMaskOnboarding

const getMetaMaskOnboarding = () => {
  metaMaskOnboarding ??= new MetaMaskOnboarding()
  return metaMaskOnboarding
}

export interface Web3WalletPermission {
  // The name of the method corresponding to the permission
  parentCapability: string

  // The date the permission was granted, in UNIX epoch time
  date?: number
}

export async function connectMetaMask() {
  const provider = await detectEthereumProvider<MetaMaskInpageProvider>({
    mustBeMetaMask: true,
  })

  if (!provider) {
    // TODO
    return { accounts: [], provider }
  }

  let accounts = await getMetaMaskAccounts(provider)

  if (!accounts || accounts.length < 0) {
    accounts = await provider.request<string[]>({
      method: 'eth_requestAccounts',
    })
  } else {
    const permissions = await provider.request<Web3WalletPermission[]>({
      method: 'wallet_requestPermissions',
      params: [{ eth_accounts: {} }],
    })
    const accountsPermission = permissions?.find(
      (permission) => permission?.parentCapability === 'eth_accounts',
    )
    if (accountsPermission) {
      accounts = await getMetaMaskAccounts(provider)
    }
  }

  return { accounts, provider }
}

export function getMetaMaskAccounts(provider: MetaMaskInpageProvider) {
  return provider.request<string[]>({
    method: 'eth_accounts',
  })
}
