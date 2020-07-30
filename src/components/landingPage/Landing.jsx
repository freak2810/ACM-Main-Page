import React from "react";
import "./Landing.css";
import LeftSection from "./LeftSection"
import RightSection from "./RightSection"


const Landing = () => {
    return(
            <div className="grid-container">
                <RightSection />
                <LeftSection />
            </div>
    );
}

export default Landing;
