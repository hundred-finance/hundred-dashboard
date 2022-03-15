import { useWeb3React } from "@web3-react/core"
import { useState } from "react"
import {  Modal } from "react-bootstrap"
import { toHex } from "../../helpers"
import NETWORKS from "../../networks"
import { useGlobalContext } from "../../Types/gloabalContext"
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

const NetworkButton = () => {
    const { connector, library } = useWeb3React()
    const {network, setNetwork} = useGlobalContext()
    const [showModal, setShowModal] = useState(false)
    const [switchModal, setSwitchModal] = useState(false)

    const switchNetwork = async (chain: number) => {
      setShowModal(false)
      if (connector instanceof WalletConnectConnector){
        setSwitchModal(true)
        return
      }
      else if (connector){
        try {
          await library.provider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: toHex(chain) }]
          });
        } catch (switchError: any) {
          console.log(switchError)
          if (switchError.code === 4902) {
            try {
              await library.provider.request({
                method: "wallet_addEthereumChain",
                params: [NETWORKS[chain].networkParams]
              });
            } catch (error) {
              console.log(error)
            }
          }
        }
      }
      else{
        setNetwork(NETWORKS[chain])
      }
    };

    const SwitchMessageModal = (props: any) => {
      return (
        <Modal
          {...props}
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered 
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Switch Network
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Please switch from your wallet.
            </p>
          </Modal.Body>
        </Modal>
      );
    }
    
    const NetworksModal = (props: any) => {
        return (
          <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered 
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Networks
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="networks">
                <div className="networks-category">
                  <div className="networks-category-title">Mainets</div>
                    {Object.values(NETWORKS).filter(n => !n.isTestNetwork).map((n, index) => {
                      return (
                        <div key={index} className={`network ${network && network.chainId === n.chainId ? "network-active" : "network-inactive"}`}
                          onClick={() => switchNetwork(n.chainId)}>
                          <div  className="network-logo"><img src={n.logo} alt="" /></div>
                          <div className="network-title">{n.network}</div>
                        </div>)
                      })}
                </div>
                <div className="networks-category">
                  <div className="networks-category-title">Testnets</div>
                    {Object.values(NETWORKS).filter(n => n.isTestNetwork).map((n, index) => {
                      return (
                        <div key={index} className={`network ${network && network.chainId === n.chainId ? "network-active" : "network-inactive"}`}
                          onClick={() => switchNetwork(n.chainId)}>
                          <div  className="network-logo"><img src={n.logo} className="network-logo" alt="" /></div>
                          <div className="network-title">{n.network}</div>
                        </div>)
                      })}
                </div>
              </div>
            </Modal.Body>
          </Modal>
        );
      }

    return (
        <>
            <div className="button" onClick={()=> setShowModal(true)}>
                            {network?.logo ? <img className="circle" src={network?.logo} alt=""/> : ""}
                            <div className="button-network-label">{network?.network}</div>
            </div>
            <NetworksModal show={showModal} onHide={() => setShowModal(false)}/>
            <SwitchMessageModal show={switchModal} onHide={() => setSwitchModal(false)}/>
        </>
    )
}

export default NetworkButton
