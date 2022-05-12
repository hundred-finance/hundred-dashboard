import { Contract, Provider } from "ethcall"
import { ethers } from "ethers"
import { BigNumber } from "../bigNumber"
import { floor } from "lodash"
import ABI from "../abi"
import Logos from "../logos"
import { InterestRateModels, Network } from "../networks"
import { Admins, Backstop, Comptroller, ContractInfo, Contracts, GaugeV4, HTokenInfo, InterestRateModel, UnderlyingInfo } from "../Types/data"

export const getCTokenInfo = async (address: string, network: Network, provider: ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider,
    comptroller: Comptroller, isNativeToken:boolean , ethcallProvider: Provider, rewardTokenPrice: number, unitrollerAddress: string, interestRateModels: InterestRateModels): Promise<HTokenInfo> => {
  
    const ethcallCToken = new Contract(address, ABI.CTOKEN_ABI)
    const ethcallHtoken = new Contract(address, ABI.HTOKEN_ABI)
    const oracleContract = new Contract(comptroller.oracleAddress, ABI.ORACLE_ABI)
    const ethcallComptroller = new Contract(unitrollerAddress, ABI.COMPTROLLER_ABI)
    let underlyingAddress = ""
    let implementation = ""
    if(!isNativeToken) {
      const [underlying, implement] = await ethcallProvider.all([ethcallCToken.underlying(), ethcallCToken.implementation()]);    
      underlyingAddress = underlying
      implementation = implement
    }
    let calls = [ethcallCToken.interestRateModel(), ethcallCToken.symbol(), ethcallCToken.getCash(), ethcallCToken.totalBorrows(),
        ethcallCToken.totalReserves(), ethcallCToken.reserveFactorMantissa(), ethcallCToken.totalSupply(), ethcallCToken.decimals(), 
        ethcallCToken.exchangeRateStored(), ethcallComptroller.mintGuardianPaused(address), ethcallComptroller.borrowGuardianPaused(address), 
        ethcallComptroller.compSpeeds(address), ethcallComptroller.markets(address), ethcallHtoken.admin(), oracleContract.getUnderlyingPrice(address)]//, ethcallCToken.borrowRatePerBlock()]
    const [interestAddress,symbol,cash,borrows,reserves,reserveFactor,totalSupply,decimals,exchangeRate,mintPaused,borrowPaused,compSpeeds,markets,admin,price] = await ethcallProvider.all(calls); 
  
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
      admin,
      implementation
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
  let [symbol, name, decimals, totalSupply] = await ethcallProvider.all([contract.symbol(), contract.name(), contract.decimals(), contract.totalSupply()])
  //if symbol has "hToken" format
  if (symbol.charAt(0)==="h"){
    symbol = symbol.slice(1);}
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
  if(network.contractV2?.gaugeController){
    const underlying: UnderlyingInfo[] = [];
    const controller = network.contractV2?.gaugeController;
    const ethcallGaugeController = new Contract(controller, ABI.GAUGE_CONTROLLER_ABI)
    const [nbGauges] = await ethcallProvider.all([ethcallGaugeController.n_gauges()]) as any
    const gauges:  any[] = await ethcallProvider.all(Array.from(Array(nbGauges.toNumber()).keys()).map(i => ethcallGaugeController.gauges(i)))

    //get data
    const activeGauges : string[] = await getActiveGauges(gauges, ethcallProvider)
    const gaugeData : any[] = await getLPTokenData(activeGauges, ethcallProvider, ethcallGaugeController)
    const rewardsData : any[] = await getGaugesRewardsData(activeGauges, gaugeData, ethcallProvider); 
    for await (const net of rewardsData) {
    const info =  await getUnderlying(ethcallProvider, net.underlying, network)
    underlying.push(info)}   
      
    return activeGauges.map((gauge, i) => {
      return {              
        address: gauge,
        admin: gaugeData[i].admin,
        backstopGauge: false,
        backstopTotalBalance: BigNumber.from(0),
        backstopTotalSupply: BigNumber.from(0),
        decimals: rewardsData[i].decimals,
        lpBackstopTokenUnderlying: undefined,
        lpToken: gaugeData[i].lpToken,
        lpTokenUnderlying: rewardsData[i].underlying,
        minter: gaugeData[i].minter,
        rewardPolicyMaker: gaugeData[i].rewardsPolicyMaker,
        totalStake: rewardsData[i].balanceOf,
        underlying: underlying[i],
        weight: gaugeData[i].gaugeRelativeWeight,
        workingTotalStake: gaugeData[i].workingSupply,
      }});}
    return []
  }
    export const getContracts = async (network: Network, ethcallProvider: Provider): Promise<Contracts> => {

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

        //fetch V2 addresses
        if (network.contractV2){
        if (network.contractV2.delegationProxy) V2_DelegationProxy = network.contractV2.delegationProxy;
        if (network.contractV2.gaugeController) V2_GaugeController = network.contractV2.gaugeController;
        if (network.contractV2.minter) V2_Minter = network.contractV2.minter;
        if (network.contractV2.mirroredVotingEscrow) V2_MirroredVotingEscrow = network.contractV2.mirroredVotingEscrow;
        if (network.contractV2.rewardPolicyMaker) V2_RewardPolicyMaker = network.contractV2.rewardPolicyMaker;
        if (network.contractV2.smartWalletChecker) V2_SmartWalletChecker = network.contractV2.smartWalletChecker;
        if (network.contractV2.treasury) V2_Treasury = network.contractV2.treasury;
        if (network.contractV2.veBoostDelegation) V2_veBoostDelegation = network.contractV2.veBoostDelegation;
        if (network.contractV2.votingEscrow) V2_VotingEscrow = network.contractV2.votingEscrow;
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
            contractsV2: contractsV2,
        }
    }
  
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getBackstopGauges = async ( network: Network, ethcallProvider: any): Promise<Array<Backstop>> => {
  if(network.backstop?.gaugeController){
    const underlying: UnderlyingInfo[] = [];
    const controller = network.backstop.gaugeController 
    const ethcallGaugeController = new Contract(controller, ABI.GAUGE_CONTROLLER_ABI)
    const [nbGauges] = await ethcallProvider.all([ethcallGaugeController.n_gauges()]) as any
    const gauges:  any[] = await ethcallProvider.all(Array.from(Array(nbGauges.toNumber()).keys()).map(i => ethcallGaugeController.gauges(i)))    
    
    //get data
    const activeGauges : string[] = await getActiveGauges(gauges, ethcallProvider)
    const gaugeData : any[] = await getLPTokenData(activeGauges, ethcallProvider, ethcallGaugeController)
    const rewardsData : any[] = await getBackstopGaugesRewardsData(activeGauges, gaugeData, ethcallProvider); 
    const backStopUnderlying = await getBackstopUnderlyingInfo(rewardsData, gaugeData, network, ethcallProvider); 
    for await (const net of rewardsData) {
    const info =  await getUnderlying(ethcallProvider, net.LUSD, network)
    underlying.push(info)}       

    return activeGauges.map((gauge, i) => {
        return {
            address: gauge,
            admin: gaugeData[i].admin,
            backstopGauge: true,
            backstopTotalBalance: backStopUnderlying[i].tokenBalaceOf,
            backstopTotalSupply: rewardsData[i].totalSupply,
            decimals: rewardsData[i].decimals,
            lpBackstopTokenUnderlying: backStopUnderlying[i].cTokenUnderlying,
            lpToken: gaugeData[i].lpToken,
            lpTokenUnderlying: rewardsData[i].LUSD,
            minter: gaugeData[i].minter,
            rewardPolicyMaker: gaugeData[i].rewardsPolicyMaker,
            totalStake: rewardsData[i].balanceOf,
            underlying: underlying[i],
            veHndRewardRate: rewardsData[i].rateAt,
            weight: gaugeData[i].gaugeRelativeWeight,
            workingTotalStake: gaugeData[i].workingSupply,
          }
    })
}
return []}

