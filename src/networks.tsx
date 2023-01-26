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
    contractV2?: ContractData, 
}

export type HundredData = {
    address?: string,
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
    contractV2?: ContractData, 
    backstop?: ContractData,
    apiUrl?:string
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
    isMinterV2?: boolean,
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
        },
        apiUrl: "https://api.etherscan.io/api?module=contract&action=getabi&address=$address&apikey=$apiKey"
    },
    250 : {
        chainId: 250,
        network: "Fantom Opera", 
        logo: Logos["FTM"], 
        blocksPerYear: 24*60*60*365,
        apiUrl: "https://api.ftmscan.com/api?module=contract&action=getabi&address=$address&apikey=$apiKey",
        networkParams: {
            chainId: "0xFA",
            chainName: "Fantom Opera",
            rpcUrls: ["https://rpc.ftm.tools/"],
            nativeCurrency: {
                name: "FTM",
                decimals: 18,
                symbol: "FTM"
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
        backstop: {
            delegationProxy: "0x7100CBCa885905F922a19006cF7fD5d0E1bBb26c",
            gaugeController: "0x6A0E5dD021dB29B5869630c4cBCb5B6E7A7b3ed6",
            minter: "0xb1A76e5454E4aF0C4F8f7b071df14a3B4011e8AF",
            mirroredVotingEscrow: "0x6c63287CC629417E96b77DD7184748Bb6536A4e2",
            rewardPolicyMaker: "0x6b5f15E939C8d797E6bd8D5fFda24eDeC655D08d",
            smartWalletChecker: "0x1747D329CB37e0A0f387f24065aDdbc60eAB69DD",
            treasury: "0x603c5919FCFB13423b963b04D55d1b393da88A7e",
            veBoostDelegation: "0xcabc8fC306fCAa4c05B58522B13756AE12eDd902",
            votingEscrow: "0x376020c5B0ba3Fd603d7722381fAA06DA8078d8a",
            },
        },
    42161 : {
        chainId: 42161,
        network: "Arbitrum",
        logo: Logos["Arbitrum"], 
        blocksPerYear: 24*60*60/13.5*365,
        apiUrl: "https://api.arbiscan.io/api?module=contract&action=getabi&address=$address&apikey=$apiKey",
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
        apiUrl: "https://api-moonriver.moonscan.io/api?module=contract&action=getabi&address=$address&apikey=$apiKey",
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
            blockExplorerUrls: [" https://gnosisscan.io/"],
        },
        hundred:{
            nativeTokenAddress: "0x6edcb931168c9f7c20144f201537c0243b19dca4",
            unitrollerAddress: "0x6bb6ebcf3ac808e26545d59ea60f27a202ce8586", 
            interestRateModels: {
                "0x8a0d639f272f4b966b2dea42d4b743dce7e82c28" : { name: "Stables",   abi : ABI.INTEREST_MODEL_ABI },
                "0xbb93c7f378b9b531216f9ad7b5748be189a55807" : { name: "BlueChips", abi : ABI.INTEREST_MODEL_ABI }
            }
        },
        linkAddress: " https://gnosisscan.io/address/",
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
            address: "0x10010078a54396F62c96dF8532dc2B4847d47ED3",
            nativeTokenAddress: "0x1a61a72f5cf5e857f15ee502210b81f8b3a66263",
            unitrollerAddress: "0x5a5755e1916f547d04ef43176d4cbe0de4503d5d",
            interestRateModels: {
                "0x14cb5e017a3f10b9f6254ff24b87e2297dc8b8b3" : { name: "Stables",   abi : ABI.INTEREST_MODEL_V5_ABI },
                "0xcabc8fc306fcaa4c05b58522b13756ae12edd902" : { name: "BlueChips", abi : ABI.INTEREST_MODEL_V5_ABI }
            }
        },
        linkAddress: "https://optimistic.etherscan.io/address/",
        safeAddress: "https://gnosis-safe.io/app/oeth:",
        contractV2: {
            delegationProxy: "0xb4BAfc3d60662De362c0cB0f5e2DE76603Ea77D7",
            gaugeController: "0x55Bba7755B77420d3d3C966440164F15a74F8696",
            minter: "0xbE7CA18470B4AB61741bC2dcad50B1D4052b6b04",
            mirroredVotingEscrow: "0xAc8204a9d79CA87D192ea98A9381600642A66a5F",
            rewardPolicyMaker: "0x274E94f03AC51779D14bD45aF77C0e0e9d97cef9",
            smartWalletChecker: "0x1747D329CB37e0A0f387f24065aDdbc60eAB69DD",
            treasury: "0x6333000289bc27A090b3D51E734C2f13e3edc4fd",
            veBoostDelegation: "0x3A4148DDDd121fbceD8717CB7B82370Be27F76bf",
            votingEscrow: "0x1F8e8472e124F58b7F0D2598EaE3F4f482780b09",
            isMinterV2: true,
        },
        apiUrl: "https://api-optimistic.etherscan.io/api?module=contract&action=getabi&address=$address&apikey=$apiKey"
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
        linkAddress: "https://iotexscan.io/address/",
        contractV2: {
            delegationProxy: "0xc3CC9369fcB8491DaD4FA64cE1Fbd3DD2d70034f",
            gaugeController: "0x4adF575DBe0e6F1c5909AE9c7119927b4FaabbBd",
            minter: "0x3A4148DDDd121fbceD8717CB7B82370Be27F76bf",
            mirroredVotingEscrow: "0xec378cdd60E890332F7A8CC251315327a4f244B6",
            rewardPolicyMaker: "0xBa57440fA35Fdb671E58F6F56c1A4447aB1f6C2B",
            smartWalletChecker: "0xFf39252Ce6A8fC5657235EeFEB45702B86c42E8F",
            treasury: "0x3ffd03Ef31F6D5A6C517CEFA9CDf43efEBeE8399",
            veBoostDelegation: "0xb4BAfc3d60662De362c0cB0f5e2DE76603Ea77D7",
            votingEscrow: "0xAc8204a9d79CA87D192ea98A9381600642A66a5F",
        }

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
        linkAddress: "https://polygonscan.com/address/",
        safeAddress: "https://gnosis-safe.io/app/matic:",
        contractV2: {
            delegationProxy: "0xd7f3Bf2085AD32ff95E1bCC408d37F10f6949270",
            gaugeController: "0xF191d17dEe9943F06bB784C0492805280AeE0bf9",
            minter: "0xC3bae38Bfa2CbBE30f442649070408f484bd5882",
            mirroredVotingEscrow: "0xc3CC9369fcB8491DaD4FA64cE1Fbd3DD2d70034f",
            rewardPolicyMaker: "0x1dB11Cf7C332E797ac912e11b8762e0A4b24a836",
            smartWalletChecker: "0x4adF575DBe0e6F1c5909AE9c7119927b4FaabbBd",
            treasury: "0x6BFD171dDEF7ef775E6C1d6078C10198229DD242",
            veBoostDelegation: "0x61F95b38f880a6C5A4b7DD15560D7bB8B3E36f35",
            votingEscrow: "0xb4BAfc3d60662De362c0cB0f5e2DE76603Ea77D7",
            },
        backstop: {
            delegationProxy: "0xd7f3Bf2085AD32ff95E1bCC408d37F10f6949270",
            gaugeController: "0x1cF3993EbA538e5f085333c86356622161Dd8C0B",
            minter: "0xc8e2C35b7C9CD784635B72df14179746B7C0f2a7",
            mirroredVotingEscrow: "0xc3CC9369fcB8491DaD4FA64cE1Fbd3DD2d70034f",
            rewardPolicyMaker: "0x3A7f310ee75b8cE3e46410Ac438419842B541D10",
            smartWalletChecker: "0x4adF575DBe0e6F1c5909AE9c7119927b4FaabbBd",
            treasury: "0xC457D2DD3209b7186934426ACd8391d504dc3978",
            veBoostDelegation: "0x61F95b38f880a6C5A4b7DD15560D7bB8B3E36f35",
            votingEscrow: "0xb4BAfc3d60662De362c0cB0f5e2DE76603Ea77D7",
            },
        apiUrl: "https://api.polygonscan.com/api?module=contract&action=getabi&address=$address&apikey=$apiKey"
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

        contractV2: {
            delegationProxy: "0x942f00a1de44D61Fa4cFeb2b7746d7C8acA0d4f8",
            gaugeController: "0xcd64350439ef028Af5086aBD5deDf4F38E4432D4",
            minter: "0xE52b96F1268B2f774E3fB7B5F1eA778E85379B52",
            mirroredVotingEscrow: "0x2b6E60A4e47f791028Cd27208b4Abb5B7D688F6F",
            rewardPolicyMaker: "0x098bF835025a2660bBa77Dba5C266535938EA2e8",
            smartWalletChecker: "0xf83F5A1206363983A79C9767B38A65423bE2089c",
            treasury: "0x6a617606F384fC2c53503515e3bCd11D623e4285",
            veBoostDelegation: "0x51d648c6f92430aa548883aE421f53E11cEe585d",
            votingEscrow: "0x9161a35b6A126edE87E5C1D6D46076371Fbdc88c",
        },
        backstop: {
            delegationProxy: "0xd7f3Bf2085AD32ff95E1bCC408d37F10f6949270",
            gaugeController: "0x192356AD583E85020A0a71540E4d538a5684849e",
            minter: "0x0f4ED02A5b441176487Ff529392d9134F350550f",
            mirroredVotingEscrow: "0xc3CC9369fcB8491DaD4FA64cE1Fbd3DD2d70034f",
            rewardPolicyMaker: "0x45D5618b30A0B4c1eCd7BE2c005F739B31e9a46e",
            smartWalletChecker: "0x4adF575DBe0e6F1c5909AE9c7119927b4FaabbBd",
            treasury: "0xF8AF6f34cEf5b3b94B744CAa79B0b34AFf4Ee5E5",
            veBoostDelegation: "0x61F95b38f880a6C5A4b7DD15560D7bB8B3E36f35",
            votingEscrow: "0xb4BAfc3d60662De362c0cB0f5e2DE76603Ea77D7",
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