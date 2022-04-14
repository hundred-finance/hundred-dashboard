import axios from "axios";

export const getChainData = (endpoint : string) => {

  axios.get('http://api.hundred.finance/' + endpoint)
  // handle success
  .then((response: any) => {
    
    console.log('response: ', response);
  })
  // handle error
  .catch((error: any) => { 
    if (!error.status) {
    // network error
    console.log('network error')
  }
    // status error
    console.log('status error: ', error);
  })
  // always executed
  .then((always: any) => {
    console.log('always: ', always);
  });
}