import { createContext, useContext } from "react";
import { BackstopsInfo, EpochsInfo, MigrationInfo, VotingInfo } from "./data";

export type ChainsContext = {
    chainEpochs: EpochsInfo[] | undefined,
    setChainEpochs: (e: EpochsInfo[]) => void,
    votingInfo: VotingInfo[] | undefined,
    setVotingInfo: (v: VotingInfo[]) => void,
    migrationInfo: MigrationInfo | undefined,
    setMigrationInfo: (m: MigrationInfo) => void,
    backstopInfo: BackstopsInfo[] | undefined,
    setBackstopInfo: (b: BackstopsInfo[]) => void,
    lendlyInfo: EpochsInfo[] | undefined,
    setLendlyInfo: (e: EpochsInfo[]) => void,
}

export const ChainDataContext = createContext<ChainsContext>({
    chainEpochs: undefined,
    setChainEpochs: () => {},
    votingInfo: undefined,
    setVotingInfo: () => {},
    migrationInfo: undefined,
    setMigrationInfo: () => {},
    backstopInfo: undefined,
    setBackstopInfo: () => {},
    lendlyInfo: undefined,
    setLendlyInfo: () => {}
})

export const useChainsContext = () => useContext(ChainDataContext)