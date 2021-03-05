import React from "react";
import "components/landingPage/Landing.css";
import RightSection from "components/landingPage/RightSection";
import LeftSection from "components/landingPage/LeftSection";
import Billboard from "components/billboard/Billboard";


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
