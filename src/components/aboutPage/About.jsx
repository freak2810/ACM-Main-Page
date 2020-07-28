import React from "react";
import "./About.css";
import { ABOUT_DATA } from "./About_Data";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className="about">
      <div className="main">
        <h1>ABOUT US</h1>
      </div>
      <div className="about-cards">
        {ABOUT_DATA.map((eachObject, index) => (
          <AboutCard key={index} {...eachObject} />
        ))}
      </div>
    </div>
  );
};

export default About;
