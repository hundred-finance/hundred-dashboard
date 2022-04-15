import { useEffect, useState } from "react";
import EpochsView from "../Components/Views/EpochsView";
import { getChainData } from "../Data/fetchAPI";
import { EpochsInfo } from "../Types/data";
import { ChainDataContext } from "../Types/chainsContext"
import { API } from "../api";

const ChainsDashboard = () => {
    const [chainEpochs, setChainEpochs] = useState<EpochsInfo>()
    
    useEffect(() => {
        const chainData = async() => {
            const result = await getChainData(API.gaugerewards)
            console.log(result)
        }

        chainData()

    }, [])

    return (
        <ChainDataContext.Provider value={({
            chainEpochs, setChainEpochs
        })}>
            <EpochsView/> 
        </ChainDataContext.Provider>
    )
}

export default ChainsDashboard