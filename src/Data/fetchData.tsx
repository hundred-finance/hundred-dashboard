import { Contract, Provider } from "ethcall"
import { ethers } from "ethers"
import { BigNumber } from "../bigNumber"
import _, { floor } from "lodash"
import ABI from "../abi"
import Logos from "../logos"
import { InterestRateModels, Network } from "../networks"
import { Admins, Comptroller, ContractInfo, Contracts, GaugeV4, HTokenInfo, InterestRateModel, UnderlyingInfo } from "../Types/data"

export const getCTokenInfo = async (address: string, network: Network, provider: ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider,
    comptroller: Comptroller, isNativeToken:boolean , ethcallProvider: Provider, rewardTokenPrice: number, unitrollerAddress: string, interestRateModels: InterestRateModels): Promise<HTokenInfo> => {
  
    const ethcallCToken = new Contract(address, ABI.CTOKEN_ABI)
    const ethcallHtoken = new Contract(address, ABI.HTOKEN_ABI)
    const oracleContract = new Contract(comptroller.oracleAddress, ABI.ORACLE_ABI)
    const ethcallComptroller = new Contract(unitrollerAddress, ABI.COMPTROLLER_ABI)

    let calls = [ethcallCToken.interestRateModel(), ethcallCToken.symbol(), ethcallCToken.getCash(), ethcallCToken.totalBorrows(),
        ethcallCToken.totalReserves(), ethcallCToken.reserveFactorMantissa(), ethcallCToken.totalSupply(), ethcallCToken.decimals(), 
        ethcallCToken.exchangeRateStored(), ethcallComptroller.mintGuardianPaused(address), ethcallComptroller.borrowGuardianPaused(address), 
        ethcallComptroller.compSpeeds(address), ethcallComptroller.markets(address), ethcallHtoken.admin(), oracleContract.getUnderlyingPrice(address)]//, ethcallCToken.borrowRatePerBlock()]
    if(!isNativeToken) calls.push(ethcallCToken.underlying())
    const data = await ethcallProvider.all(calls)
    let underlyingAddress = ""
    const interestAddress = data[0] as string
    const symbol = data[1] as string
    const cash = data[2] as any
    const borrows = data[3] as any
    const reserves = data[4] as any
    const reserveFactor = data[5] as any
    const totalSupply = data[6] as any
    const decimals = data[7] as number
    const exchangeRate = data[8] as any
    const mintPaused = data[9] as boolean
    const borrowPaused = data[10] as boolean
    const compSpeeds = data[11] as any
    const markets = data[12] as any
    const admin = data[13] as string
    const price = data[14] as any
    //const borrowRatePerBlock = data[14]
    if(!isNativeToken)
        underlyingAddress = data[15] as string

       

        const interestInfo = interestRateModels[interestAddress.toLowerCase()];
    const interestRateContract = new ethers.Contract(interestAddress, interestInfo.abi, provider);
    const ethcallInterestRate = new Contract(interestAddress, interestInfo.abi)
    const [supplyRate, borrowRate, utilizationRate] = await ethcallProvider.all([ethcallInterestRate.getSupplyRate(cash, borrows, reserves, reserveFactor),
      ethcallInterestRate.getBorrowRate(cash, borrows, reserves), ethcallInterestRate.utilizationRate(cash, borrows, reserves)])

    const underlying = await getUnderlying(ethcallProvider, underlyingAddress, network)

    const cTokenTVL = (totalSupply / 10**underlying.decimals) * (exchangeRate / 1e18) * (price / 10 ** (36 - underlying.decimals))
    
    const pctSpeed = compSpeeds / 1e18

    const yearlyRewards = pctSpeed * (network.blocksPerYear ? network.blocksPerYear : 0) * rewardTokenPrice
    const hndAPR = cTokenTVL ? yearlyRewards / cTokenTVL : 0

    return {
      address,
      symbol,
      totalSupply: totalSupply / 10 ** underlying.decimals * exchangeRate / 1e18,
      borrows: borrows / 10 ** underlying.decimals,
      reserves: reserves / 10 ** underlying.decimals,
      reserveFactor: reserveFactor / 1e18,
      reserveFactorEdit: reserveFactor / 1e18 * 100,
      reserveFactorLoading: false,
      cash: cash /10 ** underlying.decimals,
      decimals,
      exchangeRate: exchangeRate/10 ** (10 + underlying.decimals),
      supplyRate: supplyRate/1e18*365*24*60*60/13.5,
      borrowRate: borrowRate/1e18*365*24*60*60/13.5,
      utilizationRate,
      interestRateModel : interestInfo.name,
      interestRateContract,
      mintPaused,
      mintPausedLoading: false,
      borrowPaused,
      borrowPausedLoading: false,
      compSpeeds,
      price: price / 10 ** (36 - underlying.decimals),
      underlying,
      collateralFactor: markets.collateralFactorMantissa / 1e18,
      collateralFactorEdit: markets.collateralFactorMantissa / 1e18 * 100,
      collateralFactorLoading: false,
      isComped: markets.isComped,
      isCompedLoading: false,
      hndAPR,
      admin
    }
}


