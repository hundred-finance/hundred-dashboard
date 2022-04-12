import { Col, Row, Table } from "react-bootstrap"
import { useMarketContext } from "../../Types/marketContext"
import Loading from "../Loading/loading"

const EpochsView = () =>{
    const {epochs} = useMarketContext()

    return(
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
                     { epochs ? (
                         <tr key={10000}>
                         <td className="text-center">{epochs.currentEpoch} </td>
                         <td className="text-center">{(+epochs.epoch0Rewards.toString()/(10 ** 18)).toFixed(4)} </td>
                         <td className="text-center">{(+epochs.epoch1Rewards.toString()/(10 ** 18)).toFixed(4)} </td>
                         <td className="text-center">{(+epochs.epoch2Rewards.toString()/(10 ** 18)).toFixed(4)} </td>
                         <td className="text-center">{(+epochs.epoch3Rewards.toString()/(10 ** 18)).toFixed(4)} </td>
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

export default EpochsView