import { useState } from "react"
import { Col, OverlayTrigger, Table, Tooltip } from "react-bootstrap"
import {MdContentCopy} from "react-icons/md"
import { useMarketContext } from "../../Types/marketContext"
import { useGlobalContext } from "../../Types/gloabalContext"
import { shortenAddress } from "../../helpers"
import Loading from "../Loading/loading"

const BackstopView = () =>{
    const [content, setContent] = useState("Copy address to clipboard")
    const {backstops} = useMarketContext()
    const {network} = useGlobalContext()


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
                 <Col xl="4" xs="8" >
                <h4>Backstop Gauges</h4>
            <Table striped bordered hover variant="dark" size="sm" responsive>
                <thead>
                    <tr>
                        <th className="text-center align-middle">#</th>
                        <th className="text-center align-middle" colSpan={2}>Gauge</th>
                        <th className="text-center align-middle">Total bhToken Staked</th>
                        <th className="text-center align-middle">Admin</th>
                    </tr>
                </thead>
                {backstops ? 
                    (<tbody>
                      {
                        [...backstops].map((item, i) => (
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{item.underlying.logo ? 
                                <img className="rounded-circle" src={item.underlying.logo} alt=""/>
                            : ""}</td>
                        <td>
                            <div className="copy-td">
                            <a target="_blank" rel="noreferrer" href={`${linkAddress}${item.address}`}>{"bh" + item.underlying.symbol}</a>
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
                        <td className="text-right">{(+item.backstopTotalSupply.toString()/(10 ** +item.decimals.toString())).toFixed(4)}</td> 
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
        )
    }

export default BackstopView