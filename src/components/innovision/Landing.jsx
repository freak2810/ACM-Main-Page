import React from 'react';
import "components/innovision/Landing.css"
import InnovisionLogo from "assets/Billboard/innovisionWhite.png"
import Header from "../header/Header";

export default function Landing() {
    return <div className="landing">
        <Header/>
        <img src={InnovisionLogo} className="logo"/>
    </div>
}