import { Contract, Provider } from "ethcall"
import { ethers } from "ethers"
import ABI from "../abi"
import Logos from "../logos"
import { InterestRateModels, Network } from "../networks"
import { Admins, Comptroller, HTokenInfo, InterestRateModel, UnderlyingInfo } from "../Types/data"

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
      totalSupply: totalSupply / 10 ** underlying.decimals,
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
    symbol: network ? network.symbol : "",
    logo: network ? Logos[network.symbol] : "",
    name: network ? network.name : "",
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
    pauseGuardian,
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

  const [oracleOwner, hundredOwner] = await ethcallProvider.all([oracleContract.owner(), hundredContract.owner()])
  let pauseGuardianOwner = ""
  if(pauseGuardian !== ""){
    try{
      const [tempPauseGuardian] = await ethcallProvider.all([pauseGuardianContract.owner()])
      pauseGuardianOwner = tempPauseGuardian as string
    }
    catch(err){
      console.log(err)
    }
  }
  const admins: Admins = {
    Unitroller: unitrollerAdmin,
    Oracle: oracleOwner,
    Hundred: hundredOwner,
    PauseGuardian: pauseGuardianOwner
  }
  return admins
}