async function getActiveGauges(gauges: string[], ethcallProvider: any) : Promise<Array<string>>  {
  const checkKilled: any[] = [];
  const activeGauges: any[] = [];

  gauges.forEach((g) => {
      const gaugeV4Contract = new Contract(g, ABI.GAUGE_V4_ABI);
      checkKilled.push(gaugeV4Contract.is_killed())})

  const isKilled = await ethcallProvider.all(checkKilled)      
    for (let i = 0; i < isKilled.length; i++) {
      if (isKilled[i]===false) {
          activeGauges.push(gauges[i]);}}

  return activeGauges}

async function getLPTokenData(activeGauges: string[], ethcallProvider: any, ethcallGaugeController: Contract ) : Promise<Array<any>>  {
  const gaugeData : any[] = [];
  for await (const gauge of activeGauges) {
    const gaugeV4Contract = new Contract(gauge, ABI.GAUGE_V4_ABI);
    const calls = [           
      gaugeV4Contract.lp_token(),
      gaugeV4Contract.minter(),
      gaugeV4Contract.reward_policy_maker(),
      gaugeV4Contract.working_supply(),
      gaugeV4Contract.admin(),
      ethcallGaugeController.gauge_relative_weight(gauge)
    ]
    const [lpToken, minter, rewardsPolicyMaker, workingSupply, admin, gaugeRelativeWeight] = await ethcallProvider.all(calls);
    let gaugeObject = {lpToken, minter, rewardsPolicyMaker, workingSupply, admin, gaugeRelativeWeight}
    gaugeData.push(gaugeObject)}
  return gaugeData }