const getUnderlying = async (ethcallProvider: Provider, underlyingAddress: string, network: Network): Promise<UnderlyingInfo> => { 
    if (underlyingAddress === "")
      return getNativeInfo(network)
    else if (underlyingAddress.toLowerCase() === "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2")
      return getMakerInfo(ethcallProvider, underlyingAddress)
    else 
      return getTokenInfo(ethcallProvider, underlyingAddress)
  }

const getNativeInfo = async (network: Network): Promise<UnderlyingInfo> => {
    
  return{
    address: "0x0",
    symbol: network ? network.networkParams.nativeCurrency.symbol : "",
    logo: network ? Logos[network.networkParams.nativeCurrency.symbol] : "",
    name: network ? network.networkParams.nativeCurrency.name : "",
    decimals: 18,
    totalSupply: 0
  }
}

const getTokenInfo = async (ethcallProvider: Provider, address: string): Promise<UnderlyingInfo> => {
  const contract = new Contract(address, ABI.TOKEN_ABI)
  const [symbol, name, decimals, totalSupply] = await ethcallProvider.all([contract.symbol(), contract.name(), contract.decimals(), contract.totalSupply()])
  const logo = Logos[symbol]       
  return{
    address,
    symbol,
    logo,
    name,
    decimals,
    totalSupply
  }
}

const getMakerInfo = async (ethcallProvider: Provider, address: string): Promise<UnderlyingInfo> =>{
  const contract = new Contract(address, ABI.MKR_TOKEN_ABI)
  const [tempSymbol, tempName, tempDecimals, totalSupply] = await ethcallProvider.all([contract.symbol(), contract.name(), contract.decimals(), 
    contract.totalSupply()])
  
  return{
    address: address,
    symbol: ethers.utils.parseBytes32String(tempSymbol),
    logo: Logos["MKR"],
    name: ethers.utils.parseBytes32String(tempName),
    decimals: tempDecimals/1,
    totalSupply
  }
}

export const getComptrollerData = async (provider: ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider, ethcallProvider: Provider, address: string) : Promise<Comptroller> => {
  const ethcallComptroller = new Contract(address, ABI.COMPTROLLER_ABI)
  const ethcallUnitroller = new Contract(address, ABI.UNITROLLER_ABI)
  
  const [oracleAddress, allMarkets, borrowPaused, mintPaused, seizePaused, transferPaused, admin, closeFactor, compRate, hundred, liquidationIncentive,
        maxAssets, pauseGuardian, implementation] = 
  await ethcallProvider.all([ethcallComptroller.oracle(), ethcallComptroller.getAllMarkets(), ethcallComptroller._borrowGuardianPaused(), 
    ethcallComptroller._mintGuardianPaused(), ethcallComptroller.seizeGuardianPaused(), ethcallComptroller.transferGuardianPaused(), ethcallComptroller.admin(), 
    ethcallComptroller.closeFactorMantissa(), ethcallComptroller.compRate(), ethcallComptroller.getCompAddress(), ethcallComptroller.liquidationIncentiveMantissa(),
    ethcallComptroller.maxAssets(), ethcallComptroller.pauseGuardian(), ethcallUnitroller.implementation()]) 
   const comptroller = new ethers.Contract(address, ABI.COMPTROLLER_ABI, provider);
  
  const oracle = new ethers.Contract(oracleAddress, ABI.ORACLE_ABI, provider)

  return {
    address,
    comptroller,
    oracleAddress,
    oracle,
    allMarkets,
    borrowPaused,
    borrowPausedLoading: false,
    mintPaused,
    mintPausedLoading: false,
    seizePaused,
    seizePausedLoading: false,
    transferPaused,
    transferPausedLoading: false,
    admin,
    closeFactor: closeFactor/1e18,
    closeFactorEdit: 0,
    closeFactorLoading: false,
    compRate: compRate/1,
    hundred,
    liquidationIncentive: liquidationIncentive/1e18,
    liquidationIncentiveEdit : 0,
    liquidationIncentiveLoading : false,
    maxAssets,
    pauseGuardian: pauseGuardian === "0x0000000000000000000000000000000000000000" ? "" : pauseGuardian,
    implementation
  }
}

