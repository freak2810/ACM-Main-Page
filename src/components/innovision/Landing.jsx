import React from 'react';
import "components/innovision/Landing.css"
import InnovisionLogo from "assets/Billboard/innovisionWhite.svg"
import Header from "../header/Header";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import MousePointer from "../landingPage/MousePointer";

export default function Landing() {
    return <div className="landing">
        <Header/>
        <header className="header">
            <h3>
                ACM MVSR
            </h3>
            <NavLink exact to="/home" title="ACM MVSR Student Chapter Home Page" className="homeLink">
                <FontAwesomeIcon size="lg" icon={faHome}/>
            </NavLink>
        </header>
        <img src={InnovisionLogo} alt="Innovision 2021" className="logo"/>
        <a href="https://meet.google.com/isi-kdem-tpa" target="blank" className="link">Innovision Inaugural : 7th Feb @ 11 am</a>
        <div className="scrollAnimation">
            <MousePointer/>
        </div>
    </div>
}