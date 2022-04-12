import Logos from "./logos"
import ABI from "./abi"
import { Multicall } from "ethcall/lib/multicall"

type InterestRateModel = {
    name: string,
    abi: any
}

export type InterestRateModels = {
    [key: string] : InterestRateModel
}

export type LendlyData = {
    name: string,
    nativeTokenAddress: string,
    unitrollerAddress: string,
    interestRateModels: InterestRateModels,
    gaugeController?: string,
    contractV1?: ContractData, 
    contractV2?: ContractData, 
}

export type HundredData = {
    nativeTokenAddress: string,
    unitrollerAddress: string,
    interestRateModels: InterestRateModels
}

type Lendly = {
    [key: string] : LendlyData
}

type Network ={
    chainId: number,
    network: string,
    logo: string,
    blocksPerYear: number,
    networkParams: NetworkParams,
    isTestNetwork?: boolean,
    linkAddress: string,
    safeAddress?: string,
    hundred: HundredData,
    multicall?: Multicall,
    lendly?: Lendly,
    contractV1?: ContractData, 
    contractV2?: ContractData, 
}

export type ContractData = {
    delegationProxy?: string,
    gaugeController?: string,
    minter?: string,
    mirroredVotingEscrow?: string,
    rewardPolicyMaker?: string,
    smartWalletChecker?: string,
    treasury?: string,
    veBoostDelegation?: string,
    votingEscrow?: string,
}
type NativeCurrency = {
    name: string,
    decimals: number,
    symbol: string
}

type NetworkParams = {
    chainId: string,
    rpcUrls: string[],
    chainName: string,
    nativeCurrency: NativeCurrency,
    blockExplorerUrls: string[]
}

type NetworkData = {
    [key:number]: Network
}

