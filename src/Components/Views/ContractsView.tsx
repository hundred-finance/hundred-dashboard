import React, {  useState } from "react"
import { Col, OverlayTrigger, Row, Table, Tooltip} from "react-bootstrap"
import {MdContentCopy} from "react-icons/md"
import { shortenAddress } from "../../helpers"
import { useGlobalContext } from "../../Types/gloabalContext"
import { useMarketContext } from "../../Types/marketContext"
import Loading from "../Loading/loading"

const ContractsView = () => {
    const {contracts, admins} = useMarketContext()
    const { network } = useGlobalContext()
    const [content, setContent] = useState<string>("Copy address to clipboard")
  
    const linkAddress = network ? network.linkAddress : ""

    function handleCopy (text: string | undefined) {
        if (text){
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
    }

    // if(contracts && contracts.contractsV2 && Object.entries({...contracts.contractsV2}).filter(c => c[1].address !== undefined).length === 0){
    //     return <></>
    // }

     return(
             <Row>
                 <Col xl="4" lg="4" md="6">
                 <h4>Contracts Version 2</h4>
             <Table striped bordered hover variant="dark" size="sm" responsive>
                 <thead>
                     <tr>
                     <th className="text-left align-middle">#</th>
                        <th className="text-left align-middle">Contract</th>
                        <th className="text-left align-middle">Address</th>
                        <th className="text-left align-middle">Admin</th>
                     </tr>
                 </thead>
                 {contracts && contracts?.contractsV2 && admins ? 
                    <tbody>
                     {Object.entries({...contracts?.contractsV2}).map((c, index) => {
                         return <tr key={1001+index}>
                             <td>
                                 {index + 1}
                             </td>
                             <td className="text-left">
                                {c[0]}
                            </td>
                            <td className="text-left">
                                <div className="copy-td">
                                    <a target="_blank" rel="noreferrer" href={`${linkAddress}${c[1].address}`}>{ shortenAddress(c[1].address ? c[1].address : "") }</a>{" "}
                                    {
                                        c[1].address ? 
                                        <OverlayTrigger placement="top-start" overlay={<Tooltip>{content}</Tooltip>}>
                                            <div>
                                                <MdContentCopy className="copy-btn" onMouseLeave={()=> setContent("Copy address to clipboard")} onClick={() => handleCopy(c[1].address ? c[1].address : "")}/>
                                            </div>
                                        </OverlayTrigger>
                                        : null
                                    }
                                </div>
                            </td>
                            <td>
                                <div className="copy-td">
                                <a target="_blank" rel="noreferrer" href={`${linkAddress}${c[1].admin}`}>{shortenAddress(c[1].admin ? c[1].admin : "")}</a>
                                {
                                    c[1].admin ?
                                    <OverlayTrigger placement="top-start" overlay={<Tooltip>{content}</Tooltip>}>
                                        <div>
                                            <MdContentCopy className="copy-btn" onMouseLeave={()=> setContent("Copy address to clipboard")} onClick={() => handleCopy(c[1].admin ? c[1].admin : "")}/>
                                        </div>
                                    </OverlayTrigger>
                                    : ""
                                }
                                </div>
                            </td>
                         </tr>
                     })}
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

export default ContractsView
