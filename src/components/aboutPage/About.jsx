import React from "react"
import "./About.css"
import {ABOUT_DATA} from "./About_Data";
import AboutCard from "./AboutCard";

const About = () => {
    return (
        <div className="about">
            <div className="main">
                <h1>ABOUT US</h1>
            </div>
            <ul>
                {ABOUT_DATA.map((eachObject,index) =>
                    <li key={index}>
                        <AboutCard {...eachObject}/>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default About