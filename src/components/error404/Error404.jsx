import React from "react";
import "components/error404/Error404.css";
import {NavLink} from "react-router-dom";
import Header from "components/header/Header";


export default function Error404() {
    return <div className="error">
        <Header name="Error 404"/>
        <section className="error-container">
            <span>4</span>
            <span><span className="screen-reader-text">0</span></span>
            <span>4</span>
        </section>
        <p className="zoom-area">Seems like you are lost... Lets get you back home</p>
        <div className="link-container">
            <NavLink to="/" title="Home" className="more-link">ACM MVSR Home</NavLink>
        </div>
    </div>
}