async function getGaugesRewardsData(activeGauges: string[], gaugeData: any[], ethcallProvider: any ) : Promise<Array<any>>  {
  const rewardsData: any[] = [];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for await (const [i, gauge] of activeGauges.entries()) {
    const rewardContract = new Contract(gaugeData[i].rewardsPolicyMaker, ABI.REWARD_POLICY_MAKER_ABI);
    const cTokenContract = new Contract(gaugeData[i].lpToken, ABI.CTOKEN_ABI);          
    const calls = [           
      rewardContract.rate_at(floor(new Date().getTime() / 1000)),
      cTokenContract.balanceOf(activeGauges[i]),
      cTokenContract.underlying(),
      cTokenContract.decimals(), 
    ]
    const [rateAt, balanceOf, underlying, decimals] = await ethcallProvider.all(calls); 
    const rewardsObject = {rateAt, balanceOf, underlying, decimals}
    rewardsData.push(rewardsObject)}
  return rewardsData;}

async function getBackstopGaugesRewardsData(activeGauges: string[], gaugeData: any[], ethcallProvider: any ) : Promise<Array<any>>  {
  const rewardsData: any[] = [];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for await (const [i, gauge] of activeGauges.entries()) {
    const rewardContract = new Contract(gaugeData[i].rewardsPolicyMaker, ABI.REWARD_POLICY_MAKER_ABI);
    const backstopContract = new Contract(gaugeData[i].lpToken, ABI.BPRO_ABI);          
    const calls = [           
      rewardContract.rate_at(floor(new Date().getTime() / 1000)),
      backstopContract.balanceOf(activeGauges[i]),
      backstopContract.LUSD(),
      backstopContract.totalSupply(),
      backstopContract.decimals(), 
    ]
    const [rateAt, balanceOf, LUSD, totalSupply, decimals, backstopLpToken] = await ethcallProvider.all(calls); 
    const rewardsObject = {rateAt, balanceOf, LUSD, totalSupply, decimals, backstopLpToken}
    rewardsData.push(rewardsObject)}
  return rewardsData;}


async function getBackstopUnderlyingInfo(rewardsData: any[], gaugeData:any[], network: Network, ethcallProvider: any ) : Promise<Array<any>>  {
  const backStopUnderlying: any[] = [];
  for await (const [i, net] of rewardsData.entries()) {
    const cTokenContract = new Contract(net.LUSD, ABI.CTOKEN_ABI)
    const tokenContract = new Contract(net.LUSD, ABI.TOKEN_ABI)
    const [cTokenUnderlying, tokenBalaceOf] = await ethcallProvider.all([cTokenContract.underlying(),tokenContract.balanceOf(gaugeData[i].lpToken)]) 
    let tokenObject = {cTokenUnderlying, tokenBalaceOf}
    backStopUnderlying.push(tokenObject)} 
  return backStopUnderlying;}
