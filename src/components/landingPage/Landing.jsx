import React from "react";
import "./Landing.css";
import LeftSection from "./LeftSection"
import RightSection from "./RightSection"
import Billboard from "../billboard/Billboard";


const Landing = () => {
    return(
            <div className="grid-container">
                <RightSection />
                <Billboard/>
            </div>
    );
}

export default Landing;
