import { providers } from "ethers";
import { createContext, useContext } from "react";
import { Admins, Comptroller, HTokenInfo, InterestRateModel } from "./data";

export type MarketContext = {
    signer: providers.JsonRpcSigner | null,
    comptroller: Comptroller | undefined,
    setComptroller: (c: Comptroller) => void,
    admins: Admins | undefined,
    setAdmins: (a: Admins) => void,
    markets: HTokenInfo[],
    setMarkets: (m: HTokenInfo[]) => void
    interestRateModels: InterestRateModel[]
    setInterestRateModels: (i: InterestRateModel[]) => void
}

export const MyDataContext = createContext<MarketContext>({
    signer: null,
    comptroller: undefined,
    setComptroller: () => {},
    admins: undefined,
    setAdmins: () => {},
    markets: [],
    setMarkets: () => {},
    interestRateModels: [],
    setInterestRateModels: () => {}
})

export const useMarketContext = () => useContext(MyDataContext)