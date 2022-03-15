export const shortenAddress = (str: string) => {
    if (str)
        return str.substr(0, 4) + "..."+str.substr(str.length-3, str.length-1)
    return ""
  };

  export const toHex = (num: number) => {
    const val = Number(num);
    return "0x" + val.toString(16);
  };