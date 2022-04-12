import { useState } from "react"
import { Col, Row, Table } from "react-bootstrap"
import { useMarketContext } from "../../Types/marketContext"
import { useGlobalContext } from "../../Types/gloabalContext"
import Loading from "../Loading/loading"

const EpochsView = () =>{
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
        <Row> 
                 <Col className="col-padding" xl="4" xs="12" >
                <h4>Epoch & Rewards</h4>
            <Table striped bordered hover variant="dark" size="sm" responsive>
                <thead>
                    <tr>
                        <th className="text-center align-middle">#</th>
                        <th className="text-center align-middle" colSpan={2}>Current Epoch & Reward</th>
                        <th className="text-center align-middle">Epoch + 1 Rewards</th>
                        <th className="text-center align-middle">Epoch + 2 Rewards</th>
                        <th className="text-center align-middle">Epoch + 3 Rewards</th>
                    </tr>
                </thead>
                {/* {gauges ? 
                    (<tbody>
                    let epochs = gauges.pop()

                    <tr key={1}>
                        <td className="text-right">{"Epoch " + (BigNumber.from(epochs.currentEpoch, 18).toRound(0,true,true))}</td>                        
                        <td className="text-right">{(BigNumber.from(epochs.epoch0Rewards, 18).toRound(4,true,true))}</td>                        
                        <td className="text-right">{(BigNumber.from(epochs.epoch1Rewards, 18).toRound(4,true,true))}</td>                        
                        <td className="text-right">{(BigNumber.from(epochs.epoch2Rewards, 18).toRound(4,true,true))}</td>                        
                        <td className="text-right">{(BigNumber.from(epochs.epoch3Rewards, 18).toRound(4,true,true))}</td>                    

                    </tr>
                        ))}
                    </tbody>

                ) */}
                 : 
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
                </tbody>
                  
            </Table>
            </Col>
            </Row>
            
        )
    }

export default EpochsView