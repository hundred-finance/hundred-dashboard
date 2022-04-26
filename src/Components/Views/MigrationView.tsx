import { Col, Row, Table } from "react-bootstrap"
import Loading from "../Loading/loading"
import { useChainsContext } from "../../Types/chainsContext"

const MigrationView = () =>{

    const {migrationInfo} = useChainsContext()

    return(
        
        <Row> 
                <Col xl="7" xs="12" >
                <h4>Migration Data</h4>
            <Table striped bordered hover variant="dark" size="sm" responsive>
                <thead>
                    <tr>
                        <th className="text-center align-middle">HND Migrating</th>
                        <th className="text-center align-middle">HND Vesting</th>
                        <th className="text-center align-middle">HND Piou Migrating</th>
                        <th className="text-center align-middle">HND Piou Vesting</th>
                        <th className="text-center align-middle">Total</th>
                    </tr>
                </thead>
                     { migrationInfo ? 
                     <tbody>
                         <tr>
                             <td className="text-center">{(migrationInfo.hndMigrating).toFixed(4)} </td>
                             <td className="text-center">{(migrationInfo.hndVesting).toFixed(4)} </td>
                             <td className="text-center">{(migrationInfo.hndPiouMigrating).toFixed(4)} </td>
                             <td className="text-center">{(migrationInfo.hndPiouVesting).toFixed(4)} </td>
                             <td className="text-center">{(migrationInfo.total).toFixed(4)} </td>
                             </tr>
                 </tbody>
                 : <tbody>
                     <tr>
                        <td colSpan={3}>
                            <Loading/>
                        </td>
                    </tr>
                   </tbody>}
                  
            </Table>
            </Col>
            </Row>
            
        )             
}

export default MigrationView