import { Provider } from "ethcall"
import { ethers } from "ethers";
import { useEffect, useRef, useState } from "react";
import EpochsView from "../Components/Views/EpochsView";
import { getAdmins, getComptrollerData, getCTokenInfo, getGauges, getInterestRateModel, getContracts, getEpochs } from "../Data/fetchData";
import { Contracts, Admins, Comptroller, GaugeV4, HTokenInfo, InterestRateModel, EpochsInfo } from "../Types/data";
import { useGlobalContext } from "../Types/gloabalContext";
import { MyDataContext } from "../Types/marketContext";

interface Props{
    lendly?: string
}

const rewardTokenPrice = 1

const ChainsDashboard = ({lendly} : Props) => {
    const {network, provider} = useGlobalContext()
    const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner | null>(null)
    const [comptroller, setComptroller] = useState<Comptroller>()
    const [admins, setAdmins] = useState<Admins>()
    const [markets, setMarkets] = useState<HTokenInfo[]>()
    const [interestRateModels, setInterestRateModels] = useState<InterestRateModel[]>()
    const [gauges, setGauges] = useState<GaugeV4[]>()
    const [contracts, setContracts] = useState<Contracts>()
    const [epochs, setEpochs] = useState<EpochsInfo>()
    const [retry, setRetry] = useState<number>(0)
   
    const retryRef = useRef<number>(0)
     retryRef.current = retry

     const updateComptroller = (c: Comptroller): void =>{
         setComptroller(c)
     }
     
     const updateMarkets = (m: HTokenInfo[]) : void =>{
         setMarkets(_ => m)
     }
     const updateGauges = (g: GaugeV4[]) : void =>{
         setGauges(_ => g)
     }

     useEffect(() => {
         retryRef.current = retry
     },[retry])

      useEffect(() => {
        const GetData = async () : Promise<void> =>{
            try{
                if(provider && network){
                    const signer = provider.getSigner();
                    const ethcallProvider = new Provider()
                    await ethcallProvider.init(provider as any)
                    const net = {...network}
                    if(net.multicall) 
                        ethcallProvider.multicall = net.multicall
                    const comptrollerData = await getComptrollerData(provider, ethcallProvider, net.lendly && lendly ? net.lendly[lendly].unitrollerAddress : network.hundred.unitrollerAddress);
                    setSigner(s => signer)
                    setComptroller(c => comptrollerData)
                }
            }
            catch(error){
                console.error("comptroller: ", error)
                if(retryRef.current < 10){
                    const temp = retryRef.current + 1
                    setRetry(temp)
                    setTimeout(GetData, temp * 500)
                }
            }
          
            
        }
        
      setSigner(_ => null)
      setComptroller(undefined)
      setAdmins(undefined)
      setMarkets(undefined)
      setInterestRateModels(undefined)
      setGauges(undefined)
      setContracts(undefined)
      setEpochs(undefined)
  
        if(network && provider){
          setRetry(0)
          GetData()
          
        }
  
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[provider, lendly])

      useEffect(() => {
        const getAdminsData = async () => {
            try{
                if(comptroller && provider){
                    const ethcallProvider = new Provider()
                    await ethcallProvider.init(provider as any)
                    const net = {...network}
                    if(net.multicall) 
                        ethcallProvider.multicall = net.multicall
                    const comp = {...comptroller}
                    const admins = await getAdmins(comp.oracleAddress, comp.hundred, comp.pauseGuardian, comp.admin, ethcallProvider)
                    setAdmins(_ => admins)
                }
            }
            catch(error: any){
                if(!error.toString().includes("execution reverted"))
                    console.error("markets: ", error.error)
                if(retryRef.current < 10){
                    const temp = retryRef.current + 1
                    setRetry(temp)
                    setTimeout(getAdminsData, temp * 500)
                }
            }
        }

        if(comptroller){
            setRetry(0)
            getAdminsData()
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [comptroller])

    useEffect(() => {
        const getMarketData = async () => {
            try{
                if(comptroller && network && provider){
                    const ethcallProvider = new Provider()
                    await ethcallProvider.init(provider as any)
                    const net = {...network}
                    if(net.multicall) 
                        ethcallProvider.multicall = net.multicall
                    let marketData: HTokenInfo[] = []
                    const nativeTokenAddress =  net.lendly && lendly ? net.lendly[lendly].nativeTokenAddress : net.hundred.nativeTokenAddress
                    const interestRateModelsData =  net.lendly && lendly ? net.lendly[lendly].interestRateModels : net.hundred.interestRateModels
                    const unitrollerAddress =  net.lendly && lendly ? net.lendly[lendly].unitrollerAddress : net.hundred.unitrollerAddress
                    marketData = await Promise.all(comptroller.allMarkets.map(async (a: any) => {
                        const isNativeToken = a.toLowerCase() ===  nativeTokenAddress
                          return getCTokenInfo(a, net, provider, {...comptroller} as Comptroller, isNativeToken, ethcallProvider, rewardTokenPrice, unitrollerAddress, interestRateModelsData)
                      }));
                    
                      setMarkets(_ => marketData)
                }
            }
            catch(error: any){
                if(!error.toString().includes("execution reverted"))
                    console.error("markets: ", error.error)
                if(retryRef.current < 10){
                    const temp = retryRef.current + 1
                    setRetry(temp)
                    setTimeout(getMarketData, temp * 500)
                }
            }
        }

        if(admins){
            setRetry(0)
            getMarketData()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [admins])

    useEffect(() => {
        const getInterestData = async () => {
            try{
                if(network && provider && markets){
                    const ethcallProvider = new Provider()
                    await ethcallProvider.init(provider as any)
                    const net = {...network}
                    if(net.multicall) 
                        ethcallProvider.multicall = net.multicall
                    const interestRateModelAddress = [];
                    const map = new Map();
                    for (const item of [...markets]) {
                        if(!map.has(item.interestRateContract.address)){
                            map.set(item.interestRateContract.address, true);    // set any value to Map
                            interestRateModelAddress.push(item.interestRateContract);
                        }
                    }
                    const interestRateModelsData =  net.lendly && lendly ? net.lendly[lendly].interestRateModels : net.hundred.interestRateModels
                    const interestRateModels = await Promise.all(interestRateModelAddress.map((x) => getInterestRateModel(x, ethcallProvider, interestRateModelsData)));
                    setInterestRateModels(_ => interestRateModels)
                }
            }
            catch(error){
                console.log(error)
                if(retryRef.current < 10){
                    const temp = retryRef.current + 1
                    setRetry(temp)
                    setTimeout(getInterestData, temp * 500)
                }
            }
        }

        if(markets){
            setRetry(0)
            getInterestData()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[markets])
    
      useEffect(() => {
        const getGaugesData = async () => {

            try{
                if(network && network.contractV1 && network.contractV1.gaugeController){

                    const ethcallProvider = new Provider()

                    await ethcallProvider.init(provider as any)
                    const net = {...network}

                    if(net.multicall) 
                        ethcallProvider.multicall = net.multicall
                    
                    const gaugesData = await getGauges(net, ethcallProvider);
                      setGauges(_ => gaugesData)
                }
            }
            catch(error: any){
                if(!error.toString().includes("execution reverted"))
                    console.error("gauges: ", error.error)
                if(retryRef.current < 10){
                    const temp = retryRef.current + 1
                    setRetry(temp)
                    setTimeout(getGaugesData, temp * 500)
                }
            }
        }

        if(markets){
            setRetry(0)
            getGaugesData()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [markets])

          useEffect(() => {
        const getContractsData = async () => {
            try{
                if(comptroller && provider && network){
                    const ethcallProvider = new Provider()
                    await ethcallProvider.init(provider as any)
                    const net = {...network}
                    if(net.multicall) 
                        ethcallProvider.multicall = net.multicall
                    const contracts = await getContracts(net , ethcallProvider)
                    setContracts(_ => contracts)
                }
            }
            catch(error: any){
                if(!error.toString().includes("execution reverted"))
                    console.error("markets: ", error.error)
                if(retryRef.current < 10){
                    const temp = retryRef.current + 1
                    setRetry(temp)
                    setTimeout(getContractsData, temp * 500)
                }
            }
        }

        if(comptroller){
            setRetry(0)
            getContractsData()
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [comptroller])

    useEffect(() => {
        const getEpochsData = async () => {
            try{
                if(markets && provider && network){
                    const ethcallProvider = new Provider()
                    await ethcallProvider.init(provider as any)
                    const net = {...network}
                    if(net.multicall) 
                        ethcallProvider.multicall = net.multicall
                    const epochs = await getEpochs(net , ethcallProvider)
                    setEpochs(_ => epochs)
                }
            }
            catch(error: any){
                if(!error.toString().includes("execution reverted"))
                    console.error("markets: ", error.error)
                if(retryRef.current < 10){
                    const temp = retryRef.current + 1
                    setRetry(temp)
                    setTimeout(getEpochsData, temp * 500)
                }
            }
        }

        if(markets){
            setRetry(0)
            getEpochsData()
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [markets])

    return (
        <MyDataContext.Provider value={({
            signer,
            comptroller, setComptroller: updateComptroller,
            admins, setAdmins,
            markets, setMarkets: updateMarkets,
            interestRateModels, setInterestRateModels,
            gauges, setGauges: updateGauges, 
            contracts, setContracts,
            epochs, setEpochs
        })}>
            <EpochsView/> 
        </MyDataContext.Provider>
    )
}

export default ChainsDashboard