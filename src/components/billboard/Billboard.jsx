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
        <a href="https://organize.mlh.io/participants/events/4573-mvsr-acm-hacktober-fest" title="MVSR ACM Hacktober Fest Registration Link" target="blank">
          Register
        </a>
        <NavLink title="MVSR ACM Hacktober Fest" to={`/events/mvsr-acm-hactober-2020`}>
          More Info
        </NavLink>
      </div>
    </div>
  );
}
