import { useState } from "react"
import { Col, Container, FormControl, InputGroup, OverlayTrigger, Row, Spinner, Table, Tooltip } from "react-bootstrap"
import {MdContentCopy, MdCheck, MdCancel} from "react-icons/md"
import {BsToggleOff, BsToggleOn} from "react-icons/bs"
import { useMarketContext } from "../../Types/marketContext"
import { useGlobalContext } from "../../Types/gloabalContext"
import { shortenAddress } from "../../helpers"
import { BigNumber, ethers } from "ethers"
import ABI from "../../abi"
import Loading from "../Loading/loading"

const MarketsView = () =>{
    const [content, setContent] = useState("Copy address to clipboard")
    const {signer, comptroller, markets, setMarkets} = useMarketContext()
    const {network, provider} = useGlobalContext()


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

    const handleFocus = (event: any) => event.target.select();

    const handleOpenCollateral = (e: any, index: number) =>{
        openCollateral(index)
    }

    const updateBorrowPaused = async (index: number): Promise<void> => {
        if(comptroller && signer){
            const temp = [...markets]
            temp[index].borrowPausedLoading = true
            setMarkets(temp)
            
            try{
              const signedComptroller = comptroller.comptroller.connect(signer);
              const tx = await signedComptroller._setBorrowPaused(markets[index].address, !markets[index].borrowPaused);
              const receipt = await tx.wait()
            
              if (receipt.status) {
                const temp = [...markets]
                temp[index].borrowPaused = await signedComptroller.borrowGuardianPaused(temp[index].address);
                setMarkets(temp)  
              }
            }
            catch(err){
            
            }
            finally{
              const temp = [...markets]
              temp[index].borrowPausedLoading = false
              setMarkets(temp)
            }
        }
    }

    const updateMintPaused = async (index: number): Promise<void> => {
        if(comptroller && signer){
            const temp = [...markets]
            temp[index].mintPausedLoading = true
  
            setMarkets(temp)
            
            try{
              const signedComptroller = comptroller.comptroller.connect(signer);
              const tx = await signedComptroller._setMintPaused(temp[index].address, !temp[index].mintPaused);
              const receipt = await tx.wait()
            
              if (receipt.status) {
                const temp = [...markets]
                temp[index].mintPaused = signedComptroller.mintGuardianPaused(temp[index].address)
                setMarkets(temp)
              }
            }
            catch(err){
            
            }
            finally{
              const temp = [...markets]
              temp[index].mintPausedLoading = false
              setMarkets(temp)
            }
        }
    }

    // const dropCompedMarket = async (index: number): Promise<void> => {
    //     if(comptroller && signer){
    //         const temp = [...markets]
    //         temp[index].isCompedLoading = true
  
    //         setMarkets(temp)
            
    //         try{
    //           const signedComptroller = comptroller.comptroller.connect(signer);
    //           const tx = await signedComptroller._dropCompMarket(temp[index].address);
    //           const receipt = await tx.wait()
            
    //           if(receipt.status){
    //             const temp = [...markets]
    //             var market = await signedComptroller.markets(temp[index].address);
    //             temp[index].isComped = market.isComped;
    //             setMarkets(temp)
    //           }
          
    //         }
    //         catch(err){
            
    //         }
    //         finally{
    //           const temp = [...markets]
    //           temp[index].isCompedLoading = false
    //           setMarkets(temp)
    //         }
    //     }
    //   }
  
    const setCollateralFactor = async (index: number): Promise<void> =>{
      if(comptroller && signer){
          try
          {
            const temp = [...markets]
            const signedComptroller = comptroller.comptroller.connect(signer);
            var bignumber = BigNumber.from(temp[index].collateralFactorEdit).mul(BigNumber.from("10").pow(18)).div("100")
            var tx = await signedComptroller._setCollateralFactor(temp[index].address, bignumber);
            var receipt = await tx.wait()
          
            if (receipt.status){
              const temp = [...markets]
              var market = await signedComptroller.markets(temp[index].address);
              temp[index].collateralFactor = market.collateralFactorMantissa / 1e18;
              setMarkets(temp)
            }        
          }
          catch(err){
            console.log(err)
          }
          finally{
            const temp = [...markets]
            temp[index].collateralFactorLoading = false
            setMarkets(temp)
          }
      }
    }
  
    const editCollateral = (index: number, value: string): void => {
        const temp = [...markets]
        temp[index].collateralFactorEdit = +value
      
        setMarkets(temp)
      
    }
  
    const openCollateral = (index: number): void =>{
      const temp = [...markets]
      temp[index].collateralFactorEdit = temp[index].collateralFactor * 100
      temp[index].collateralFactorLoading = true
  
      setMarkets(temp)
      
    }
  
    const cancelCollateral = (index: number): void => {
      const temp = [...markets]
      temp[index].collateralFactorLoading = false

      setMarkets(temp)
    }

    const setReserveFactor = async (index: number): Promise<void> =>{
      if(provider && signer){
          try
          {
            const temp = [...markets]
            const ctoken = new ethers.Contract(temp[index].address, ABI.CTOKEN_ABI, signer);
            var bignumber = BigNumber.from(temp[index].reserveFactorEdit).mul(BigNumber.from("10").pow(18)).div("100")
            const tx = await ctoken._setReserveFactor(bignumber)
            const receipt = await tx.wait()
          
            if (receipt.status){
              const reserveFactor = await ctoken.reserveFactorMantissa()
              temp[index].reserveFactor = reserveFactor / 1e18
              setMarkets(temp)
            }
          }
          catch(err){
            console.log(err)
          }
          finally{
            const temp = [...markets]
            temp[index].reserveFactorLoading = false
            setMarkets(temp)
          }
      }
    }

    const editReserveFactor = (index: number, value: string) => {
      const temp = [...markets]
      temp[index].reserveFactorEdit = +value
      
      setMarkets(temp)
      
    }

    const openReserveFactor = (index: number) =>{
      const temp = [...markets]
      temp[index].reserveFactorEdit = temp[index].reserveFactor * 100
      temp[index].reserveFactorLoading = true
  
      setMarkets(temp)
      
    }

    const cancelReserveFactor = (index: number) => {
      const temp = [...markets]
      temp[index].reserveFactorLoading = false

      setMarkets(temp)
    }

    return(
            <Container fluid>
              <Row>
                 <Col className="col-padding">
                <h4>Markets</h4>
            <Table striped bordered hover variant="dark" size="sm" responsive>
                <thead>
                    <tr>
                        <th className="text-center align-middle">#</th>
                        <th className="text-center align-middle" colSpan={2}>Market</th>
                        <th className="text-center align-middle">Underlying</th>
                        <th className="text-center align-middle">Admin</th>
                        <th className="text-center align-middle">Supply</th>
                        <th className="text-center align-middle">Borrows</th>
                        <th className="text-center align-middle">Reserves</th>
                        <th className="text-center align-middle">Cash</th>
                        <th className="text-center align-middle">Collateral Factor</th>
                        <th className="text-center align-middle">Reserve Factor</th>
                        <th className="text-center align-middle">Supply Rate</th>
                        <th className="text-center align-middle">Borrow Rate</th>
                        <th className="text-center align-middle">Exchange Rate</th>
                        <th className="text-center align-middle">Interest Rate Model</th>
                        <th className="text-center align-middle">Mint</th>
                        <th className="text-center align-middle">Borrow</th>
                        <th className="text-center align-middle">Price</th>
                    </tr>
                </thead>
                {markets.length > 0 ? 
                    (<tbody>
                      {
                        markets.map((item, i) => (
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{item.underlying.logo ? 
                                <img className="rounded-circle" src={item.underlying.logo} alt=""/>
                            : ""}</td>
                        <td>
                            <div className="copy-td">
                            <a target="_blank" rel="noreferrer" href={`${linkAddress}${item.address}`}>{item.symbol}</a>
                            {
                                item.address ?
                                <OverlayTrigger placement="top-start" overlay={<Tooltip>{content}</Tooltip>}>
                                    <div>
                                        <MdContentCopy className="copy-btn" onMouseLeave={()=> setContent("Copy address to clipboard")} onClick={() => handleCopy(item.address)}/>
                                    </div>
                                </OverlayTrigger>
                                : ""
                            }
                            </div>
                            
                        </td>
                        <td>
                            <div className="copy-td">
                            <a target="_blank" rel="noreferrer" href={`${linkAddress}${item.underlying.address}`}>{item.underlying.symbol}</a>
                            {
                                item.underlying.address ?
                                <OverlayTrigger placement="top-start" overlay={<Tooltip>{content}</Tooltip>}>
                                    <div>
                                        <MdContentCopy className="copy-btn" onMouseLeave={()=> setContent("Copy address to clipboard")} onClick={() => handleCopy(item.underlying.address)}/>
                                    </div>
                                </OverlayTrigger>
                                : ""
                            }
                            </div>
                        </td>
                        <td>
                            <div className="copy-td">
                            <a target="_blank" rel="noreferrer" href={`${linkAddress}${item.admin}`}>{shortenAddress(item.admin)}</a>
                            {
                                item.admin ?
                                <OverlayTrigger placement="top-start" overlay={<Tooltip>{content}</Tooltip>}>
                                    <div>
                                        <MdContentCopy className="copy-btn" onMouseLeave={()=> setContent("Copy address to clipboard")} onClick={() => handleCopy(item.admin)}/>
                                    </div>
                                </OverlayTrigger>
                                : ""
                            }
                            </div>
                        </td>
                        <td className="text-right">{(item.totalSupply * item.exchangeRate).toFixed(4)}</td>
                        <td className="text-right">{item.borrows.toFixed(4)}</td>
                        <td className="text-right">{item.reserves.toFixed(4)}</td>
                        <td className="text-right">{item.cash.toFixed(4)}</td>
                        <td className="text-right">
                                <div>
                                    <div className={`cursor-pointer ${item.collateralFactorLoading ? "hidden" : ""}`} onClick={e => handleOpenCollateral(e, i)}>
                                        {item.collateralFactor * 100 + "%"}
                                    </div>
                                    <InputGroup  className={`${item.collateralFactorLoading ? "" : "hidden"}`}>
                                    <FormControl value={item.collateralFactorEdit} onFocus={handleFocus} onChange={e => editCollateral(i, e.target.value)}/>
                                        <InputGroup.Text className="cursor-pointer inputGroup-hover">
                                            <MdCheck size="20" className="text-success" onClick={()=> setCollateralFactor(i)}/>
                                        </InputGroup.Text>
                                        <InputGroup.Text className="cursor-pointer inputGroup-hover" >
                                            <MdCancel size="20" className="text-danger" onClick={()=> cancelCollateral(i)}/>
                                        </InputGroup.Text>
                                    </InputGroup> 
                                </div>
                        </td>
                        <td className="text-right">
                                <div>
                                    <div className={`cursor-pointer ${item.reserveFactorLoading ? "hidden" : ""}`} onClick={e => openReserveFactor(i)}>
                                        {item.reserveFactor * 100 + "%"}
                                    </div>
                                    <InputGroup  className={`${item.reserveFactorLoading ? "" : "hidden"}`}>
                                    <FormControl value={item.reserveFactorEdit} onFocus={handleFocus} onChange={e => editReserveFactor(i, e.target.value)}/>
                                        <InputGroup.Text className="cursor-pointer inputGroup-hover">
                                            <MdCheck size="20" className="text-success" onClick={()=> setReserveFactor(i)}/>
                                        </InputGroup.Text>
                                        <InputGroup.Text className="cursor-pointer inputGroup-hover" >
                                            <MdCancel size="20" className="text-danger" onClick={()=> cancelReserveFactor(i)}/>
                                        </InputGroup.Text>
                                    </InputGroup> 
                                </div>
                        </td>
                        <td className="text-right">{(item.supplyRate * 100).toFixed(2)}%</td>
                        <td className="text-right">{(item.borrowRate * 100).toFixed(2)}%</td>
                        <td className="text-right">{item.exchangeRate.toFixed(4)}</td>
                        <td>{item.interestRateModel}</td>
                        <td className="text-center">
                            {
                                !item.mintPaused ? 
                                <BsToggleOn className={`cursor-pointer text-success ${item.mintPausedLoading ? "hidden" : ""}`}
                                size={26} 
                                onClick={() => updateMintPaused(i)}/> 
                                : <BsToggleOff className={`cursor-pointer text-danger ${item.mintPausedLoading ? "hidden" : ""}`}
                                size={26}
                                onClick ={() => updateMintPaused(i)}/>
                            }
                                <Spinner animation="border" size="sm" hidden={!item.mintPausedLoading}/>
                                </td>
                        <td className="text-center">
                            {
                                !item.borrowPaused ? 
                                <BsToggleOn className={`cursor-pointer text-success ${item.borrowPausedLoading ? "hidden" : ""}`} 
                                size={26}
                                onClick={() => updateBorrowPaused(i)}/> 
                                : <BsToggleOff className={`cursor-pointer text-danger ${item.borrowPausedLoading ? "hidden" : ""}`} 
                                size={26}
                                onClick={() => updateBorrowPaused(i)}/>
                            }
                                <Spinner animation="border" size="sm" hidden={!item.borrowPausedLoading}/>
                                </td>
                        
                        <td className="text-right">${item.price.toFixed(4)}</td>
                    </tr>
                        ))}
                    </tbody>

                ) : 
                <tbody>
                  <tr>
                      <td colSpan={19}>
                        <Loading/>
                      </td>
                  </tr>
                  <tr>
                      <td colSpan={19}>
                        <Loading/>
                      </td>
                  </tr>
                </tbody>}
                  
            </Table>
            </Col>
            </Row>
            </Container>
        )
    }

export default MarketsView