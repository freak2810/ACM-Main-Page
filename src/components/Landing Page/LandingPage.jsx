import React from "react";
import "./Landing.css";
import Nav from "./Nav.jsx"
import Mousey from "./Mousey.jsx"
import LeftSection from "./LeftSection.jsx"
import RightSection from "./RightSection.jsx"


const LandingPage = () => {
    return(
        <body>
            <div class="grid-container">
                <Nav />
                <LeftSection />
                <RightSection />
                <Mousey />
            </div>
        </body>

    );
}

export default LandingPage;
