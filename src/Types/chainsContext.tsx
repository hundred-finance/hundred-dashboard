import { createContext, useContext } from "react";
import { EpochsInfo, VotingInfo } from "./data";

export type ChainsContext = {
    chainEpochs: EpochsInfo[] | undefined,
    setChainEpochs: (e: EpochsInfo[]) => void,
    votingInfo: VotingInfo[] | undefined,
    setVotingInfo: (e: VotingInfo[]) => void,

}

export const ChainDataContext = createContext<ChainsContext>({
    chainEpochs: undefined,
    setChainEpochs: () => {},
    votingInfo: undefined,
    setVotingInfo: () => {},

})

export const useChainsContext = () => useContext(ChainDataContext)