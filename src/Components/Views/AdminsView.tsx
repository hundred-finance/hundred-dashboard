import React, {  useState } from "react"
import { Col, OverlayTrigger, Table, Tooltip} from "react-bootstrap"
import {MdContentCopy} from "react-icons/md"
import { shortenAddress } from "../../helpers"
import { useGlobalContext } from "../../Types/gloabalContext"
import { useMarketContext } from "../../Types/marketContext"
import Loading from "../Loading/loading"

const AdminsView = () => {
    const {admins} = useMarketContext()
    const { network } = useGlobalContext()
    const [content, setContent] = useState<string>("Copy address to clipboard")
  
    const linkAddress = network ? network.safeAddress ? network.safeAddress : network.linkAddress : ""

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

     return(
                 <Col xl="3" lg="4" md="6">
                 <h4>Admins</h4>
             <Table striped bordered hover variant="dark" size="sm" responsive>
                 <thead>
                     <tr>
                     <th className="text-left align-middle">#</th>
                        <th className="text-left align-middle">Contract</th>
                        <th className="text-left align-middle">Address</th>
                     </tr>
                 </thead>
                 {admins ? <tbody>
                     {Object.entries({...admins}).map((o, index) => {
                         return <tr key={1001+index}>
                             <td>
                                 {index + 1}
                             </td>
                             <td className="text-left">
                                {o[0]}
                            </td>
                            <td className="text-left">
                                <div className="copy-td">
                                    <a target="_blank" rel="noreferrer" href={`${linkAddress}${o[1]}`}>{ shortenAddress(o[1]) }</a>{" "}
                                    {
                                        o[1] ? 
                                        <OverlayTrigger placement="top-start" overlay={<Tooltip>{content}</Tooltip>}>
                                            <div>
                                                <MdContentCopy className="copy-btn" onMouseLeave={()=> setContent("Copy address to clipboard")} onClick={() => handleCopy(o[1])}/>
                                            </div>
                                        </OverlayTrigger>
                                        : null
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

     )
}

export default AdminsView
