import React from "react";
import Logo from "assets/mvsr-acm.png";
import "components/landingPage/RightSection.css";


const RightSection = () => {
    return (
        <div className="rightSection">
            <img src={Logo} className="logo" alt="MVSR ACM Logo"/>
            <div className="content">
                <h2>MVSR ACM Student Chapter</h2>
                <hr/>
                <q>We see a world where computing helps solve tomorrow's problems</q>
            </div>
        </div>
    );
}

export default RightSection
