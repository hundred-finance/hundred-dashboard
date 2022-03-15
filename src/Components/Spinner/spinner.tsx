import React, { useEffect } from "react"
import { HuLogoSpinner } from "../../assets/huIcons/huIcons"
import { useGlobalContext } from "../../Types/gloabalContext"

const Spinner = () => {
    const {openSpinner} = useGlobalContext()

    const style: React.CSSProperties = {
        position: 'fixed',
        minHeight: `${openSpinner ? '100%' : '0'}`,
        height: `${openSpinner ? '100%' : '0'}`,
        width: `${openSpinner ? '100%' : '0'}`,
        top: `${openSpinner ? '0' : '50%'}`,
        left: `${openSpinner ? '0' : '50%'}`,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        overflow: 'hidden',
        zIndex: '9999'
    }

    const loader: React.CSSProperties = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: `${openSpinner ? 'block' : 'none'}`,
    }

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        if(openSpinner){
            document.getElementsByTagName("body")[0].style.overflow = 'hidden'
        }
        else{
            document.getElementsByTagName("body")[0].style.overflow = 'auto'
        }
    }, [openSpinner]);

    return(
        openSpinner ? (
        <div style={style} >
            <HuLogoSpinner style={loader} width="80px" height="80px" color='#f0f0f0'/>
        </div>) : null
    )
}

export default Spinner