import React from "react";
import Poster from "assets/Billboard/innovisionWhite.svg";
import {NavLink} from "react-router-dom";
import "components/billboard/Billboard.css";

export default function Billboard() {
    return (
        <div className="billboard">
            <NavLink
                to={`/innovision`}
                // target="blank"
                className="posterLink"
                title="Innovision 2021"
            >
                <img
                    src={Poster}
                    className="poster"
                    alt="Hands-on Session on Basics of C Programming"
                />
            </NavLink>
            <div className="links">
                <a href="https://forms.gle/Ws5gYcYZeh9mYwPg9"
                   title="Innovision 2021" target="blank">
                    Register
                </a>
                <NavLink title="Innovision 2021"  to={`/innovision`}>
                    More Info
                </NavLink>
            </div>
        </div>
    );
}
