import { useEffect, useState } from "react";
import EpochsView from "../Components/Views/EpochsView";
import {
  epochInterface,
  fetchAPI,
  getChainsEpochsInfo,
  getChainsMigrationInfo,
  getChainsVotingInfo,
  migrationInterface,
  votingInterface,
} from "../Data/fetchChainData";
import { EpochsInfo, MigrationInfo, VotingInfo } from "../Types/data";
import { ChainDataContext } from "../Types/chainsContext";
import { API } from "../api";
import VotingView from "../Components/Views/VotingView";
import MigrationView from "../Components/Views/MigrationView";

const ChainsDashboard = () => {
  const [chainEpochs, setChainEpochs] = useState<EpochsInfo[]>();
  const [votingInfo, setVotingInfo] = useState<VotingInfo[]>();
  const [migrationInfo, setMigrationInfo] = useState<MigrationInfo>();

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

   useEffect(() => {
    const migrationData = async () => {
      const migration = await fetchAPI(API.migration);

      const mInterface = migrationInterface(migration); //create interface matching result
      const mInfo : MigrationInfo  = await getChainsMigrationInfo(mInterface); //get migration data
      setMigrationInfo(mInfo)
    };

    migrationData();
  }, []);
  return (
    <ChainDataContext.Provider
      value={{
        chainEpochs,
        setChainEpochs,
        votingInfo,
        setVotingInfo,
        migrationInfo,
        setMigrationInfo
      }}
    >
      <h4>Chains Data</h4>
      <EpochsView/>
      <VotingView/>
      <MigrationView/>
    </ChainDataContext.Provider>
  );
};

export default ChainsDashboard;
