import { Col, Row, Table } from "react-bootstrap"
import { useMarketContext } from "../../Types/marketContext"
import Loading from "../Loading/loading"
import { EpochsInfo } from "../../Types/data"
import { useChainsContext } from "../../Types/chainsContext"
import { getChainsEpochsInfo } from "../../Data/fetchChainData"

const EpochsView = () =>{

    const {epochs} = useMarketContext()
    const {chainEpochs} = useChainsContext()
    let eData : any = {}
    if (epochs){
        eData = epochs
    }
    else if (chainEpochs){
        eData = chainEpochs
    }
    return(
        { eData ? 
        [...eData].map((network : EpochsInfo, i) => (
        
        <Row> 
                <Col xl="7" xs="12" >
                <h4>Epochs & Rewards</h4>
            <Table striped bordered hover variant="dark" size="sm" responsive>
                <thead>
                    <tr>
                        <th className="text-center align-middle">Current Epoch #</th>
                        <th className="text-center align-middle">Current Epoch Rewards</th>
                        <th className="text-center align-middle">Epoch + 1 Rewards</th>
                        <th className="text-center align-middle">Epoch + 2 Rewards</th>
                        <th className="text-center align-middle">Epoch + 3 Rewards</th>
                    </tr>
                </thead>
                 <tbody>
                     { network ? (
                         <tr key={10000}>
                         <td className="text-center">{network.currentEpoch} </td>
                         <td className="text-center">{(network.epoch0Rewards/(10 ** 18)).toFixed(4)} </td>
                         <td className="text-center">{(network.epoch1Rewards/(10 ** 18)).toFixed(4)} </td>
                         <td className="text-center">{(network.epoch2Rewards/(10 ** 18)).toFixed(4)} </td>
                         <td className="text-center">{(network.epoch3Rewards/(10 ** 18)).toFixed(4)} </td>
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
            
        ))})}

export default EpochsView