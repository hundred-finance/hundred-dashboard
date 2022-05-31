import { Col, Row, Table } from "react-bootstrap"
import Loading from "../Loading/loading"
import { VotingInfo } from "../../Types/data"
import { useChainsContext } from "../../Types/chainsContext"

const VotingView = () =>{

    const {votingInfo} = useChainsContext()

    return(
        
        <Row> 
                <Col xl="7" xs="12" >
                <h4>Voting Data</h4>
            <Table striped bordered hover variant="dark" size="sm" responsive>
                <thead>
                    <tr>
                        <th className="text-center align-middle">Network</th>
                        <th className="text-center align-middle">Locked HND</th>
                        <th className="text-center align-middle">veHND</th>
                        <th className="text-center align-middle">Average Lock Time in Years</th>
                        <th className="text-center align-middle">mveHND</th>
                        <th className="text-center align-middle">Circulating</th>
                    </tr>
                </thead>
                 <tbody>
                     { votingInfo ? 
                        votingInfo.map((network : VotingInfo, index) => (
                     network ? (
                         <tr key={index}>
                         <td className="text-center">{network.network?.capitalize()} </td>
                         <td className="text-center">{(network.lockedHnd).toFixed(4)} </td>
                         <td className="text-center">{(network.veHnd).toFixed(4)} </td>
                         <td className="text-center">{(network.avgLockTime).toFixed(2)} </td>
                         <td className="text-center">{(network.mveHnd).toFixed(4)} </td>
                         <td className="text-center">{(network.circulating).toFixed(4)} </td>
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

export default VotingView