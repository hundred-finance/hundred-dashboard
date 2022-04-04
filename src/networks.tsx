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
    gaugeControllerAddress?: string,
}

export type HundredData = {
    nativeTokenAddress: string,
    unitrollerAddress: string,
    interestRateModels: InterestRateModels
}

type Lendly = {
    [key: string] : LendlyData
}

// type Multicall = {
//     address: string,
//     block: number
// }

type Network ={
    chainId: number,
    network: string,
    symbol: string,
    logo: string,
    name: string,
    blocksPerYear: number,
    networkParams: NetworkParams,
    isTestNetwork?: boolean,
    linkAddress: string,
    safeAddress?: string,
    hundred: HundredData,
    multicall?: Multicall,
    lendly?: Lendly,
    gaugeControllerAddress?: string,
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
        symbol: "ETH",
        logo: Logos["ETH"], 
        name: "Ethereum",
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
        symbol: "FTM",
        logo: Logos["FTM"], 
        name: "FTM",
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
                gaugeControllerAddress: "0x788ac705a7b67562cdd1913b67ee091785fa4f68",

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
        gaugeControllerAddress: "0xb1c4426C86082D91a6c097fC588E5D5d8dD1f5a8",

    },
    42161 : {
        chainId: 42161,
        network: "Arbitrum",
        symbol: "AETH",
        logo: Logos["Arbitrum"], 
        name: "AETH",
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
        gaugeControllerAddress: "0xb4BAfc3d60662De362c0cB0f5e2DE76603Ea77D7",

    },
    1666600000 : {
        chainId: 1666600000,
        network: "Harmony",
        symbol: "ONE",
        logo: Logos["ONE"],
        name: "ONE",
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
        gaugeControllerAddress: "0xa8cD5D59827514BCF343EC19F531ce1788Ea48f8",

    },
    1285 : {
        chainId: 1285,
        network: "Moonriver",
        symbol: "MOVR",
        logo: Logos["MOVR"],
        name: "MOVR",
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
        gaugeControllerAddress: "0xca78ca5C3Da9a5a4C960C1757456E99d9F1bc76d",

    },
    100 : {
        chainId: 100,
        network: "Gnosis Chain", 
        symbol: "xDai",
        logo: Logos["GNOSIS"],
        name: "Gnosis",
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
        gaugeControllerAddress: "0x2105dE165eD364919703186905B9BB5B8015F13c",

    },
    10 : {
        chainId: 10,
        network: "Optimism",
        symbol: "ETH",
        logo: Logos["OPT"],
        name: "OPT",
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
        linkAddress: "https://optimistic.etherscan.io/address/"
    },
    4689 : {
        chainId: 4689,
        network: "IoTeX",
        symbol: "IOTX",
        logo: Logos["IOTX"],
        name: "IOTX",
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
    42 : {
        chainId: 42,
        network: "Kovan",
        symbol: "ETH",
        logo: Logos["ETH"],
        name: "ETH",
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
        gaugeControllerAddress: "0x2E08596F46f51d1E88207790270aF2BD94602762",


    },
    1666700000 : {
        chainId: 1666700000,
        network: "Harmony Testnet",
        symbol: "ETH",
        logo: Logos["ONE"],
        name: "ONE",
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
        symbol: "ETH",
        logo: Logos["OPT"],
        name: "OPT",
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
        isTestNetwork: true
    },
    4690 : {
        chainId: 4690,
        network: "IoTeX Testnet",
        symbol: "IOTX",
        logo: Logos["IOTX"],
        name: "IOTX-T",
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
        symbol: "AVAX",
        logo: Logos["AVAX"],
        name: "AVAX",
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
        isTestNetwork: true
    }
}

export default NETWORKS
export type { Network }


