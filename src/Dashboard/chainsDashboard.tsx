import { useEffect, useState } from "react";
import EpochsView from "../Components/Views/EpochsView";
import {
  epochInterface,
  fetchAPI,
  getChainsEpochsInfo,
} from "../Data/fetchChainData";
import { EpochsInfo } from "../Types/data";
import { ChainDataContext } from "../Types/chainsContext";
import { API } from "../api";

const ChainsDashboard = () => {
  const [chainEpochs, setChainEpochs] = useState<EpochsInfo[]>();

  useEffect(() => {
    const chainData = async () => {
      const result = await fetchAPI(API.gaugerewards); //fetch API data
      const chainsEpochData = await epochInterface(result); //create interface matching result

      const eInfo : EpochsInfo[] = await getChainsEpochsInfo(chainsEpochData); //get epochs data
      setChainEpochs(eInfo)
    };

    chainData();
  }, []);

  return (
    <ChainDataContext.Provider
      value={{
        chainEpochs,
        setChainEpochs,
      }}
    >
      <h4>Chains' Epochs & Rewards</h4>
      <EpochsView/>
    </ChainDataContext.Provider>
  );
};

export default ChainsDashboard;
