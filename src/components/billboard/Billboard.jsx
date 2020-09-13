import React from "react";
import Poster from "assets/Billboard/poster.png";
import { NavLink } from "react-router-dom";
import "components/billboard/Billboard.css";

export default function Billboard() {
  return (
    <div className="billboard">
      <a
        href="https://acmmvsr.typeform.com/to/VIfH3nW1"
        target="blank"
        className="posterLink"
      >
        <img
          src={Poster}
          className="poster"
          alt="ACM-MVSR Google Developers Study Jam"
        />
      </a>
      <div className="links">
        <a href="https://acmmvsr.typeform.com/to/VIfH3nW1" title="ACM-MVSR Google Developers Study Jam Registration Link" target="blank">
          Register
        </a>
        <NavLink to={`/events/google-dev-study-jam`}>
          More Info
        </NavLink>
      </div>
    </div>
  );
}
