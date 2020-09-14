import React from "react";
import Poster from "assets/Billboard/poster.png";
import { NavLink } from "react-router-dom";
import "components/billboard/Billboard.css";

export default function Billboard() {
  return (
    <div className="billboard">
      <a
        href="https://forms.gle/hMcshmosZwMRit956"
        target="blank"
        className="posterLink"
        title="Reinvent the development cycle by adopting Google Cloud"
      >
        <img
          src={Poster}
          className="poster"
          alt="Reinvent the development cycle by adopting Google Cloud"
        />
      </a>
      <div className="links">
        <a href="https://forms.gle/hMcshmosZwMRit956" title="ACM-MVSR Reinventing the Development Cycle by Adopting Google CLoud Registration Link" target="blank">
          Register
        </a>
        <NavLink title="Reinvent the development cycle by adopting Google Cloud" to={`/events/reinvent-dev-cycle-google-cloud`}>
          More Info
        </NavLink>
      </div>
    </div>
  );
}
