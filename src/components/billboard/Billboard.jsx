import React from "react";
import Poster from "../../assets/Billboard/poster.png";
import {NavLink} from "react-router-dom";
import "./Billboard.css";

export default function Billboard() {
    return <div className="billboard">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSf-nC8f9q0uOD4cis_E9qvtD6VHG-FSoHYEjYM26CqdsUzIsQ/viewform" target="blank" className="posterLink">
            <img src={Poster} className="poster" alt="International Workshop on Deep Learning"/>
        </a>
        <div className="links">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf-nC8f9q0uOD4cis_E9qvtD6VHG-FSoHYEjYM26CqdsUzIsQ/viewform" target="blank">Register</a>
            <NavLink to={`/events/international-deep-learning-workshop`}>More Info</NavLink>
        </div>
    </div>
}