import React from "react";
import "components/aboutPage/About.css";
import { ABOUT_DATA } from "components/aboutPage/About_Data";
import AboutCard from "components/aboutPage/AboutCard";
import Header from "components/header/Header";

const About = () => {
  return (
    <div className="about">
        <Header name="About Us"/>
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
