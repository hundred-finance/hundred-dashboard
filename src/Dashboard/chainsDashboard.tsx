import { useEffect, useRef, useState } from "react";
import EpochsView from "../Components/Views/EpochsView";
import {
  epochInterface,
  fetchAPI,
  getChainsBackstopsInfo,
  getChainsEpochsInfo,
  getChainsMigrationInfo,
  getChainsVotingInfo,
  migrationInterface,
  votingInterface,
} from "../Data/fetchChainData";
import { BackstopsInfo, EpochsInfo, MigrationInfo, VotingInfo } from "../Types/data";
import { ChainDataContext } from "../Types/chainsContext";
import { API } from "../api";
import VotingView from "../Components/Views/VotingView";
import MigrationView from "../Components/Views/MigrationView";
import BackstopChainsView from "../Components/Views/BackstopChainsView";

const ChainsDashboard = () => {
  const [chainEpochs, setChainEpochs] = useState<EpochsInfo[]>();
  const [votingInfo, setVotingInfo] = useState<VotingInfo[]>();
  const [migrationInfo, setMigrationInfo] = useState<MigrationInfo>();
  const [backstopInfo, setBackstopInfo] = useState<BackstopsInfo[]>();
  const [retry, setRetry] = useState<number>(0)
  const retryRef = useRef<number>(0)
  retryRef.current = retry

  useEffect(() => {
      retryRef.current = retry
  },[retry])
    
  useEffect(() => { 
    const chainData = async () => {
      try{
        const result = await fetchAPI(API.gaugerewards); //fetch API data for both epochs and backstop 
        const eInterface = epochInterface(result); //create interface matching result
        const eInfo : EpochsInfo[] = await getChainsEpochsInfo(eInterface); //get epochs data
        setChainEpochs(eInfo)
        const bInfo : BackstopsInfo[]  = await getChainsBackstopsInfo(eInterface); //get backstop data
        setBackstopInfo(bInfo)
      }
      catch(error: any){
          if(!error.toString().includes("execution reverted"))
              console.error("epochs: ", error.error)
          if(retryRef.current < 10){
              const temp = retryRef.current + 1
              setRetry(temp)
              setTimeout(chainData, temp * 500)
          }}};
    //missing if statement?
    setRetry(0)
    chainData();
  }, []);

   useEffect(() => {
    const votingData = async () => {
      try{
        const lockedHND = await fetchAPI(API.lockedhnd); //fetch API data
        const veHND = await fetchAPI(API.vehnd);
        const vInterface = votingInterface(lockedHND, veHND); //create interface matching result
        const vInfo : VotingInfo[]  = await getChainsVotingInfo(vInterface); //get voting data
        setVotingInfo(vInfo)}
      catch(error: any){
          if(!error.toString().includes("execution reverted"))
              console.error("voting: ", error.error)
          if(retryRef.current < 10){
              const temp = retryRef.current + 1
              setRetry(temp)
              setTimeout(votingData, temp * 500)
          }}};
    //missing if statement?
    setRetry(0)
    votingData();
  }, []);

   useEffect(() => {
    const migrationData = async () => {
      try{
        const migration = await fetchAPI(API.migration);
        const mInterface = migrationInterface(migration); //create interface matching result
        const mInfo : MigrationInfo  = await getChainsMigrationInfo(mInterface); //get migration data
        setMigrationInfo(mInfo)}
      catch(error: any){
          if(!error.toString().includes("execution reverted"))
              console.error("voting: ", error.error)
          if(retryRef.current < 10){
              const temp = retryRef.current + 1
              setRetry(temp)
              setTimeout(migrationData, temp * 500)
          }}};
    //missing if statement?
    setRetry(0)
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
        setMigrationInfo,
        backstopInfo,
        setBackstopInfo
      }}
    >
      <h4>Chains Data</h4>
      <EpochsView/>
      <BackstopChainsView/>
      <VotingView/>
      <MigrationView/>
    </ChainDataContext.Provider>
  );
};

export default ChainsDashboard;