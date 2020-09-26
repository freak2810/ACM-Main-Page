import React from "react";
import Poster from "assets/Billboard/poster.png";
import { NavLink } from "react-router-dom";
import "components/billboard/Billboard.css";

export default function Billboard() {
  return (
    <div className="billboard">
      <a
        href="https://organize.mlh.io/participants/events/4573-mvsr-acm-hacktober-fest"
        target="blank"
        className="posterLink"
        title="MVSR ACM Hacktober Fest Registration Link"
      >
        <img
          src={Poster}
          className="poster"
          alt="MVSR ACM Hacktober Fest"
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
