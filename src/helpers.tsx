import { Network } from "./networks";

declare global {
  interface String {
    capitalize(): string;
  }
}

export const shortenAddress = (str: string) => {
    if (str)
        return str.substr(0, 4) + "..."+str.substr(str.length-3, str.length-1)
    return ""
  };

  export const toHex = (num: number) => {
    const val = Number(num);
    return "0x" + val.toString(16);
  };

  export const getApiKey = (network: Network | null) :string | undefined => {
      switch (network?.chainId){
        case 1 : 
          return process.env.REACT_APP_ETHERSCAN_API_KEY
        case 10:
          return process.env.REACT_APP_OPTIMISM_API_KEY
        case 137:
          return process.env.REACT_APP_POLYGON_API_KEY
        case 250:
          return process.env.REACT_APP_FANTOM_API_KEY
        case 1285:
          return process.env.REACT_APP_MOONRIVER_API_KEY
        case 42161:
          return process.env.REACT_APP_ARBITRUM_API_KEY
        default :
          return undefined
      }
  }

  export const getApiUrl = (network: Network | null, address: string) : string | undefined => {
    if(network?.apiUrl){
      const apiKey = getApiKey(network)
      if(apiKey)
        return network.apiUrl.replace("$address", address).replace("$apiKey", apiKey)
    }
    return undefined
  }

  // eslint-disable-next-line no-extend-native
  String.prototype.capitalize = function() {
    const parts = this.split(" ")
    const capitalize = parts.map(p => {
      return p.charAt(0).toUpperCase() + p.slice(1)
    })
    
    let str = ""
    capitalize.forEach(c => {
      str += `${c} `
    })
    return str.trim()
  }
  
  export {}