
export const getChainData = async (endpoint : string) => {

  const res = await fetch('http://api.hundred.finance/' + endpoint)
  const data = await res.json()

  return data
}