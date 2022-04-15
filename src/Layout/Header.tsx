import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import {HuLogo} from "../assets/huIcons/huIcons"
import Connect from "../Components/Connect/connect"
import NetworkButton from "../Components/Networks/network"
import { useGlobalContext } from "../Types/gloabalContext"

// type Props = {
//     network: Network,
//     logo: string
// }

export const Header = ()=>{
    const { network} = useGlobalContext()
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container fluid>
                <NavLink className={"nav-link"} to="/">
                    <Navbar.Brand>
                    <HuLogo size={"60px"} darkMode={true}/>
                        <span style={{paddingLeft: ".5rem", color: "#fff"}}>Dashboard</span>
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {network && network.chainId === 250 && network.lendly ? 
                        <Nav className="me-auto">
                            <NavLink className={"nav-link"} to="/gauges"> Gauges </NavLink>
                            <NavLink className={"nav-link"} to="/fantom/lendly"> Lendly </NavLink>
                        </Nav>
                    : <Nav className="me-auto">
                        <NavLink className={"nav-link"} to="/gauges"> Gauges </NavLink>
                      </Nav>}
                    <Nav className="nav-buttons">
                        <NetworkButton/>
                        <Connect/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export const FantomLendlyHeader = ()=>{
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container fluid>
                <NavLink className={"nav-link"} to="/fantom/lendly">
                    <Navbar.Brand>
                    <HuLogo size={"60px"} darkMode={true}/>
                        <span style={{paddingLeft: ".5rem", color: "#fff"}}>Lendly Dashboard</span>
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className={"nav-link"} to="hnd"> HND </NavLink>
                        <NavLink className={"nav-link"} to="weve">WEVE</NavLink>
                    </Nav>
                    <Nav className="nav-buttons">
                        <NavLink style={{padding: "0 1rem"}} className={"nav-link"} to="/">Hundred Dashboard</NavLink>
                        <NetworkButton/>
                        <Connect/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export const ChainsHeader = ()=>{
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container fluid>
                <NavLink className={"nav-link"} to="/">
                    <Navbar.Brand>
                    <HuLogo size={"60px"} darkMode={true}/>
                        <span style={{paddingLeft: ".5rem", color: "#fff"}}>Dashboard</span>
                    </Navbar.Brand>
                </NavLink>
            </Container>
        </Navbar>
    )
}

export default Header