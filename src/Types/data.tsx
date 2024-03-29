import { ethers } from "ethers";
import { BigNumber } from "../bigNumber";

export type Data = {
    signer: ethers.providers.JsonRpcSigner | null,
    comptroller: Comptroller | null,
    markets: HTokenInfo[],
    interestRateModels: InterestRateModel[]
}

export type Comptroller = {
    address: string,
    comptroller: ethers.Contract,
    oracleAddress: string,
    oracle: ethers.Contract,
    allMarkets: string[],
    borrowPaused: boolean,
    borrowPausedLoading: boolean,
    mintPaused: boolean,
    mintPausedLoading: boolean,
    seizePaused: boolean,
    seizePausedLoading: boolean,
    transferPaused: boolean,
    transferPausedLoading: boolean,
    admin: string,
    closeFactor: number,
    closeFactorEdit: number,
    closeFactorLoading: boolean,
    compRate: number,
    hundred: string,
    liquidationIncentive: number,
    liquidationIncentiveEdit : number,
    liquidationIncentiveLoading : boolean,
    pauseGuardian: string,
    implementation: string
}

export type UnderlyingInfo = {
    address: string,
    symbol: string,
    logo: string,
    name: string,
    decimals: number,
    totalSupply: any
}

export type HTokenInfo = {
    address: string,
    symbol: string,
    totalSupply: number,
    borrows: number,
    reserves: number,
    reserveFactor: number,
    reserveFactorEdit: number,
    reserveFactorLoading: boolean,
    cash: number,
    decimals: number,
    exchangeRate: number,
    supplyRate: number,
    borrowRate: number,
    utilizationRate: number,
    interestRateModel : string,
    interestRateContract: ethers.Contract,
    mintPaused: boolean,
    mintPausedLoading: boolean,
    borrowPaused: boolean,
    borrowPausedLoading: boolean,
    price: number,
    underlying: UnderlyingInfo,
    collateralFactor: number,
    collateralFactorEdit: number,
    collateralFactorLoading: boolean,
    isComped: boolean,
    isCompedLoading: boolean,
    admin: string,
    implementation: string,
    bprotocol: string
}

export type InterestRateModel = {
    address : string,
    name: string,
    baseRatePerSecond: number,
    baseRatePerYear : number,
    jumpMultiplierPerSecond : number,
    jumpMultiplierPerYear : number,
    kink : number,
    multiplierPerSecond: number,
    multiplierPerYear : number,
    secondsPerYear: number,
    owner: string
}

export type Admins = {
    Unitroller: string, 
    Oracle: string, 
    Hundred: string, 
    PauseGuardian: string
}

export type Contracts = {
    contractsV2: ContractInfo, 
    backstop?: null | ContractInfo
}

export type ContractInfoValues = {
    address?: string,
    admin?: string
}

export type ContractInfo = {
    DelegationProxy?: ContractInfoValues, 
    GaugeController?: ContractInfoValues, 
    Minter?: ContractInfoValues, 
    MirroredVotingEscrow?: ContractInfoValues,
    RewardPolicyMaker?: ContractInfoValues, 
    SmartWalletChecker?: ContractInfoValues, 
    Treasury?: ContractInfoValues, 
    VeBoostDelegation?: ContractInfoValues, 
    VotingEscrow?: ContractInfoValues, 
}

export type GaugeV4 = {

    address : string
    admin: string
    backstopGauge: boolean
    backstopTotalBalance: BigNumber
    backstopTotalSupply: BigNumber
    decimals: number
    lpBackstopTokenUnderlying: string | undefined
    lpToken: string
    lpTokenUnderlying: string
    minter: string
    rewardPolicyMaker: string
    totalStake: BigNumber
    underlying: UnderlyingInfo
    workingTotalStake: BigNumber
}

export type EpochsInfo = {
    network?: string
    currentEpoch: number
    epoch0Rewards: number
    epoch1Rewards: number
    epoch2Rewards: number
    epoch3Rewards: number
    treasuryBalance?: number
}
//for all chains dashboard
export type BackstopsInfo = {
    network: string
    currentEpoch: number
    epoch0Rewards: number
    epoch1Rewards: number
    epoch2Rewards: number
    epoch3Rewards: number
    treasuryBalance: number
}
//chain specific dashboard
export type Backstop = {
    address : string
    admin: string
    backstopGauge: boolean
    backstopTotalBalance: BigNumber
    backstopTotalSupply: BigNumber
    decimals: number
    lpBackstopTokenUnderlying: string | undefined
    lpToken: string
    lpTokenUnderlying: string
    minter: string
    rewardPolicyMaker: string
    totalStake: BigNumber
    underlying: UnderlyingInfo
    veHndRewardRate: BigNumber
    weight: BigNumber
    workingTotalStake: BigNumber
}
export type VotingInfo = {
    network: string
    lockedHnd: number 
    veHnd: number
    mveHnd: number
    circulating: number
    avgLockTime: number
}

export type MigrationInfo = {
    total: number
    hndMigrating: number 
    hndVesting: number
    hndPiouMigrating: number
    hndPiouVesting: number
}
