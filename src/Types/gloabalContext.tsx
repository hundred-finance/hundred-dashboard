import { ethers } from "ethers";
import { createContext, useContext } from "react";
import NETWORKS, { Network } from "../networks";

export type GlobalContext = {
    network: Network | null,
    setNetwork: (n: Network) => void,
    provider: ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider | undefined,
    setProvider: (p: ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider | undefined) => void
    openSpinner: boolean,
    setOpenSpinner: (n: boolean) => void,
}

export const MyGlobalContext = createContext<GlobalContext>({
    network: NETWORKS[1],
    setNetwork: () => {},
    provider : undefined,
    setProvider: () => {},
    openSpinner: false,
    setOpenSpinner: () => {}
})

export const useGlobalContext = () => useContext(MyGlobalContext)