export const getInterestRateModel = async (interestRateContract: any, ethcallProvider: Provider, interestRateModels: InterestRateModels): Promise<InterestRateModel> => {
        const address = interestRateContract.address.toLowerCase();
        const name = interestRateModels[address].name;
        const interestInfo = interestRateModels[address.toLowerCase()];
        const ethcallInterestRate = new Contract(address, interestInfo.abi)
        let kink = null
        try{
          kink = await interestRateContract.kink()
        }
        catch{

        }
        if (!kink) {
          const [baseRatePerBlock, multiplierPerBlock, blocksPerYear, owner] = await ethcallProvider.all([ethcallInterestRate.baseRatePerBlock(), 
            ethcallInterestRate.multiplierPerBlock(), ethcallInterestRate.blocksPerYear(), ethcallInterestRate.owner()])

          return {
            address : interestRateContract.address,
            name,
            baseRatePerBlock: baseRatePerBlock/1,
            baseRatePerYear : (baseRatePerBlock.mul(blocksPerYear))/1e18,
            jumpMultiplierPerBlock : 0,
            jumpMultiplierPerYear : 0,
            kink : 0,
            multiplierPerBlock: multiplierPerBlock/1,
            multiplierPerYear : (multiplierPerBlock.mul(blocksPerYear))/1e18,
            blocksPerYear: blocksPerYear/1,
            owner
          }
      
        }
        else{ 
          const [baseRatePerBlock, jumpMultiplierPerBlock, multiplierPerBlock, blocksPerYear, owner] = await ethcallProvider.all([ethcallInterestRate.baseRatePerBlock(), 
            ethcallInterestRate.jumpMultiplierPerBlock(), ethcallInterestRate.multiplierPerBlock(), ethcallInterestRate.blocksPerYear(), ethcallInterestRate.owner()])

            // const kink = await interestRateContract.kink()
          return {
            address : interestRateContract.address,
            name,
            baseRatePerBlock: baseRatePerBlock/1,
            baseRatePerYear : (baseRatePerBlock.mul(blocksPerYear))/1e18,
            jumpMultiplierPerBlock : jumpMultiplierPerBlock/1,
            jumpMultiplierPerYear : (jumpMultiplierPerBlock.mul(blocksPerYear))/1e18,
            kink : kink/1e18,
            multiplierPerBlock: multiplierPerBlock/1,
            multiplierPerYear : (multiplierPerBlock.mul(blocksPerYear))/1e18,
            blocksPerYear: blocksPerYear/1,
            owner
          }
        } 
}

