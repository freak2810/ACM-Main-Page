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
        <Header
            name="Innovision 2021"
            description="ACM MVSR is a subsidiary of Association for Computing Machinery (ACM), a worldwide learning society for computing. The chapter was founded on August 2, 2019."/>
        <header className="header">
            <h3>
                ACM MVSR
            </h3>
            <NavLink exact to="/home" title="ACM MVSR Student Chapter Home Page" className="homeLink">
                <FontAwesomeIcon size="lg" icon={faHome}/>
            </NavLink>
        </header>
        <img src={InnovisionLogo} alt="Innovision 2021" className="logo"/>
        <a href="https://forms.gle/S4EGkVvJigUkZXTX8" target="blank" className="link">Innovision: Code-a-thon @ 9th Feb (5 -6pm) </a>
        <div className="scrollAnimation">
            <MousePointer/>
        </div>
    </div>
}