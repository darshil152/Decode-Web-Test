import React from 'react'
import { Link, useNavigate } from "react-router-dom";
const logo = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Flogo.png?alt=media&token=01789094-d54f-4a62-b232-8429172a3dc9&_gl=1*1ddejsb*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTgxNDguMC4wLjA.'



export default function Loginheader() {
    const navigate = useNavigate();

    const mainpage = () => {
        navigate('/')
    }


    return (
        <nav className="navbar navbar-light ">
            <a className="navbar-brand"  >
                <img src={logo} style={{ width: 200 }} onClick={mainpage} />
            </a>
        </nav>
    )
}
