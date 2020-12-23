import React from "react";
import Poster from "assets/Billboard/poster.png";
import { NavLink } from "react-router-dom";
import "components/billboard/Billboard.css";

export default function Billboard() {
  return (
    <div className="billboard">
      <a
        href="https://forms.gle/Ws5gYcYZeh9mYwPg9"
        target="blank"
        className="posterLink"
        title="Hands-on Session on Basics of C Programming Registration Link"
      >
        <img
          src={Poster}
          className="poster"
          alt="Hands-on Session on Basics of C Programming"
        />
      </a>
      <div className="links">
        <a href="https://forms.gle/Ws5gYcYZeh9mYwPg9" title="Hands-on Session on Basics of C Programming Registration Link" target="blank">
          Register
        </a>
        <NavLink title="Hands-on Session on Basics of C Programming" to={`/events/c-programming-basics`}>
          More Info
        </NavLink>
      </div>
    </div>
  );
}
