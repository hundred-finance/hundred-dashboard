import { BigNumber, ethers } from "ethers";

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
    maxAssets: number,
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
    compSpeeds: number,
    price: number,
    underlying: UnderlyingInfo,
    collateralFactor: number,
    collateralFactorEdit: number,
    collateralFactorLoading: boolean,
    isComped: boolean,
    isCompedLoading: boolean,
    hndAPR: number,
    admin: string,
}

export type InterestRateModel = {
    address : string,
    name: string,
    baseRatePerBlock: number,
    baseRatePerYear : number,
    jumpMultiplierPerBlock : number,
    jumpMultiplierPerYear : number,
    kink : number,
    multiplierPerBlock: number,
    multiplierPerYear : number,
    blocksPerYear: number,
    owner: string
}

export type Admins = {
    Unitroller: string, 
    Oracle: string, 
    Hundred: string, 
    PauseGuardian: string
}

export type Contracts = {
    contractsV1: ContractInfo, 
    contractsV2: ContractInfo, 
}

export type ContractInfo = {
    DelegationProxy: string, 
    GaugeController: string, 
    Minter: string, 
    MirroredVotingEscrow: string,
    RewardPolicyMaker: string, 
    SmartWalletChecker: string, 
    Treasury: string, 
    VeBoostDelegation: string, 
    VotingEscrow: string, 
}

export type GaugeV4 = {

    address : string
    admin: string
    backstopGauge: boolean
    backstopTotalBalance: BigNumber
    backstopTotalSupply: BigNumber
    currentEpoch: BigNumber
    decimals: number
    epoch0Rewards: BigNumber
    epoch1Rewards: BigNumber
    epoch2Rewards: BigNumber
    epoch3Rewards: BigNumber
    lpBackstopTokenUnderlying: string | undefined
    lpToken: string
    lpTokenUnderlying: string
    minter: string
    rewardPolicyMaker: string
    totalStake: BigNumber
    underlying: UnderlyingInfo
    workingTotalStake: BigNumber
}