const NETWORKS: NetworkData = {
    1 : {
        chainId: 1,
        network: "Ethereum", 
        logo: Logos["ETH"], 
        blocksPerYear: 24*60*60/13.5*365,
        networkParams: {
            chainId: "0x1",
            chainName: "Ethereum",
            rpcUrls:["https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
            nativeCurrency: {
                name: "ETH",
                decimals: 18,
                symbol: "ETH"
            },
            blockExplorerUrls: ["https://etherscan.io"]
        }, 
        linkAddress: "https://etherscan.io/address/",
        safeAddress: "https://gnosis-safe.io/app/eth:",
        hundred: {
            nativeTokenAddress: "0xfcd8570ad81e6c77b8d252bebeba62ed980bd64d",
            unitrollerAddress: "0x0f390559f258eb8591c8e31cf0905e97cf36ace2",
            interestRateModels : {
                "0x9d56800b8ae23b79fe9d4822aa3245fa527caf3f" : { name: "ETH",       abi : ABI.NO_KINK_MODEL_ABI  },
                "0x8a0d639f272f4b966b2dea42d4b743dce7e82c28" : { name: "wBTC",      abi : ABI.NO_KINK_MODEL_ABI  },
                "0x28707252fdea41b72cf321d153a6c01fa9f6fb79" : { name: "Stables",   abi : ABI.INTEREST_MODEL_ABI },
                "0xe8f12f5492ec28609d2932519456b7436d6c93bd" : { name: "BlueChips", abi : ABI.INTEREST_MODEL_ABI }
        }
        }
    },
    250 : {
        chainId: 250,
        network: "Fantom Opera", 
        logo: Logos["FTM"], 
        blocksPerYear: 24*60*60*365,
        networkParams: {
            chainId: "0xFA",
            chainName: "Fantom Opera",
            rpcUrls: ["https://rpc.ftm.tools/"],
            nativeCurrency: {
                name: "FTM",
                decimals: 18,
                symbol: "ETH"
            },
            blockExplorerUrls: ["https://ftmscan.com"]
        },
        linkAddress: "https://ftmscan.com/address/",
        safeAddress: "https://safe.fantom.network/#/safes/",
        hundred: {
            nativeTokenAddress: "0xfcd8570ad81e6c77b8d252bebeba62ed980bd64d",
            unitrollerAddress: "0x0f390559f258eb8591c8e31cf0905e97cf36ace2", 
            interestRateModels: {
                "0x28707252fdea41b72cf321d153a6c01fa9f6fb79" : { name: "ETH",       abi : ABI.NO_KINK_MODEL_ABI  },
                "0x9d56800b8ae23b79fe9d4822aa3245fa527caf3f" : { name: "BTC",       abi : ABI.NO_KINK_MODEL_ABI  },
                "0x8a0d639f272f4b966b2dea42d4b743dce7e82c28" : { name: "Stables",   abi : ABI.INTEREST_MODEL_ABI },
                "0xe8f12f5492ec28609d2932519456b7436d6c93bd" : { name: "BlueChips", abi : ABI.INTEREST_MODEL_ABI }
            }
        },
        lendly: {
            "HND":{
                name: "HND",
                nativeTokenAddress: "",
                unitrollerAddress: "0xeea62ed232ff4ccb6425d41afb1b0b41d34f3114",
                interestRateModels: {
                    "0x8a0d639f272f4b966b2dea42d4b743dce7e82c28" : { name: "Stables",   abi : ABI.INTEREST_MODEL_ABI },
                    "0xe8f12f5492ec28609d2932519456b7436d6c93bd" : { name: "BlueChips", abi : ABI.INTEREST_MODEL_ABI }
                },
                gaugeController: "0x788ac705a7b67562cdd1913b67ee091785fa4f68",
                contractV1: {
                    gaugeController: "0x788ac705a7b67562cdd1913b67ee091785fa4f68",
                    minter: "0xfa0f5d0ca1031ac6a47ca8db9cf9dcfd45b3659a",
                    rewardPolicyMaker: "0xbeD8EFa1973F6E1fB3515bf94aa760174431b3F8",
                    treasury: "0x0d9459a2d7252c4cd62cf13416cd319c3e0c5bb4",
                    votingEscrow: "0x376020c5B0ba3Fd603d7722381fAA06DA8078d8a",
                    },
                
                contractV2: {
                    delegationProxy: "0x7100CBCa885905F922a19006cF7fD5d0E1bBb26c",
                    gaugeController: "0x198618d2aa6cBC89Ea24550fE896D4afa28CD635",
                    minter: "0x14Cb5E017a3F10B9f6254fF24b87e2297dC8b8b3",
                    mirroredVotingEscrow: "0x6c63287CC629417E96b77DD7184748Bb6536A4e2",
                    rewardPolicyMaker: "0x9A9C7C065efcd4A8FfBF3d97882BbcaEd4eB2910",
                    smartWalletChecker: "0x1747D329CB37e0A0f387f24065aDdbc60eAB69DD",
                    treasury: "0x1Ac7Cb8D9e3AC86296a5DEA9d55BF846AB459bA9",
                    veBoostDelegation: "0xcabc8fC306fCAa4c05B58522B13756AE12eDd902",
                    votingEscrow: "0x376020c5B0ba3Fd603d7722381fAA06DA8078d8a",
                    },

            },
            "WEVE": {
                name: "WEVE",
                nativeTokenAddress: "",
                unitrollerAddress: "0x612DCAaF5B20774F2EbBED49bC82442d642B7082",
                interestRateModels: {
                    "0x8a0d639f272f4b966b2dea42d4b743dce7e82c28" : {name: "Stables", abi: ABI.INTEREST_MODEL_ABI},
                    "0xe8f12f5492ec28609d2932519456b7436d6c93bd" : { name: "BlueChips", abi : ABI.INTEREST_MODEL_ABI }
                }
            }
        },

        contractV1: {
            gaugeController: "0xb1c4426C86082D91a6c097fC588E5D5d8dD1f5a8",
            minter: "0x42B458056f887Fd665ed6f160A59Afe932e1F559",
            rewardPolicyMaker: "0x772918d032cFd4Ff09Ea7Af623e56E2D8D96bB65",
            smartWalletChecker: "0x1747D329CB37e0A0f387f24065aDdbc60eAB69DD",
            treasury: "0x29DDb4c4f9baAe366DbD40eff79d364e004425b0",
            votingEscrow: "0x376020c5B0ba3Fd603d7722381fAA06DA8078d8a",
            },

        contractV2: {
            delegationProxy: "0x7100CBCa885905F922a19006cF7fD5d0E1bBb26c",
            gaugeController: "0x89Aa51685a2B658be8a7b9C3Af70D66557544181",
            minter: "0x2105dE165eD364919703186905B9BB5B8015F13c",
            mirroredVotingEscrow: "0x6c63287CC629417E96b77DD7184748Bb6536A4e2",
            rewardPolicyMaker: "0x1B65EDec9370a29adb618f741C22fdbe20EB68DD",
            smartWalletChecker: "0x1747D329CB37e0A0f387f24065aDdbc60eAB69DD",
            treasury: "0x988174f4AB5ad41E1313F1b07877dFe4A78CE5F2",
            veBoostDelegation: "0xcabc8fC306fCAa4c05B58522B13756AE12eDd902",
            votingEscrow: "0x376020c5B0ba3Fd603d7722381fAA06DA8078d8a",
            },
    },
    42161 : {
        chainId: 42161,
        network: "Arbitrum",
        logo: Logos["Arbitrum"], 
        blocksPerYear: 24*60*60/13.5*365,
        networkParams: {
            chainId: "0xa4b1",
            chainName: "Arbitrum",
            rpcUrls: ["https://arb1.arbitrum.io/rpc"],
            nativeCurrency: {
                name: "AETH",
                decimals: 18,
                symbol: "AETH"
            },
            blockExplorerUrls: ["https://arbiscan.io"]
        },
        linkAddress: "https://arbiscan.io/address/",
        safeAddress: "https://gnosis-safe.io/app/arb1:",
        hundred: {
            nativeTokenAddress: "0x8e15a22853a0a60a0fbb0d875055a8e66cff0235",
            unitrollerAddress: "0x0f390559f258eb8591c8e31cf0905e97cf36ace2",
            interestRateModels: {
                "0x243e33aa7f6787154a8e59d3c27a66db3f8818ee" : { name: "ETH",       abi : ABI.NO_KINK_MODEL_ABI  },
                "0xedba32185baf7fef9a26ca567bc4a6cbe426e499" : { name: "BTC",       abi : ABI.NO_KINK_MODEL_ABI  },
                "0xe4e43864ea18d5e5211352a4b810383460ab7fcc" : { name: "Stables",   abi : ABI.INTEREST_MODEL_ABI },
                "0xa8cd5d59827514bcf343ec19f531ce1788ea48f8" : { name: "BlueChips", abi : ABI.INTEREST_MODEL_ABI },
                "0x5b9451b1bfae2a74d7b9d0d45bdd0e9a27f7bb22" : { name: "MIM",       abi : ABI.INTEREST_MODEL_ABI}
            }
        },
        contractV1: {
            gaugeController: "0xb4BAfc3d60662De362c0cB0f5e2DE76603Ea77D7",
            minter: "0xc3CC9369fcB8491DaD4FA64cE1Fbd3DD2d70034f",
            rewardPolicyMaker: "0x3A4148DDDd121fbceD8717CB7B82370Be27F76bf",
            smartWalletChecker: "0x603c5919FCFB13423b963b04D55d1b393da88A7e",
            treasury: "0x4adF575DBe0e6F1c5909AE9c7119927b4FaabbBd",
            votingEscrow: "0xBa57440fA35Fdb671E58F6F56c1A4447aB1f6C2B",
            },

        contractV2: {
            delegationProxy: "0x5BA443267c09578bfd87e033a401F69d37Fe677e",
            gaugeController: "0xBA427dDccba3B63497D8148276Bf64783FaBBe7E",
            minter: "0xc246F4d921dd446cE5c6Bb3aABd64C2d714e21C1",           
            mirroredVotingEscrow: "0x6b5f15E939C8d797E6bd8D5fFda24eDeC655D08d",
            rewardPolicyMaker: "0xb5D66fB34DD0D874709fDB4682C89bB634E7c364",
            smartWalletChecker: "0x603c5919FCFB13423b963b04D55d1b393da88A7e",
            treasury: "0x7Cec58EE233624888294fB194c224EBf66ff37B5",
            veBoostDelegation: "0x0000000000000000000000000000000000000000",
            votingEscrow: "0xBa57440fA35Fdb671E58F6F56c1A4447aB1f6C2B",
     },
    },
    1666600000 : {
        chainId: 1666600000,
        network: "Harmony",
        logo: Logos["ONE"],
        blocksPerYear: 15778476,
        networkParams : {
            chainId: "0x63564c40",
            chainName: "Harmony Mainnet",
            rpcUrls: ["https://api.harmony.one"],
            nativeCurrency: {
                name: "ONE",
                decimals: 18,
                symbol: "ONE"
            },
            blockExplorerUrls: ["https://explorer.harmony.one"]
        },
        linkAddress: "https://explorer.harmony.one/address/",
        safeAddress: "https://multisig.harmony.one/#/safes/",
        hundred: {
            nativeTokenAddress: "0xbb93c7f378b9b531216f9ad7b5748be189a55807",
            unitrollerAddress: "0x0f390559f258eb8591c8e31cf0905e97cf36ace2",
            interestRateModels: {
                "0x28707252fdea41b72cf321d153a6c01fa9f6fb79" : { name: "Stables",   abi : ABI.INTEREST_MODEL_ABI },
                "0x9d56800b8ae23b79fe9d4822aa3245fa527caf3f" : { name: "BlueChips", abi : ABI.INTEREST_MODEL_ABI }
            }
        },
        contractV1: {
            gaugeController: "0xa8cD5D59827514BCF343EC19F531ce1788Ea48f8",
            minter: "0xb4300e088a3AE4e624EE5C71Bc1822F68BB5f2bc",
            rewardPolicyMaker: "0xEdBA32185BAF7fEf9A26ca567bC4A6cbe426e499",
            treasury: "0x243E33aa7f6787154a8E59d3C27a66db3F8818ee",
            votingEscrow: "0xE4e43864ea18d5E5211352a4B810383460aB7fcC",
            },

        contractV2: {
            delegationProxy: "0xB11C769e66f1ECEA06B5c30154B880200Bf57C25",
            gaugeController: "0x61F95b38f880a6C5A4b7DD15560D7bB8B3E36f35",
            minter: "0xd7f3Bf2085AD32ff95E1bCC408d37F10f6949270",
            mirroredVotingEscrow: "0x1dB11Cf7C332E797ac912e11b8762e0A4b24a836",
            rewardPolicyMaker: "0xC3bae38Bfa2CbBE30f442649070408f484bd5882",
            smartWalletChecker: "0x0000000000000000000000000000000000000000",
            treasury: "0xF191d17dEe9943F06bB784C0492805280AeE0bf9",
            veBoostDelegation: "0x5734BB74cFac69f1c34bA66eA6608cCdEe6b81F2",
            votingEscrow: "0xE4e43864ea18d5E5211352a4B810383460aB7fcC",
            },
    },
    1285 : {
        chainId: 1285,
        network: "Moonriver",
        logo: Logos["MOVR"],
        blocksPerYear: 2465386,
        networkParams : {
            chainId: "0x505",
            chainName: "Moonriver",
            rpcUrls: ["https://rpc.moonriver.moonbeam.network"],
            nativeCurrency: {
                name: "MOVR",
                decimals: 18,
                symbol: "MOVR"
            },
            blockExplorerUrls: ["https://moonriver.moonscan.io/"],
        },
        hundred : {
            nativeTokenAddress: "0xd6fcbccfc375c2c61d7ee2952b329dceba2d4e10",
            unitrollerAddress: "0x7d166777bd19a916c2edf5f1fc1ec138b37e7391",
            interestRateModels: {
                "0x28707252fdea41b72cf321d153a6c01fa9f6fb79" : { name: "Stables",   abi : ABI.INTEREST_MODEL_ABI },
                "0x9d56800b8ae23b79fe9d4822aa3245fa527caf3f" : { name: "BlueChips", abi : ABI.INTEREST_MODEL_ABI }
            }
        },
        multicall: {
            address: "0x9fdd7e3e2df5998c7866cd2471d7d30e04496dfa",
            block: 1031878
        },
        linkAddress: "https://moonriver.moonscan.io/address/",
        safeAddress: "https://multisig.moonbeam.network/",
        contractV1: {
            gaugeController: "0xb4300e088a3AE4e624EE5C71Bc1822F68BB5f2bc",
            minter: "0x607312a5C671D0C511998171e634DE32156e69d0",
            rewardPolicyMaker: "0xa8cD5D59827514BCF343EC19F531ce1788Ea48f8",
            treasury: "0xEdBA32185BAF7fEf9A26ca567bC4A6cbe426e499",
            votingEscrow: "0x243E33aa7f6787154a8E59d3C27a66db3F8818ee",
        },
        contractV2: {
            delegationProxy: "0x274E94f03AC51779D14bD45aF77C0e0e9d97cef9",
            gaugeController: "0xca78ca5C3Da9a5a4C960C1757456E99d9F1bc76d",
            minter: "0x08110737CB8276B155aB18533dacF7d27e2357c8",
            mirroredVotingEscrow: "0x7A143fe393C8EC031e8A27129aB523FFC2c3125D",
            rewardPolicyMaker: "0x371F3AD36072230424C828629d53B0Dbd93c8273",
            smartWalletChecker: "0x988174f4AB5ad41E1313F1b07877dFe4A78CE5F2",
            treasury: "0xD7a8De0672131668be0366cF517DbD1c369cE200",
            veBoostDelegation: "0x6333000289bc27A090b3D51E734C2f13e3edc4fd",
            votingEscrow: "0x243E33aa7f6787154a8E59d3C27a66db3F8818ee",
            },
    },
    100 : {
        chainId: 100,
        network: "Gnosis Chain", 
        logo: Logos["GNOSIS"],
        blocksPerYear: 6307200,
        networkParams: {
            chainId: "0x64",
            chainName: "Gnosis Chain",
            rpcUrls: ["https://rpc.xdaichain.com/"],
            nativeCurrency: {
                name: "xDAI",
                decimals: 18,
                symbol: "xDAI"
            },
            blockExplorerUrls: ["https://blockscout.com/xdai/mainnet/"],
        },
        hundred:{
            nativeTokenAddress: "0x090a00a2de0ea83def700b5e216f87a5d4f394fe",
            unitrollerAddress: "0x0F390559F258eB8591C8e31Cf0905E97cf36ACE2", 
            interestRateModels: {
                "0x28707252fdea41b72cf321d153a6c01fa9f6fb79" : { name: "ETH",       abi : ABI.NO_KINK_MODEL_ABI  },
                "0x9d56800b8ae23b79fe9d4822aa3245fa527caf3f" : { name: "wBTC",      abi : ABI.NO_KINK_MODEL_ABI  },
                "0x8a0d639f272f4b966b2dea42d4b743dce7e82c28" : { name: "Stables",   abi : ABI.INTEREST_MODEL_ABI },
                "0xbb93c7f378b9b531216f9ad7b5748be189a55807" : { name: "BlueChips", abi : ABI.INTEREST_MODEL_ABI }
            }
        },
        linkAddress: "https://blockscout.com/xdai/mainnet/address/",
        safeAddress: "https://gnosis-safe.io/app/gno:",
        contractV2: {
            delegationProxy: "0x989b2F0722808d9F9c574363fA8759e925f30F12",
            gaugeController: "0x2105dE165eD364919703186905B9BB5B8015F13c",
            minter: "0x818b3dff96d01590Caf72965e6F50b24331EfdEC",
            mirroredVotingEscrow: "0x988174f4AB5ad41E1313F1b07877dFe4A78CE5F2",
            rewardPolicyMaker: "0x89Aa51685a2B658be8a7b9C3Af70D66557544181",
            smartWalletChecker: "0xEE5d3c956Ff7bF49054380610D8e598793838156",
            treasury: "0x1B65EDec9370a29adb618f741C22fdbe20EB68DD",
            veBoostDelegation: "0x629e95631602Ad5751e79557f297c32C93598B64",
            votingEscrow: "0xf64E1a3eF0d2F5659dC4c10983e595B797C6ecA4",
            },
    },
    10 : {
        chainId: 10,
        network: "Optimism",
        logo: Logos["OPT"],
        blocksPerYear: 2336000,
        networkParams: {
            chainId: "0xa",
            chainName: "Optimism",
            rpcUrls: ["https://mainnet.optimism.io"],
            nativeCurrency: {
                name: "ETH",
                decimals: 18,
                symbol: "ETH"
            },
            blockExplorerUrls: ["https://optimistic.etherscan.io"],
        },
        hundred: {
            nativeTokenAddress: "0xe8f12f5492ec28609d2932519456b7436d6c93bd",
            unitrollerAddress: "0x0f390559f258eb8591c8e31cf0905e97cf36ace2",
            interestRateModels: {
                "0x28707252fdea41b72cf321d153a6c01fa9f6fb79" : { name: "Stables",   abi : ABI.INTEREST_MODEL_ABI },
                "0x9d56800b8ae23b79fe9d4822aa3245fa527caf3f" : { name: "BlueChips", abi : ABI.INTEREST_MODEL_ABI }
            }
        },
        linkAddress: "https://optimistic.etherscan.io/address/",
        contractV2: {
            delegationProxy: "0xb4BAfc3d60662De362c0cB0f5e2DE76603Ea77D7",
            gaugeController: "0xBa57440fA35Fdb671E58F6F56c1A4447aB1f6C2B",
            minter: "0x4adF575DBe0e6F1c5909AE9c7119927b4FaabbBd",
            mirroredVotingEscrow: "0xAc8204a9d79CA87D192ea98A9381600642A66a5F",
            rewardPolicyMaker: "0x3ffd03Ef31F6D5A6C517CEFA9CDf43efEBeE8399",
            smartWalletChecker: "0x1747D329CB37e0A0f387f24065aDdbc60eAB69DD",
            treasury: "0xec378cdd60E890332F7A8CC251315327a4f244B6",
            veBoostDelegation: "0x3A4148DDDd121fbceD8717CB7B82370Be27F76bf",
            votingEscrow: "0x1F8e8472e124F58b7F0D2598EaE3F4f482780b09",
            },
    },
    4689 : {
        chainId: 4689,
        network: "IoTeX",
        logo: Logos["IOTX"],
        blocksPerYear: 6307200,
        networkParams: {
            chainId: "0x1251",
            chainName: "IoTeX",
            rpcUrls: ["https://babel-api.iotex.io"],
            nativeCurrency: {
                name: "IOTX",
                decimals: 18,
                symbol: "IOTX"
            },
            blockExplorerUrls: ["https://iotexscan.io/"],
        },
        hundred: {
            nativeTokenAddress: "0x243e33aa7f6787154a8e59d3c27a66db3f8818ee",
            unitrollerAddress: "0x8c6139ff1e9d7c1e32bdafd79948d0895ba0a831",
            interestRateModels: {
                "0x9d56800b8ae23b79fe9d4822aa3245fa527caf3f" : { name: "Stables",   abi : ABI.INTEREST_MODEL_ABI },
                "0x8a0d639f272f4b966b2dea42d4b743dce7e82c28" : { name: "BlueChips", abi : ABI.INTEREST_MODEL_ABI }
            }
        },
        linkAddress: "https://iotexscan.io/address/"
    },
    137 : {
        chainId: 137,
        network: "Polygon",
        logo: Logos["Polygon"],
        blocksPerYear: 15017140,
        networkParams: {
            chainId: "0x89",
            chainName: "Polygon",
            rpcUrls: ["https://polygon-mainnet.infura.io/v3/295cce92179b4be498665b1b16dfee34"],
            nativeCurrency:{
                name: "MATIC",
                decimals: 18,
                symbol: "MATIC"
            },
            blockExplorerUrls: ["https://polygonscan.com"]
        },
        hundred: {
            nativeTokenAddress: "0xebd7f3349aba8bb15b897e03d6c1a4ba95b55e31",
            unitrollerAddress: "0xedba32185baf7fef9a26ca567bc4a6cbe426e499",
            interestRateModels: {
                "0x772918d032cfd4ff09ea7af623e56e2d8d96bb65" : { name: "ETH",       abi : ABI.NO_KINK_MODEL_ABI  },
                "0xb1c4426c86082d91a6c097fc588e5d5d8dd1f5a8" : { name: "wBTC",      abi : ABI.NO_KINK_MODEL_ABI  },
                "0x29ddb4c4f9baae366dbd40eff79d364e004425b0" : { name: "Stables",   abi : ABI.INTEREST_MODEL_ABI },
                "0x42b458056f887fd665ed6f160a59afe932e1f559" : { name: "BlueChips", abi : ABI.INTEREST_MODEL_ABI }
            }
        },
        linkAddress: "https://polygonscan.com/address/"
    },
    42 : {
        chainId: 42,
        network: "Kovan",
        logo: Logos["ETH"],
        blocksPerYear: 2336000,
        isTestNetwork: true,
        networkParams: {
            chainId: "0x2a",
            chainName: "Kovan",
            rpcUrls: ["https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
            nativeCurrency: {
                name: "ETH",
                decimals: 18,
                symbol: "ETH"
            },
            blockExplorerUrls: ["https://kovan.etherscan.io"]
        },
        linkAddress: "https://kovan.etherscan.io/address/",
        hundred: {
            nativeTokenAddress: "0xfcd8570ad81e6c77b8d252bebeba62ed980bd64d",
            unitrollerAddress: "0x0f390559f258eb8591c8e31cf0905e97cf36ace2",
            interestRateModels: {
                "0x9d56800b8ae23b79fe9d4822aa3245fa527caf3f" : { name: "ETH",       abi : ABI.NO_KINK_MODEL_ABI  },
                "0x8a0d639f272f4b966b2dea42d4b743dce7e82c28" : { name: "BTC",       abi : ABI.NO_KINK_MODEL_ABI  },
                "0x28707252fdea41b72cf321d153a6c01fa9f6fb79" : { name: "Stables",   abi : ABI.INTEREST_MODEL_ABI },
                "0xe8f12f5492ec28609d2932519456b7436d6c93bd" : { name: "BlueChips", abi : ABI.INTEREST_MODEL_ABI }
            }
        },
        contractV1: {
            gaugeController: "0xFa0F5d0cA1031aC6A47CA8Db9cf9dcfd45B3659a",
            minter: "0x89fC1cc860dDF4fb91A7C52b12d5343bB03C332E",
            rewardPolicyMaker: "0x0d9459A2d7252c4cd62cF13416Cd319c3e0C5bB4",
            treasury: "0x788Ac705a7B67562CdD1913b67EE091785FA4F68",
            votingEscrow: "0xbeD8EFa1973F6E1fB3515bf94aa760174431b3F8",
            },

        contractV2: {
            delegationProxy: "",
            gaugeController: "",
            minter: "",
            mirroredVotingEscrow: "",
            rewardPolicyMaker: "",
            smartWalletChecker: "",
            treasury: "",
            veBoostDelegation: "",
            votingEscrow: "",
            },
    },
    1666700000 : {
        chainId: 1666700000,
        network: "Harmony Testnet",
        logo: Logos["ONE"],
        blocksPerYear: 15017140,
        networkParams: {
            chainId: "0x6357d2e0",
            chainName: "Harmony Testnet",
            rpcUrls: ["https://api.s0.b.hmny.io"],
            nativeCurrency: {
                name: "ONE",
                decimals: 18,
                symbol: "ONE"
            },
            blockExplorerUrls: ["https://explorer.testnet.harmony.one/"]
        },
        hundred: {
            nativeTokenAddress: "0xfcd8570ad81e6c77b8d252bebeba62ed980bd64d",
            unitrollerAddress: "0x0f390559f258eb8591c8e31cf0905e97cf36ace2",
            interestRateModels: {
                "0xfcd8570ad81e6c77b8d252bebeba62ed980bd64d" : { name: "ETH",       abi : ABI.NO_KINK_MODEL_ABI  },
                "0x9d56800b8ae23b79fe9d4822aa3245fa527caf3f" : { name: "BTC",       abi : ABI.NO_KINK_MODEL_ABI  },
                "0x8a0d639f272f4b966b2dea42d4b743dce7e82c28" : { name: "Stables",   abi : ABI.INTEREST_MODEL_ABI },
                "0xe8f12f5492ec28609d2932519456b7436d6c93bd" : { name: "BlueChips", abi : ABI.INTEREST_MODEL_ABI }
            }
        },
        linkAddress: "https://explorer.testnet.harmony.one/address/",
        multicall:{
            address: "0xd078799c53396616844e2fa97f0dd2b4c145a685",
            block: 0
        },
        isTestNetwork: true
    },
    69 : {
        chainId: 69,
        network: "Optimism Kovan",
        logo: Logos["OPT"],
        blocksPerYear: 15017140,
        networkParams: {
            chainId: "0x45",
            chainName: "Optimism Kovan",
            rpcUrls: ["https://kovan.optimism.io"],
            nativeCurrency: {
                name: "ETH",
                decimals: 18,
                symbol: "ETH"
            },
            blockExplorerUrls: ["https://kovan-optimistic.etherscan.io"]
        },
        hundred: {
            nativeTokenAddress: "0xe8f12f5492ec28609d2932519456b7436d6c93bd",
            unitrollerAddress: "0x0f390559f258eb8591c8e31cf0905e97cf36ace2",
            interestRateModels: {
                "0x28707252fdea41b72cf321d153a6c01fa9f6fb79" : { name: "Stables",   abi : ABI.INTEREST_MODEL_ABI },
                "0x9d56800b8ae23b79fe9d4822aa3245fa527caf3f" : { name: "BlueChips", abi : ABI.INTEREST_MODEL_ABI }
            }
        },
        linkAddress: "https://kovan-optimistic.etherscan.io/address/",
        isTestNetwork: true,
        contractV2: {
            delegationProxy: "0xb4BAfc3d60662De362c0cB0f5e2DE76603Ea77D7",
            gaugeController: "0xBa57440fA35Fdb671E58F6F56c1A4447aB1f6C2B",
            minter: "0x4adF575DBe0e6F1c5909AE9c7119927b4FaabbBd",
            mirroredVotingEscrow: "0xAc8204a9d79CA87D192ea98A9381600642A66a5F",
            rewardPolicyMaker: "0x3ffd03Ef31F6D5A6C517CEFA9CDf43efEBeE8399",
            smartWalletChecker: "0x1747D329CB37e0A0f387f24065aDdbc60eAB69DD",
            treasury: "0xec378cdd60E890332F7A8CC251315327a4f244B6",
            veBoostDelegation: "0x3A4148DDDd121fbceD8717CB7B82370Be27F76bf",
            votingEscrow: "0x1F8e8472e124F58b7F0D2598EaE3F4f482780b09",
            },
    },
    4690 : {
        chainId: 4690,
        network: "IoTeX Testnet",
        logo: Logos["IOTX"],
        blocksPerYear: 6307200,
        networkParams: {
            chainId: "0x1252",
            chainName: "IoTeX Testnet",
            rpcUrls: ["https://babel-api.testnet.iotex.io"],
            nativeCurrency: {
                name: "IOTX-T",
                decimals: 18,
                symbol: "IOTX-T"
            },
            blockExplorerUrls: ["https://testnet.iotexscan.io/"],
        },
        hundred: {
            nativeTokenAddress: "",
            unitrollerAddress: "0x8c6139ff1e9d7c1e32bdafd79948d0895ba0a831",
            interestRateModels: {
                "0x9d56800b8ae23b79fe9d4822aa3245fa527caf3f" : { name: "ETH",       abi : ABI.NO_KINK_MODEL_ABI  },
                "0x8a0d639f272f4b966b2dea42d4b743dce7e82c28" : { name: "BTC",       abi : ABI.NO_KINK_MODEL_ABI  },
                "0xe8f12f5492ec28609d2932519456b7436d6c93bd" : { name: "Stables",   abi : ABI.INTEREST_MODEL_ABI },
                "0xbb93c7f378b9b531216f9ad7b5748be189a55807" : { name: "BlueChips", abi : ABI.INTEREST_MODEL_ABI }
            }
        },
        multicall : {
            address: "0x25bb701a0ce238faecaec56b437460a372d7f139",
            block: 0
        },
        linkAddress: "https://testnet.iotexscan.io/address/",
        isTestNetwork : true
    },
    43113 : {
        chainId: 43113,
        network: "Avalanche Testnet",
        logo: Logos["AVAX"],
        blocksPerYear: 31556952,
        networkParams : {
            chainId: "0xa869",
            chainName: "Avalanche Fuji Testnet",
            rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
            nativeCurrency: {
                name: "AVAX",
                decimals: 18,
                symbol: "AVAX"
            },
            blockExplorerUrls: ["https://cchain.explorer.avax-test.network"]
        },
        hundred: {
            nativeTokenAddress: "0xe8f12f5492ec28609d2932519456b7436d6c93bd",
            unitrollerAddress: "0x0f390559f258eb8591c8e31cf0905e97cf36ace2",
            interestRateModels: {
                "0x28707252fdea41b72cf321d153a6c01fa9f6fb79" : { name: "Stables",   abi : ABI.INTEREST_MODEL_ABI },
                "0x9d56800b8ae23b79fe9d4822aa3245fa527caf3f" : { name: "BlueChips", abi : ABI.INTEREST_MODEL_ABI }
            }
        },
        linkAddress: "https://cchain.explorer.avax-test.network/address/",
        isTestNetwork: true,
        contractV2: {
            delegationProxy: "0xb4BAfc3d60662De362c0cB0f5e2DE76603Ea77D7",
            gaugeController: "0xBa57440fA35Fdb671E58F6F56c1A4447aB1f6C2B",
            minter: "0x4adF575DBe0e6F1c5909AE9c7119927b4FaabbBd",
            mirroredVotingEscrow: "0xAc8204a9d79CA87D192ea98A9381600642A66a5F",
            rewardPolicyMaker: "0x3ffd03Ef31F6D5A6C517CEFA9CDf43efEBeE8399",
            smartWalletChecker: "0x1747D329CB37e0A0f387f24065aDdbc60eAB69DD",
            treasury: "0xec378cdd60E890332F7A8CC251315327a4f244B6",
            veBoostDelegation: "0x3A4148DDDd121fbceD8717CB7B82370Be27F76bf",
            votingEscrow: "0x1F8e8472e124F58b7F0D2598EaE3F4f482780b09",
        }
    }
}

export default NETWORKS
export type { Network }