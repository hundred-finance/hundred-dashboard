import { Col, Row, Table } from "react-bootstrap"
import Loading from "../Loading/loading"
import { BackstopsInfo } from "../../Types/data"
import { useChainsContext } from "../../Types/chainsContext"

const BackstopChainsView = () =>{

    const {backstopInfo} = useChainsContext()
    return(
        <Row> 
                <Col xl="7" xs="12" >
                <h4>Backstop Data</h4>
            <Table striped bordered hover variant="dark" size="sm" responsive>
                <thead>
                    <tr>
                        <th className="text-center align-middle">Network</th>
                        <th className="text-center align-middle">Current Epoch #</th>
                        <th className="text-center align-middle">Current Epoch Rewards</th>
                        <th className="text-center align-middle">Epoch + 1 Rewards</th>
                        <th className="text-center align-middle">Epoch + 2 Rewards</th>
                        <th className="text-center align-middle">Epoch + 3 Rewards</th>
                        <th className="text-center align-middle">Treasury Balance</th>
                    </tr>
                </thead>
                 <tbody>
                     { backstopInfo ? 
                        backstopInfo.map((network : BackstopsInfo, index) => (
                     network ? (
                         <tr key={index}>
                         <td className="text-center">{network.network?.capitalize()} </td>
                         <td className="text-center">{network.currentEpoch} </td>
                         <td className="text-center">{Math.round(network.epoch0Rewards)} </td>
                         <td className="text-center">{Math.round(network.epoch1Rewards)} </td>
                         <td className="text-center">{Math.round(network.epoch2Rewards)} </td>
                         <td className="text-center">{Math.round(network.epoch3Rewards)} </td>
                         <td className="text-center">{Math.round(network.treasuryBalance)} </td> 
                      </tr>
                     ): (<tr>
                         <td colSpan={10}>
                            <Loading/>
                         </td>
                        </tr>
                        )
                         )):
                         <tr>
                         <td colSpan={10}>
                            <Loading/>
                         </td>
                        </tr> }
                 </tbody>
                  
            </Table>
            </Col>
            </Row>
            
        )             
}

export default BackstopChainsView