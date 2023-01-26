import { useState } from "react"
import { Table,Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap"
import { MdContentCopy } from "react-icons/md";
import { shortenAddress } from "../../helpers";
import { useGlobalContext } from "../../Types/gloabalContext";
import { useMarketContext } from "../../Types/marketContext";
import Loading from "../Loading/loading";

const InterestRateModelsView = () =>{
    const [content, setContent] = useState("Copy address to clipboard")
    const {interestRateModels } = useMarketContext()
    const {network} = useGlobalContext()

    const linkAddress = network ? network.linkAddress : ""

    const handleCopy  = (text: string) : void => {
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
                <Row>
                <Col sm="12" md="12" lg="10" xl="9" xxl="8" className="col-padding">
                <h4>Interest Rate Models</h4>
                <Table striped bordered hover variant="dark" size="sm" responsive>
                    <thead>
                        <tr>
                            <th className="text-center align-middle">#</th>
                            <th className="text-center align-middle">Name</th>
                            <th className="text-center align-middle">Owner</th>
                            <th className="text-center align-middle">Blocks Per Year</th>
                            <th className="text-center align-middle">Base Rate Per Block</th>
                            <th className="text-center align-middle">Base Rate Per Year</th>
                            <th className="text-center align-middle">Multiplier Per Block</th>
                            <th className="text-center align-middle">Multiplier Per Year</th>
                            <th className="text-center align-middle">Kink</th>
                            <th className="text-center align-middle">Jump Multiplier Per Block</th>
                            <th className="text-center align-middle">Jump Multiplier Per Year</th>
                        </tr>
                    </thead>
                    <tbody>
                    {interestRateModels ? [...interestRateModels].map((item, i) => (
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>
                                <div className="copy-td">
                                    <a target="_blank" rel="noreferrer" href={`${linkAddress}${item.address}`}>{item.name}</a>{" "}
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
                                    <a target="_blank" rel="noreferrer" href={`${linkAddress}${item.owner}`}>{shortenAddress(item.owner)}</a>{" "}
                                    {
                                        item.owner ?
                                        <OverlayTrigger placement="top-start" overlay={<Tooltip>{content}</Tooltip>}>
                                            <div>
                                                <MdContentCopy className="copy-btn" onMouseLeave={()=> setContent("Copy address to clipboard")} onClick={() => handleCopy(item.owner)}/>
                                            </div>
                                        </OverlayTrigger>
                                        : ""
                                    }
                                </div>
                            </td>
                            <td className="text-right">{item.secondsPerYear}</td>
                            <td className="text-right">{item.baseRatePerSecond}</td>
                            <td className="text-right">{(item.baseRatePerYear * 100).toFixed(2)}%</td>
                            <td className="text-right">{item.multiplierPerSecond}</td>
                            <td className="text-right">{(item.multiplierPerYear * 100).toFixed(2)}%</td>
                            <td className="text-right"> {item.kink * 100}%</td>
                            <td className="text-right">{item.jumpMultiplierPerSecond}</td>
                            <td className="text-right">{(item.jumpMultiplierPerYear * 100).toFixed(2)}%</td>
                        </tr>
                    )) : <tr>
                            <td colSpan={11}>
                                <Loading/>
                            </td>
                        </tr>}
                    </tbody>
                </Table>
                </Col>
                </Row>
        )
    }

export default InterestRateModelsView