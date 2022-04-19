import { createContext, useContext } from "react";
import { EpochsInfo } from "./data";

export type ChainsContext = {
    chainEpochs: EpochsInfo[] | undefined,
    setChainEpochs: (e: EpochsInfo[]) => void,

}

export const ChainDataContext = createContext<ChainsContext>({
    chainEpochs: undefined,
    setChainEpochs: () => {},

})

export const useChainsContext = () => useContext(ChainDataContext)