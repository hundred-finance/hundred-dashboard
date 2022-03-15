import React, { useEffect, useState } from "react"
import { useGlobalContext } from "../../Types/gloabalContext"
import { shortenAddress } from "../../helpers"
import Popover  from "react-bootstrap/Popover"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { useWeb3React } from '@web3-react/core'
import {ethers} from "ethers"
import { GetConnector, connectrorsEnum, getErrorMessage } from '../../Connectors/connectors'
import NETWORKS from "../../networks";
import { Modal } from "react-bootstrap";
import mm from "../../assets/huIcons/mm.png"
import wc from "../../assets/huIcons/wc.png"
import cbw from "../../assets/huIcons/cbw.png"

const Connect = () => {
  const { connector, library, chainId, account, activate, deactivate, error} = useWeb3React<ethers.providers.Web3Provider>()
  const { setNetwork, network} = useGlobalContext()
  const [showModal, setShowModal] = useState(false)
  const [showError, setShowError] = useState(false)
  // handle logic to recognize the connector currently being activated
//   const [activatingConnector, setActivatingConnector] = React.useState<any>()
//   React.useEffect(() => {
//     if (activatingConnector && activatingConnector === connector) {
//       setActivatingConnector(undefined)
//     }
//   }, [activatingConnector, connector])

//   // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
//   const triedEager = useEagerConnect()

//   // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
//   useInactiveListener(!triedEager || !!activatingConnector)

  const handleConnect = (c: any) => {
      setShowModal(false)
      const con = GetConnector(c, network ? network.chainId : undefined)
    //   setActivatingConnector(con)
      try{
        activate( con )
        window.localStorage.setItem("provider", c)
      }
      catch(err){
        console.log(err)
      }
  }

  const handleDisconnect = () => {
      try{
        (connector as any).close()
      }
      catch{}

      window.localStorage.removeItem("provider")
      deactivate()
  }


  useEffect(() => {
    if(chainId){
      const net = NETWORKS[chainId]
      if(net) setNetwork(net)
      else console.log("Unsuported Network")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainId])

  useEffect(() => {
      console.log(error)
      if(error){
        setShowError(true)
      }
  }, [error])

  const ErrorModal = (props: any) => {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered 
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <div style={{fontSize: "1.2rem"}}>Error</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="wallets">
            {error ? getErrorMessage(error) : ""}
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  const ConnectModal = (props: any) => {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered 
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <div style={{fontSize: "1.2rem"}}>Connect Wallet</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="wallets">
            <div className="wallet" onClick={() => handleConnect(connectrorsEnum.Metamask)}>
                <img src={mm} alt=""/>
                <div>Metamask</div>
            </div>
            <div className="wallet" onClick={() => handleConnect(connectrorsEnum.WalletConnect)}>
                <img src={wc} alt=""/>
                <div>Wallet Connect</div>
            </div>
            <div className="wallet" onClick={() => handleConnect(connectrorsEnum.Coinbase)}>
                <img src={cbw} alt=""/>
                <div>Coinbase Wallet</div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }


    if(account){
        const popover = (
            <Popover id="popover-basic" style={{backgroundColor: "rgb(34, 37, 41)"}}>
              <Popover.Body>
                <div className="button" onClick={handleDisconnect}>
                    <span className="button-label">Disconnect</span>
                </div>
              </Popover.Body>
            </Popover>
          );

        return(
            <OverlayTrigger trigger="click" rootClose={true} placement="bottom" overlay={popover} delay={{ show: 250, hide: 400 }}>
                <div style={{marginLeft: "1rem"}} className="button">
                    <span className="button-label">{shortenAddress(account)}</span>
                </div>    
            </OverlayTrigger>
        )
    }

    return(
        <>
            <div style={{marginLeft: "1rem"}} className="button" onClick={() => setShowModal(true)}>
                <span className="button-label">Connect</span>
            </div>
            <ConnectModal show={showModal} onHide={() => setShowModal(false)}/>
            <ErrorModal show={showError} onHide={() => setShowError(false)}/>
        </>
    )
}

export default Connect