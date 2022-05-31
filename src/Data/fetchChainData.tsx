import {
  BackstopsInfo,
  EpochsInfo,
  MigrationInfo,
  VotingInfo,
} from "../Types/data";
import { API } from "../api";

//create interface matching json properties
interface ChainsEpochData {
  gaugeRewards: chainData;
}

interface chainData {
  arbitrum: gaugeTypes;
  fantom: gaugeTypes;
  gnosis: epochsData;
  harmony: epochsData;
  moonriver: epochsData;
  optimism: epochsData;
  polygon: gaugeTypes;
  total: totalData;
}

interface totalData {
  epoch0: number;
  epoch1: number;
  epoch2: number;
  epoch3: number;
}
interface gaugeTypes {
  total: totalData;
  gauge: epochsData;
  backstopGauge: epochsData;
  lendly?: epochsData;
}
interface epochRewards {
  epoch: number;
  epoch_start_time: number;
  rewards: number;
}

interface epochsData {
  0: epochRewards;
  1: epochRewards;
  2: epochRewards;
  3: epochRewards;
}

//interface for voting info
interface VotingData {
  lockedhnd: lockedHndData;
  vehnd: networkVotingData;
}
interface networkVotingData {
  total: votingTokens;
  arbitrum: votingTokens;
  fantom: votingTokens;
  harmony: votingTokens;
  moonriver: votingTokens;
  gnosis: votingTokens;
  optimism: votingTokens;
}

interface votingTokens {
  vehnd: number;
  mvehnd: number;
}

interface lockedHndData {
  total: number;
  arbitrum: number;
  fantom: number;
  harmony: number;
  moonriver: number;
  gnosis: number;
  optimism: number;
}

//migration interface
interface MigrationData {
  total: number;
  hndMigrating: number;
  hndVesting: number;
  hndPiouMigrating: number;
  hndPiouVesting: number;
}

//fetches API and returns result as json object
export const fetchAPI = async (endpoint: string) => {
  try {
    const res = await fetch("https://api.hundred.finance/" + endpoint);
    const data = await res.json();
    //add a try catch on fetchAPI
    return data;
  } catch (err) {
    console.error(err);
  }
};
//initialize interface
export const epochInterface = (result: any): ChainsEpochData => {
  const target = {} as ChainsEpochData;
  const cData = Object.assign(target, result);
  return cData;
};

export const getChainsEpochsInfo = async (
  cData: any,
): Promise<Array<EpochsInfo>> => {
  // array of networks
  const result = Object.values(cData);
  const networks = Object.getOwnPropertyNames(result[0]);
  networks.shift(); //remove 'total'

  const treasuryBalance = await fetchAPI(API.gauge);

  return networks.map((n, index) => {
    if (cData.gaugerewards[n].gauge !== undefined) {
      return {
        network: n,
        currentEpoch: cData.gaugerewards[n].gauge[0].epoch,
        epoch0Rewards: cData.gaugerewards[n].gauge[0].rewards,
        epoch1Rewards: cData.gaugerewards[n].gauge[1].rewards,
        epoch2Rewards: cData.gaugerewards[n].gauge[2].rewards,
        epoch3Rewards: cData.gaugerewards[n].gauge[3].rewards,
        treasuryBalance: treasuryBalance.gauge[n],
      };
    } else {
      return {
        network: n,
        currentEpoch: cData.gaugerewards[n][0].epoch,
        epoch0Rewards: cData.gaugerewards[n][0].rewards,
        epoch1Rewards: cData.gaugerewards[n][1].rewards,
        epoch2Rewards: cData.gaugerewards[n][2].rewards,
        epoch3Rewards: cData.gaugerewards[n][3].rewards,
        treasuryBalance: treasuryBalance.gauge[n],
      };
    }
  });
};
//initialize voting interface
export const votingInterface = (lockedHND: any, veHND: any): VotingData => {
  const locked = {} as lockedHndData;
  const vehnd = {} as networkVotingData;

  const lockedHNDData = Object.assign(locked, lockedHND);
  const vehndData = Object.assign(vehnd, veHND);

  return {
    lockedhnd: lockedHNDData.lockedhnd,
    vehnd: vehndData.vehnd,
  };
};

