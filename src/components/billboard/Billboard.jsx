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
                    alt="Innovision 2021"
                />
            </NavLink>
            <div className="links">
                <a href="https://forms.gle/S4EGkVvJigUkZXTX8"
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
