import { ethers } from "ethers";
import { BigNumber } from "../bigNumber";
import _ from "lodash";
import { useState } from "react";
import { EpochsInfo } from "../Types/data";

//fetches API and returns result as json object
export const fetchAPI = async (endpoint: string) => {
  const res = await fetch("http://api.hundred.finance/" + endpoint);
  const data = await res.json();
  //add a try catch on fetchAPI
  return data;
};

//create interface matching json properties
interface ChainsEpochData {
  gaugeRewards: chainData;
}

interface chainData {
  arbitrum: epochsData;
  fantom: epochsData;
  gnosis: epochsData;
  harmony: epochsData;
  lendly: epochsData;
  moonriver: epochsData;
  optimism: epochsData;
  total: totalData;
}

interface totalData {
  epoch0: number;
  epoch1: number;
  epoch2: number;
  epoch3: number;
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

//initialize interface
export const epochInterface = (result: any): ChainsEpochData => {
  //add promise?
  const target = {} as ChainsEpochData;
  const cData = Object.assign(target, result);
  return cData;
};

export const getChainsEpochsInfo = async (
  cData: any
): Promise<Array<EpochsInfo>> => {

  // array of networks
  const result = Object.values(cData);
  const networks = Object.getOwnPropertyNames(result[0]);
  networks.shift(); //remove 'total'

  return networks.map((n, index) => {
    return {
      network: n,
      currentEpoch: cData.gaugerewards[n][0].epoch,
      epoch0Rewards: cData.gaugerewards[n][0].rewards,
      epoch1Rewards: cData.gaugerewards[n][1].rewards,
      epoch2Rewards: cData.gaugerewards[n][2].rewards,
      epoch3Rewards: cData.gaugerewards[n][3].rewards,
    };
  });
};