export const getChainsVotingInfo = async (
  vData: any,
): Promise<Array<VotingInfo>> => {
  const circulating = await fetchAPI(API.circulating);
  // array of networks
  const result = Object.values(vData);
  const networks = Object.getOwnPropertyNames(result[0]);

  //put 'total' as the last row in table
  const total = networks.shift();
  if (total) {
    networks.push(total);
  }
  return networks.map((n, index) => {
    return {
      network: n,
      lockedHnd: vData.lockedhnd[n],
      veHnd: vData.vehnd[n].vehnd,
      mveHnd: vData.vehnd[n].mvehnd,
      circulating: circulating.circulating[n],
      avgLockTime:
        vData.lockedhnd[n] > 0
          ? Math.round((vData.vehnd[n].vehnd / vData.lockedhnd[n]) * 4 * 100) /
            100
          : 0,
    };
  });
};

// migration interface
export const migrationInterface = (migration: any): MigrationData => {
  const target = {} as MigrationData;
  const mInterface = Object.assign(target, migration);
  return mInterface;
};

export const getChainsMigrationInfo = async (
  mData: any,
): Promise<MigrationInfo> => {
  return {
    total: mData.migration.total,
    hndMigrating: mData.migration.hndMigrating,
    hndVesting: mData.migration.hndVesting,
    hndPiouMigrating: mData.migration.hndPiouMigrating,
    hndPiouVesting: mData.migration.hndPiouVesting,
  };
};

//backstop
export const getChainsBackstopsInfo = async (
  cData: any,
): Promise<Array<BackstopsInfo>> => {
  // array of networks
  const result = Object.values(cData);
  const networks = Object.getOwnPropertyNames(result[0]);
  networks.shift(); //remove 'total'
console.log(result)
console.log(networks)
  const backstopGauges = networks.filter(
    (n) =>
      n !== "arbitrum" &&
      cData.gaugerewards[n].backstopGauge !== undefined,
  );
  const treasuryBalance = await fetchAPI(API.backstopgauge); //redo once backstop is added

  return backstopGauges.map((n, index) => {
    return {
      network: n,
      currentEpoch: cData.gaugerewards[n].backstopGauge[0].epoch,
      epoch0Rewards: cData.gaugerewards[n].backstopGauge[0].rewards,
      epoch1Rewards: cData.gaugerewards[n].backstopGauge[1].rewards,
      epoch2Rewards: cData.gaugerewards[n].backstopGauge[2].rewards,
      epoch3Rewards: cData.gaugerewards[n].backstopGauge[3].rewards,
      treasuryBalance: treasuryBalance.backstopGauge[n],
    };
  });
};


//backstop
export const getLendlyInfo = async (
  cData: any,
): Promise<Array<EpochsInfo>> => {
  // array of networks
  const result = Object.values(cData);
  const networks = Object.getOwnPropertyNames(result[0]);
  networks.shift(); //remove 'total'
console.log(result)
console.log(networks)
  const lendly = networks.filter(
    (n) =>
      n === "fantom" &&
      cData.gaugerewards[n].lendly !== undefined,
  );
console.log(cData)

  return lendly.map((n, index) => {
    return {
      network: n,
      currentEpoch: cData.gaugerewards[n].lendly[0].epoch,
      epoch0Rewards: cData.gaugerewards[n].lendly[0].rewards,
      epoch1Rewards: cData.gaugerewards[n].lendly[1].rewards,
      epoch2Rewards: cData.gaugerewards[n].lendly[2].rewards,
      epoch3Rewards: cData.gaugerewards[n].lendly[3].rewards,
      treasuryBalance: cData.gaugerewards[n].lendlyGauge
    };
  });
};