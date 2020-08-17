import React from "react";
import "./Error404.css";
import {NavLink} from "react-router-dom";


export default function Error404() {
    return <div className="error">
        <section className="error-container">
            <span>4</span>
            <span><span className="screen-reader-text">0</span></span>
            <span>4</span>
        </section>
        <p className="zoom-area">Seems like you are lost... Lets get you back home</p>
        <div className="link-container">
            <NavLink to="/" className="more-link">ACM MVSR Home</NavLink>
        </div>

    </div>
}