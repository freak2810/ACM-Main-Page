import React from "react";
import "components/landingPage/Landing.css";
import RightSection from "components/landingPage/RightSection";
import LeftSection from "components/landingPage/LeftSection";


const Landing = () => {
    return(
            <div className="grid-container">
                <RightSection />
                <LeftSection />
                {/*<Billboard/>*/}
            </div>
    );
}

export default Landing;
