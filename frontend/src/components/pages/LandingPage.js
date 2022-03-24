import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/bg.png'

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">gura umuriro kuri e-bill</h1>
            <p className="main-para text-center">join us now and light home</p>
            <div className="buttons text-center">
                <Link to="/gura">
                    <button className="primary-button">gura</button>
                </Link>
                <Link to="/reba">
                    <button className="primary-button" id="reg_btn"><span>reba</span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}