import { useEffect, useState } from "react";
import EpochsView from "../Components/Views/EpochsView";
import {
  epochInterface,
  fetchAPI,
  getChainsEpochsInfo,
  getChainsVotingInfo,
  votingInterface,
} from "../Data/fetchChainData";
import { EpochsInfo, VotingInfo } from "../Types/data";
import { ChainDataContext } from "../Types/chainsContext";
import { API } from "../api";
import VotingView from "../Components/Views/VotingView";

const ChainsDashboard = () => {
  const [chainEpochs, setChainEpochs] = useState<EpochsInfo[]>();
  const [votingInfo, setVotingInfo] = useState<VotingInfo[]>();
  useEffect(() => {
    const chainData = async () => {
      const result = await fetchAPI(API.gaugerewards); //fetch API data
      const chainsEpochData = epochInterface(result); //create interface matching result

      const eInfo : EpochsInfo[] = await getChainsEpochsInfo(chainsEpochData); //get epochs data
      setChainEpochs(eInfo)
    };

    chainData();
  }, []);

   useEffect(() => {
    const votingData = async () => {
      const lockedHND = await fetchAPI(API.lockedhnd); //fetch API data
      const veHND = await fetchAPI(API.vehnd);

      const vInterface = votingInterface(lockedHND, veHND); //create interface matching result
      const vInfo : VotingInfo[]  = await getChainsVotingInfo(vInterface); //get voting data
      setVotingInfo(vInfo)
    };

    votingData();
  }, []);

  return (
    <ChainDataContext.Provider
      value={{
        chainEpochs,
        setChainEpochs,
        votingInfo,
        setVotingInfo
      }}
    >
      <h4>Chains Data</h4>
      <EpochsView/>
      <VotingView/>
    </ChainDataContext.Provider>
  );
};

export default ChainsDashboard;
