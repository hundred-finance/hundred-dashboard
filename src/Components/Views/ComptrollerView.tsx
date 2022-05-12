import { BigNumber } from "ethers"
import { useEffect, useRef, useState } from "react"
import { Col, FormControl, InputGroup, OverlayTrigger, Row, Spinner, Table, Tooltip} from "react-bootstrap"
import { BsToggleOff, BsToggleOn } from "react-icons/bs"
import {MdCancel, MdCheck, MdContentCopy} from "react-icons/md"
import { getApiKey, getApiUrl, shortenAddress } from "../../helpers"
import { Comptroller } from "../../Types/data"
import { useGlobalContext } from "../../Types/gloabalContext"
import { useMarketContext } from "../../Types/marketContext"
import Loading from "../Loading/loading"
import "./views.css"

const ComptrollerView = () => {
    const [content, setContent] = useState("Copy address to clipboard")
    const [abiContent, setAbiContent] = useState("Copy ABI to clipboard")
    const {signer, comptroller, setComptroller} = useMarketContext()
    const {network} = useGlobalContext()

    const comptrollerRef = useRef<Comptroller | undefined>(undefined)

    comptrollerRef.current = comptroller

    useEffect(() => {
        if(comptroller) comptrollerRef.current = {...comptroller}
        else comptrollerRef.current = undefined
    }, [comptroller])

    const linkAddress = network ? network.linkAddress : ""
    
    const handleCopy = (text: string): void => {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        // Avoid scrolling to bottom
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            var successful = document.execCommand('copy');
            successful ? setContent("Copied") : setContent("Copy address to clipboard")
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }
        document.body.removeChild(textArea);
    }

    const handleABICopy = async (address: string): Promise<void> => {
        const textArea = document.createElement("textarea");
        try {
            const url = getApiUrl(network, address)
            if(!url){
                setAbiContent("Unable to copy")
                return
            }
            
            const res = await fetch(url)
            const data = await res.json()
            // Avoid scrolling to bottom
            textArea.value = data.result
            textArea.style.top = "0";
            textArea.style.left = "0";
            textArea.style.position = "fixed";
    
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();

            var successful = document.execCommand('copy');
            successful ? setAbiContent("Copied") : setAbiContent("Copy ABI to clipboard")
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }
        document.body.removeChild(textArea);
    }

    const handleFocus = (event: any) => event.target.select();

    const updateSeizePaused = async (): Promise<void> => {
        if(comptroller && signer){
            const temp = {...comptroller}
          temp.seizePausedLoading = true
          setComptroller(temp)

          try{
              const signedComptroller = comptroller.comptroller.connect(signer)
              const tx = await signedComptroller._setSeizePaused(!comptroller.seizePaused)
              const receipt = await tx.wait()

            if(receipt.status){
                const temp = {...comptroller}
                temp.seizePaused = await signedComptroller.seizeGuardianPaused()
                setComptroller(temp)
            }
          }
          catch(err){

          }
          finally{
              const temp = {...comptroller}
              temp.seizePausedLoading = false
              setComptroller(temp)
          }
        }
    }

    const updateTransferPaused = async (): Promise<void> => {
        if( comptroller && signer){
            const temp = {...comptroller}
            temp.transferPausedLoading = true
            setComptroller(temp)
            
            try{
              const signedComptroller = comptroller.comptroller.connect(signer)
              const tx = await signedComptroller._setTransferPaused(!comptroller.transferPaused)
              const receipt = await tx.wait()
            
              if(receipt.status){
                  const temp = {...comptroller}
                  temp.transferPaused = await signedComptroller.transferGuardianPaused()
                  setComptroller(temp)
                }
            }
            catch(err){
            
            }
            finally{
                const temp = {...comptroller}
                temp.transferPausedLoading = false
                setComptroller(temp)
            }
        }
      }

      const setCloseFactor = async (): Promise<void> =>{
        if( comptroller && signer){
            try
            {
              const signedComptroller = comptroller.comptroller.connect(signer);
              var bignumber = BigNumber.from(comptroller.closeFactorEdit).mul(BigNumber.from("10").pow(18)).div("100")
              const tx = await signedComptroller._setCloseFactor(bignumber);
              const receipt = await tx.wait()
            
              if (receipt.status){
                const temp = {...comptroller}
                const closeFactor = await signedComptroller.closeFactorMantissa()
                temp.closeFactor = closeFactor / 1e18
                setComptroller(temp)  
              }
            }
            catch(err){
              console.log(err)
            }
            finally{
                const temp = {...comptroller}
                temp.closeFactorLoading = false
                setComptroller(temp)
            }
        }
      }

      const editCloseFactor = (value: string) : void => {
        if( comptroller){
            const temp = {...comptroller}
            temp.closeFactorEdit = +value
            setComptroller(temp)
        }
      }
      
      const openComptrollerCloseFactor = () : void =>{
        if( comptroller){
            const temp = {...comptroller}
            temp.closeFactorEdit = comptroller.closeFactor * 100
            temp.closeFactorLoading = true
            setComptroller(temp)
        }
      }

      const cancelCloseFactor = (): void => {
        if( comptroller){
            const temp = {...comptroller}
            temp.closeFactorLoading = false
            setComptroller(temp)
        }
      }

      const setLiquidationIncentive = async (): Promise<void> =>{
        if( comptroller && signer){
             try
             {
               const signedComptroller = comptroller.comptroller.connect(signer);
               var bignumber = BigNumber.from(comptroller.liquidationIncentiveEdit).mul(BigNumber.from("10").pow(18)).div("100")
               const tx = await signedComptroller._setLiquidationIncentive(bignumber);
               const receipt = await tx.wait()
             
               if (receipt.status){
                   const temp = {...comptroller}
                    temp.liquidationIncentive = await signedComptroller.liquidationIncentiveMantissa()
                    setComptroller(temp)
               }
             }
             catch(err){
               console.log(err)
             }
             finally{
                 const temp = {...comptroller}
                temp.liquidationIncentiveLoading = false
                setComptroller(temp)
             }
        }
       }
   
       const editLiquidationIncentive = (value: string) => {
         if( comptroller){
             const temp = {...comptroller}
             temp.liquidationIncentiveEdit = +value
             setComptroller(temp)
         }
       }
   
       const openLiquidationIncentive = () : void =>{
         if( comptroller){
             const temp = {...comptroller}
             temp.liquidationIncentiveEdit = comptroller.liquidationIncentive * 100
             temp.liquidationIncentiveLoading = true
   
             setComptroller(temp)
         }
       }
   
       const cancelLiquidationIncentive = (): void => {
         if( comptroller){
            const temp = {...comptroller} 
            temp.liquidationIncentiveLoading = false
   
             setComptroller(temp)
         }
       }

     return(
             <Row>
                 <Col xxl="9" xl="10" lg="11" md="12" className="col-padding">
                 <h4>Comptroller</h4>
             <Table striped bordered hover variant="dark" size="sm" responsive>
                 <thead>
                     <tr>
                        <th className="text-center align-middle">Address</th>
                        <th className="text-center align-middle">Implementation</th>
                        <th className="text-center align-middle">Seize</th>
                        <th className="text-center align-middle">Transfer</th>
                        <th className="text-center align-middle">Oracle</th>
                        <th className="text-center align-middle">Pause Guardian</th>
                        <th className="text-center align-middle">Close Factor</th>
                        <th className="text-center align-middle">Hundred Rate</th>
                        <th className="text-center align-middle">Hundred Address</th>
                        <th className="text-center align-middle">Liquidation Incentive</th>
                     </tr>
                 </thead>
                 <tbody>
                     { comptrollerRef.current ? (
                         <tr key={10000}>
                         <td className="text-center">
                             <div className="copy-td">
                                 <a target="_blank" rel="noreferrer" href={`${linkAddress}${comptrollerRef.current.address}`}>{ shortenAddress(comptrollerRef.current.address) }</a>
                                {
                                  comptrollerRef.current.address ?
                                  <OverlayTrigger placement="top-start" overlay={<Tooltip id="first">{content}</Tooltip>}>
                                      <div>
                                            <MdContentCopy className="copy-btn" onMouseLeave={()=> setContent("Copy address to clipboard")} onClick={() => handleCopy( comptrollerRef.current ? comptrollerRef.current.address: "")}/>
                                      </div>
                                  </OverlayTrigger>
                                     : ""
                                }
                             </div>
                         </td>
                         <td className="text-center">
                             <div className="copy-td">
                                 <a target="_blank" rel="noreferrer" href={`${linkAddress}${comptrollerRef.current.implementation}`}>{ shortenAddress(comptrollerRef.current.implementation) }</a>{" "}
                                 {
                                     comptrollerRef.current.implementation ?
                                     <div className="copy-td-content">
                                        <OverlayTrigger placement="top-start" overlay={<Tooltip id="second">{content}</Tooltip>}>
                                            <div>
                                                <MdContentCopy className="copy-btn" onMouseLeave={()=> setContent("Copy address to clipboard")} onClick={() => handleCopy( comptrollerRef.current ? comptrollerRef.current.implementation : "")}/>
                                            </div>
                                        </OverlayTrigger>
                                        {getApiKey(network) ? 
                                            <OverlayTrigger placement="top-start" overlay={<Tooltip id="second">{abiContent}</Tooltip>}>
                                                <div className="abi-copy" onMouseLeave={()=> setAbiContent("Copy ABI to clipboard")} onClick={() => handleABICopy(comptrollerRef.current ? comptrollerRef.current.implementation : "")}>
                                                   ABI
                                                </div>
                                            </OverlayTrigger>
                                            : null
                                        }
                                     </div>
                                     : ""
                                 }
                             </div>
                         </td>
                         <td className="text-center">{comptrollerRef.current ? !comptrollerRef.current.seizePaused ? 
                                 <BsToggleOn className={`cursor-pointer text-success ${comptrollerRef.current.seizePausedLoading ? "hidden" : ""}`} 
                                     size={26}
                                     onClick={() => updateSeizePaused()}/> 
                                 : <BsToggleOff className={`cursor-pointer text-danger ${comptrollerRef.current.seizePausedLoading ? "hidden" : ""}`}
                                 size={26}
                                     onClick={()=> updateSeizePaused()}/>
                             : ""}
                             <Spinner animation="border" size="sm" hidden={!comptrollerRef.current.seizePausedLoading}/>
                             </td>
                         <td className="text-center">{comptrollerRef.current ? !comptrollerRef.current.transferPaused ? 
                                 <BsToggleOn className={`cursor-pointer text-success ${comptrollerRef.current.transferPausedLoading ? "hidden" : ""}`}
                                     size={26}
                                     onClick={() => updateTransferPaused()}/> 
                                 : <BsToggleOff className={`cursor-pointer text-danger ${comptrollerRef.current.transferPausedLoading ? "hidden" : ""}`}
                                 size={26}
                                     onClick={()=> updateTransferPaused()}/>
                                 : ""}
                                 <Spinner animation="border" size="sm" hidden={!comptrollerRef.current.transferPausedLoading}/>
                                 </td>
                         <td className="text-center">
                             <div className="copy-td">
                                 <a target="_blank" rel="noreferrer" href={`${linkAddress}${comptrollerRef.current.oracleAddress}`}>{ shortenAddress(comptrollerRef.current.oracleAddress) }</a>{" "}
                                 {
                                     comptrollerRef.current.oracleAddress ?
                                     <OverlayTrigger placement="top-start" overlay={<Tooltip id="second">{content}</Tooltip>}>
                                         <div>
                                            <MdContentCopy className="copy-btn" onMouseLeave={()=> setContent("Copy address to clipboard")} onClick={() => handleCopy( comptrollerRef.current ? comptrollerRef.current.oracleAddress : "")}/>
                                         </div>
                                     </OverlayTrigger>
                                     : ""
                                 }
                             </div>
                         </td>
                         <td className="text-center">
                            <div className="copy-td">
                                <a target="_blank" rel="noreferrer" href={`${linkAddress}${comptrollerRef.current.pauseGuardian}`}>{ shortenAddress(comptrollerRef.current.pauseGuardian) }</a>{" "}
                                {
                                    comptrollerRef.current.pauseGuardian ?
                                    <OverlayTrigger placement="top-start" overlay={<Tooltip id="second">{content}</Tooltip>}>
                                        <div>
                                            <MdContentCopy className="copy-btn" onMouseLeave={()=> setContent("Copy address to clipboard")} onClick={() => handleCopy(comptrollerRef.current ? comptrollerRef.current.pauseGuardian : "")}/>
                                        </div>
                                    </OverlayTrigger>
                                    : ""
                                }
                            </div>
                        </td>
                         <td className="text-center">
                                 <div>
                                     <div className={`cursor-pointer ${comptrollerRef.current.closeFactorLoading ? "hidden" : ""}`} onClick={openComptrollerCloseFactor}>
                                         {comptroller ? comptroller.closeFactor * 100 + "%" : ""}
                                     </div>
                                     <InputGroup  className={`${comptrollerRef.current.closeFactorLoading ? "" : "hidden"}`}>
                                     <FormControl value={comptrollerRef.current.closeFactorEdit} onFocus={handleFocus} onChange={e => editCloseFactor(e.target.value)}/>
                                         <InputGroup.Text className="cursor-pointer inputGroup-hover">
                                             <MdCheck size="20" className="text-success" onClick={setCloseFactor}/>
                                         </InputGroup.Text>
                                         <InputGroup.Text className="cursor-pointer inputGroup-hover" >
                                             <MdCancel size="20" className="text-danger" onClick={cancelCloseFactor}/>
                                         </InputGroup.Text>
 
                                     
                                     </InputGroup> 
                                 </div>
                         </td>
                         <td className="text-center">{comptrollerRef.current.compRate} </td>
                         <td className="text-center">
                             <div className="copy-td">
                                 <a target="_blank" rel="noreferrer" href={`${linkAddress}${comptrollerRef.current.hundred}`}>{ shortenAddress(comptrollerRef.current.hundred) }</a>{" "}
                                 {
                                     comptrollerRef.current.hundred ?
                                     <OverlayTrigger placement="top-start" overlay={<Tooltip id="first">{content}</Tooltip>}>
                                         <div>
                                            <MdContentCopy className="copy-btn" onMouseLeave={()=> setContent("Copy address to clipboard")} onClick={() => handleCopy( comptrollerRef.current ? comptrollerRef.current.hundred : "")}/>
                                         </div>
                                     </OverlayTrigger>
                                     : ""
                                 }
                             </div>
                         </td>
                         <td className="text-center">
                                 <div>
                                     <div className={`cursor-pointer ${comptrollerRef.current.liquidationIncentiveLoading ? "hidden" : ""}`} onClick={e => openLiquidationIncentive()}>
                                         {comptroller ? comptroller.liquidationIncentive * 100 + "%" : ""}
                                     </div>
                                     <InputGroup  className={`${comptrollerRef.current.liquidationIncentiveLoading ? "" : "hidden"}`}>
                                     <FormControl value={comptrollerRef.current.liquidationIncentiveEdit} onFocus={handleFocus} onChange={e => editLiquidationIncentive(e.target.value)}/>
                                         <InputGroup.Text className="cursor-pointer inputGroup-hover">
                                             <MdCheck size="20" className="text-success" onClick={()=> setLiquidationIncentive()}/>
                                         </InputGroup.Text>
                                         <InputGroup.Text className="cursor-pointer inputGroup-hover" >
                                             <MdCancel size="20" className="text-danger" onClick={()=> cancelLiquidationIncentive()}/>
                                         </InputGroup.Text>
                                     </InputGroup> 
                                 </div>
                         </td>
                      </tr>
                     ): <tr>
                         <td colSpan={10}>
                            <Loading/>
                         </td>
                        </tr>}
                 </tbody>
             </Table>
                 </Col>
             </Row>

     )
}

export default ComptrollerView