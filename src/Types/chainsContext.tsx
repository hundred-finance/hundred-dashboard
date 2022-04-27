import { createContext, useContext } from "react";
import { EpochsInfo, MigrationInfo, VotingInfo } from "./data";

export type ChainsContext = {
    chainEpochs: EpochsInfo[] | undefined,
    setChainEpochs: (e: EpochsInfo[]) => void,
    votingInfo: VotingInfo[] | undefined,
    setVotingInfo: (v: VotingInfo[]) => void,
    migrationInfo: MigrationInfo | undefined,
    setMigrationInfo: (m: MigrationInfo) => void,
    

}

export const ChainDataContext = createContext<ChainsContext>({
    chainEpochs: undefined,
    setChainEpochs: () => {},
    votingInfo: undefined,
    setVotingInfo: () => {},
    migrationInfo: undefined,
    setMigrationInfo: () => {},

})

export const useChainsContext = () => useContext(ChainDataContext)