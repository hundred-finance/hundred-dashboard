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