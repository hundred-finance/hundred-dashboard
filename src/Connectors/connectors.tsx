import NETWORKS from '../networks'
import { UnsupportedChainIdError } from '@web3-react/core'
import { InjectedConnector, NoEthereumProviderError, UserRejectedRequestError as UserRejectedRequestErrorInjected } from '@web3-react/injected-connector'
import { WalletConnectConnector, UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'



export enum connectrorsEnum{
    Metamask,
    WalletConnect,
    Coinbase
}

const Networks = Object.values(NETWORKS)
const supportedChains = [...Networks].map(n => n.chainId)
let RPC_URLS: any = {}
Networks.forEach((n) => {
   RPC_URLS[n.chainId]= n.networkParams.rpcUrls[0]
})

const injected = new InjectedConnector({ supportedChainIds: supportedChains })

let walletConnect = new WalletConnectConnector({
    rpc: RPC_URLS,
    chainId: 1,
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true
})

export const GetConnector = (c: any, chain?: number) => {
    if(c === connectrorsEnum.WalletConnect){
        if(chain)
            walletConnect = new WalletConnectConnector({
                rpc: RPC_URLS,
                chainId: chain,
                bridge: 'https://bridge.walletconnect.org',
                qrcode: true
            })
        return walletConnect
    }
    if(c === connectrorsEnum.Coinbase){
        return new WalletLinkConnector({
            url: chain ? NETWORKS[chain].networkParams.rpcUrls[0] : NETWORKS[1].networkParams.rpcUrls[0],
            appName: 'Hundred Finance Dashboard',
            supportedChainIds: supportedChains
          })
    }
    return injected
}

export const getErrorMessage = (error: Error) => {
    if (error instanceof NoEthereumProviderError) {
      return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.'
    } else if (error instanceof UnsupportedChainIdError) {
      return "You're connected to an unsupported network."
    } else if (
      error instanceof UserRejectedRequestErrorInjected ||
      error instanceof UserRejectedRequestErrorWalletConnect
    ) {
      return 'Please authorize this website to access your Ethereum account.'
    } else {
      console.error(error)
      return 'An unknown error occurred. Check the console for more details.'
    }
  }