export const getAdmins = async(oracle: string, hundred: string, pauseGuardian: string, unitrollerAdmin: string, ethcallProvider: Provider) => {
  const oracleContract = new Contract(oracle, ABI.ORACLE_ABI)
  const hundredContract = new Contract(hundred, ABI.HUNDRED_ABI)
  const pauseGuardianContract = new Contract(pauseGuardian, ABI.GUARDIAN_ABI)

  let oracleOwner = ""
  let hundredOwner = ""
  let pauseGuardianOwner = ""

  const calls: any[] = []

  if(pauseGuardian !== "")
    calls.push(oracleContract.owner(), hundredContract.owner(), pauseGuardianContract.owner())
  else 
    calls.push(oracleContract.owner(), hundredContract.owner())

  try{
    const data = await ethcallProvider.all(calls)
    oracleOwner = data[0] as string
    hundredOwner = data[1] as string
    if(data.length === 3)
      pauseGuardianOwner = data[2] as string
  }
  catch{
    calls.splice(1,1)
    const data = await ethcallProvider.all(calls)
    oracleOwner = data[0] as string
    if(data.length === 2)
      pauseGuardianOwner = data[1] as string
  }


  const admins: Admins = {
    Unitroller: unitrollerAdmin,
    Oracle: oracleOwner,
    Hundred: hundredOwner,
    PauseGuardian: pauseGuardianOwner
  }
  return admins
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getGauges = async ( network: Network, ethcallProvider: any): Promise<Array<GaugeV4>> => {

    if(network){
        const controller = network.contractV1?.gaugeController ? network.contractV1?.gaugeController : network.contractV2?.gaugeController ? network.contractV2?.gaugeController : ""; 
        const ethcallGaugeController = new Contract(controller, ABI.GAUGE_CONTROLLER_ABI)
        const [nbGauges] = await ethcallProvider.all([ethcallGaugeController.n_gauges()]) as any
        const gauges:  any[] = await ethcallProvider.all(Array.from(Array(nbGauges.toNumber()).keys()).map(i => ethcallGaugeController.gauges(i)))
        const activeGauges: string[] = [];

        let lpAndMinterAddresses: any = await ethcallProvider.all(
            gauges.flatMap((g) => [
                new Contract(g, ABI.GAUGE_V4_ABI).lp_token(),
                new Contract(g, ABI.GAUGE_V4_ABI).minter(),
                new Contract(g, ABI.GAUGE_V4_ABI).reward_policy_maker(),
                new Contract(g, ABI.GAUGE_V4_ABI).working_supply(),
                new Contract(g, ABI.GAUGE_V4_ABI).is_killed(),
                new Contract(controller, ABI.GAUGE_CONTROLLER_ABI).gauge_relative_weight(g)
            ])
        )

        lpAndMinterAddresses = _.chunk(lpAndMinterAddresses, 6)
        const activeLpAndMinterAddresses: any[][] = []

        for (let i = 0; i < lpAndMinterAddresses.length; i++) {
            if (!lpAndMinterAddresses[i][4]) {
                activeGauges.push(gauges[i]);
                activeLpAndMinterAddresses.push(lpAndMinterAddresses[i])
            }
        }
        let rewards: any = await ethcallProvider.all(
            activeGauges.flatMap((g, index) => [
                    new Contract(activeLpAndMinterAddresses[index][2], ABI.REWARD_POLICY_MAKER_ABI).rate_at(floor(new Date().getTime() / 1000)),
                    new Contract(activeLpAndMinterAddresses[index][0], ABI.CTOKEN_ABI).balanceOf(g), //staked balance of hToken
                    new Contract(activeLpAndMinterAddresses[index][0], ABI.CTOKEN_ABI).underlying(),
                    new Contract(activeLpAndMinterAddresses[index][0], ABI.CTOKEN_ABI).decimals(), 
                    new Contract(activeLpAndMinterAddresses[index][2], ABI.HTOKEN_ABI).admin() // admin address

                ]
            )
        )
        //reshape into 5 arrays
        rewards = _.chunk(rewards, 5)
        const underlying: UnderlyingInfo[] = [];
        
        //get underlying info
        for (let i = 0; i < rewards.length; i++) {
          const info =  await getUnderlying(ethcallProvider, rewards[i][2], network)
          underlying.push(info) 
        }
      
       return activeLpAndMinterAddresses.map((c, index) => {
            return {
              
                address: activeGauges[index],
                admin: rewards[index][4],
                backstopGauge: false,
                backstopTotalBalance: BigNumber.from(0),
                backstopTotalSupply: BigNumber.from(0),
                decimals: rewards[index][3],
                lpBackstopTokenUnderlying: undefined,
                lpToken: c[0],
                lpTokenUnderlying: rewards[index][2],
                minter: c[1],
                rewardPolicyMaker: c[2],
                totalStake: rewards[index][1],
                underlying: underlying[index],
                weight: c[5],
                workingTotalStake: c[3],
              }
        });

    }
    return []
  }
    export const getContracts = async (network: Network, ethcallProvider: Provider): Promise<Contracts> => {

        //init V1 addresses
        let V1_DelegationProxy = ""
        let V1_GaugeController = ""
        let V1_Minter = ""
        let V1_MirroredVotingEscrow = ""
        let V1_RewardPolicyMaker = ""
        let V1_SmartWalletChecker = ""
        let V1_Treasury = ""
        let V1_veBoostDelegation = ""
        let V1_VotingEscrow = ""

        //init V2 addresses
        let V2_DelegationProxy = ""
        let V2_GaugeController = ""
        let V2_Minter = ""
        let V2_MirroredVotingEscrow = ""
        let V2_RewardPolicyMaker = ""
        let V2_SmartWalletChecker = ""
        let V2_Treasury = ""
        let V2_veBoostDelegation = ""
        let V2_VotingEscrow = ""

        //fetch V1 addresses
        if (network.contractV1 && network.contractV1.delegationProxy) V1_DelegationProxy = network.contractV1.delegationProxy;
        if (network.contractV1 && network.contractV1.gaugeController) V1_GaugeController = network.contractV1.gaugeController;
        if (network.contractV1 && network.contractV1.minter) V1_Minter = network.contractV1.minter;
        if (network.contractV1 && network.contractV1.mirroredVotingEscrow) V1_MirroredVotingEscrow = network.contractV1.mirroredVotingEscrow;
        if (network.contractV1 && network.contractV1.rewardPolicyMaker) V1_RewardPolicyMaker = network.contractV1.rewardPolicyMaker;
        if (network.contractV1 && network.contractV1.smartWalletChecker) V1_SmartWalletChecker = network.contractV1.smartWalletChecker;
        if (network.contractV1 && network.contractV1.treasury) V1_Treasury = network.contractV1.treasury;
        if (network.contractV1 && network.contractV1.veBoostDelegation) V1_veBoostDelegation = network.contractV1.veBoostDelegation;
        if (network.contractV1 && network.contractV1.votingEscrow) V1_VotingEscrow = network.contractV1.votingEscrow;

        //fetch V2 addresses
        if (network.contractV2 && network.contractV2.delegationProxy) V2_DelegationProxy = network.contractV2.delegationProxy;
        if (network.contractV2 && network.contractV2.gaugeController) V2_GaugeController = network.contractV2.gaugeController;
        if (network.contractV2 && network.contractV2.minter) V2_Minter = network.contractV2.minter;
        if (network.contractV2 && network.contractV2.mirroredVotingEscrow) V2_MirroredVotingEscrow = network.contractV2.mirroredVotingEscrow;
        if (network.contractV2 && network.contractV2.rewardPolicyMaker) V2_RewardPolicyMaker = network.contractV2.rewardPolicyMaker;
        if (network.contractV2 && network.contractV2.smartWalletChecker) V2_SmartWalletChecker = network.contractV2.smartWalletChecker;
        if (network.contractV2 && network.contractV2.treasury) V2_Treasury = network.contractV2.treasury;
        if (network.contractV2 && network.contractV2.veBoostDelegation) V2_veBoostDelegation = network.contractV2.veBoostDelegation;
        if (network.contractV2 && network.contractV2.votingEscrow) V2_VotingEscrow = network.contractV2.votingEscrow;

        //define V1 addresses
        const contractsV1: ContractInfo = {
            DelegationProxy: V1_DelegationProxy,
            GaugeController: V1_GaugeController,
            Minter: V1_Minter,
            MirroredVotingEscrow: V1_MirroredVotingEscrow,
            RewardPolicyMaker: V1_RewardPolicyMaker,
            SmartWalletChecker: V1_SmartWalletChecker,
            Treasury: V1_Treasury,
            VeBoostDelegation: V1_veBoostDelegation,
            VotingEscrow: V1_VotingEscrow,
        }

        //define V2 addresses
        const contractsV2: ContractInfo = {
            DelegationProxy: V2_DelegationProxy,
            GaugeController: V2_GaugeController,
            Minter: V2_Minter,
            MirroredVotingEscrow: V2_MirroredVotingEscrow,
            RewardPolicyMaker: V2_RewardPolicyMaker,
            SmartWalletChecker: V2_SmartWalletChecker,
            Treasury: V2_Treasury,
            VeBoostDelegation: V2_veBoostDelegation,
            VotingEscrow: V2_VotingEscrow,
        }

        //return 'Contracts' object
        return {
            contractsV1: contractsV1,
            contractsV2: contractsV2,
        }
    }
  
