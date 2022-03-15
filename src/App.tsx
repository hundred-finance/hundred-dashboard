import { useSafeAppsSDK } from '@gnosis.pm/safe-apps-react-sdk';
import { SafeAppProvider } from "@gnosis.pm/safe-apps-provider";
import "bootstrap/dist/css/bootstrap.min.css"
import { ethers } from "ethers";
import { useEffect, useMemo, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import {FantomLendlyLayout, Layout} from './Layout/layout';
import Main from './Lendly/Fantom/Main/main';
import { Network } from "./networks";
import { MyGlobalContext } from "./Types/gloabalContext";
import Dashboard from './Dashboard/dashboard';
import { JsonRpcProvider, Web3Provider } from '@ethersproject/providers';
import { useWeb3React} from '@web3-react/core';
import { GetConnector } from './Connectors/connectors';

declare global {
  interface Window {
    
  }
}

global.Buffer = window.Buffer || require("buffer").Buffer

const App = () => {
  const { library, activate } = useWeb3React()

  const [network, setNetwork] = useState<Network | null>(null)
  const [provider, setProvider] = useState<Web3Provider | JsonRpcProvider>()
  const [openSpinner, setOpenSpinner] = useState<boolean>(false)
  const { sdk, safe } = useSafeAppsSDK();
  const [openSite, setOpenSite] = useState(false)
  
  const safeProvider = useMemo(() => {
    if (safe.safeAddress !== "")
      return new ethers.providers.Web3Provider(new SafeAppProvider(safe, sdk))
    else if (library){
      return library
    }
    else {
      if(network){
        const net = {...network}
      
        const prov = net ? new ethers.providers.JsonRpcProvider(net.networkParams.rpcUrls[0]) : undefined
        return prov
      }
      else return undefined
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[safe, sdk, network, library]);

  useEffect(() =>{
    const net = window.localStorage.getItem("network")
    const prov = window.localStorage.getItem("provider")
    if(prov) 
    {
      const con = GetConnector(+prov)
      activate(con)
    }
    else{
      if (net){
        const temp = JSON.parse(net) as Network
        setNetwork(temp)
      }
      else{
        const p = safeProvider
        setProvider(p)
      }
    }
    setOpenSite(true)
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(() => {
    window.localStorage.setItem("network", JSON.stringify(network))
    if(!library){
      const sp = safeProvider
      setProvider(_ => sp)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [network])

  useEffect(() => {
      const prov = safeProvider
      setProvider(prov)
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [library])

  return (
    openSite ? 
      <MyGlobalContext.Provider value={({network, setNetwork, provider, setProvider, openSpinner, setOpenSpinner})}>
          <div className="App">
            <Routes>
              <Route path="/" element={<Layout/>}>
                <Route index element={<Dashboard/>}/>
              </Route>
              {network && network.lendly ? 
                <Route path="/fantom/lendly" element={<FantomLendlyLayout/>}>
                  <Route index element={<Main/>}/>
                  <Route path="hnd" element={<Dashboard lendly='HND' />} />
                  <Route path="weve" element={<Dashboard lendly='WEVE' />} />
                </Route>
            : null}
            <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
          </div>
      </MyGlobalContext.Provider>
    : <div className="App">

    </div>
  );
}

export default App;
