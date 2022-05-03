import { providers } from "ethers";
import { createContext, useContext } from "react";
import { Contracts, Admins, Comptroller, GaugeV4, HTokenInfo, InterestRateModel, Backstop } from "./data";

export type MarketContext = {
    signer: providers.JsonRpcSigner | null,
    comptroller: Comptroller | undefined,
    setComptroller: (c: Comptroller) => void,
    admins: Admins | undefined,
    setAdmins: (a: Admins) => void,
    markets: HTokenInfo[] | undefined,
    setMarkets: (m: HTokenInfo[]) => void
    interestRateModels: InterestRateModel[] | undefined
    setInterestRateModels: (i: InterestRateModel[]) => void
    gauges: GaugeV4[] | undefined,
    setGauges: (g: GaugeV4[]) => void,
    contracts: Contracts | undefined,
    setContracts: (ad: Contracts) => void,
    backstops: Backstop[] | undefined,
    setBackstop: (g: Backstop[]) => void,

}

export const MyDataContext = createContext<MarketContext>({
    signer: null,
    comptroller: undefined,
    setComptroller: () => {},
    admins: undefined,
    setAdmins: () => {},
    markets: undefined,
    setMarkets: () => {},
    interestRateModels: undefined,
    setInterestRateModels: () => {},
    gauges: undefined,
    setGauges: () => {},
    contracts: undefined,
    setContracts: () => {},
    backstops: undefined,
    setBackstop: () => {},

})

export const useMarketContext = () => useContext(MyDataContext)