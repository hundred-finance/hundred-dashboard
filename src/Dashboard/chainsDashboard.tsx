import { useState } from "react";
import EpochsView from "../Components/Views/EpochsView";
import { getChainData } from "../Data/fetchAPI";
import { EpochsInfo } from "../Types/data";
import { ChainDataContext } from "/Users/jeainnykim/Code/hundred-finance/hundred-dashboard/src/Types/chainsContext"
import { API } from "../api";

const ChainsDashboard = async () => {
    const [chainEpochs, setChainEpochs] = useState<EpochsInfo>()
    const result = await getChainData(API.gaugerewards)
    console.log('result: ', result);


    return (
        <ChainDataContext.Provider value={({
            chainEpochs, setChainEpochs
        })}>
            <EpochsView/> 
        </ChainDataContext.Provider>
    )
}

export default ChainsDashboard