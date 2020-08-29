import React from "react";
import "./Landing.css";
import RightSection from "components/landingPage/RightSection";
import Billboard from "components/billboard/Billboard";


const Landing = () => {
    return(
            <div className="grid-container">
                <RightSection />
                {/*<LeftSection />*/}
                <Billboard/>
            </div>
    );
}

export default Landing;
