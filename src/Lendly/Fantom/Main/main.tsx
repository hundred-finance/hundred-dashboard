import React from "react"
import { NavLink } from "react-router-dom"
import { HuLogo } from "../../../assets/huIcons/huIcons"
import logos from "../../../logos"
import "./main.css"

const Main = () => {
    return(
        <div className="main">
            <NavLink to="hnd" className="main-box">
                <HuLogo size="150px"/>
            </NavLink>
            <NavLink to="weve" className="main-box">
                <img style={{width: "200px", height: "200px"}} src={logos.veDAO} alt=""/>
            </NavLink>
        </div>
    )
}

export default Main