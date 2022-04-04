import { useState } from "react"
import { Col, Container, FormControl, InputGroup, OverlayTrigger, Row, Spinner, Table, Tooltip } from "react-bootstrap"
import {MdContentCopy, MdCheck, MdCancel} from "react-icons/md"
import {BsToggleOff, BsToggleOn} from "react-icons/bs"
import { useMarketContext } from "../../Types/marketContext"
import { useGlobalContext } from "../../Types/gloabalContext"
import { shortenAddress } from "../../helpers"
import { BigNumber, ethers } from "ethers"
import Loading from "../Loading/loading"

const GaugesView = () =>{
    const [content, setContent] = useState("Copy address to clipboard")
    const {signer, comptroller, gauges, setGauges} = useMarketContext()
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



    return(
            <Container fluid>
              <Row>
                 <Col className="col-padding">
                <h4>Gauges</h4>
            <Table striped bordered hover variant="dark" size="sm" responsive>
                <thead>
                    <tr>
                        <th className="text-center align-middle">#</th>
                        <th className="text-center align-middle">Gauge</th>
                        <th className="text-center align-middle">Total Staked</th>
                        <th className="text-center align-middle">Current Reward Balance</th>
                        <th className="text-center align-middle">Rewards for Current Epoch</th>
                        <th className="text-center align-middle">Rewards for Epoch 2</th>
                        <th className="text-center align-middle">Rewards for Epoch 3</th>
                        <th className="text-center align-middle">Rewards for Epoch 4</th>
                    </tr>
                </thead>
                {gauges ? 
                    (<tbody>
                      {
                        [...gauges].map((item, i) => (
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td className="text-center">
                             <div className="copy-td">
                                 <a target="_blank" rel="noreferrer" href={`${linkAddress}${item.address}`}>{ shortenAddress(item.address) }</a>
                                {
                                  item.address ?
                                  <OverlayTrigger placement="top-start" overlay={<Tooltip id="first">{content}</Tooltip>}>
                                      <div>
                                            <MdContentCopy className="copy-btn" onMouseLeave={()=> setContent("Copy address to clipboard")} onClick={() => handleCopy( item ? item.address: "")}/>
                                      </div>
                                  </OverlayTrigger>
                                     : ""
                                }
                             </div>
                        </td>
                        <td className="text-right">{(+item.totalStake.toString()).toFixed(4)}</td>
                        <td className="text-right">{(+item.currentRewardBalance.toString()).toFixed(4)}</td>
                        <td className="text-right">{(+item.epochCurrentRewards.toString()).toFixed(4)}</td>
                        <td className="text-right">{(+item.epoch2Rewards.toString()).toFixed(4)}</td> 
                        <td className="text-right">{(+item.epoch3Rewards.toString()).toFixed(4)}</td>
                        <td className="text-right">{(+item.epoch4Rewards.toString()).toFixed(4)}</td> 
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

export default GaugesView