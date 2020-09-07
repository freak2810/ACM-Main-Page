import React from "react";
import "components/landingPage/LeftSection.css";
import MousePointer from "components/landingPage/MousePointer"


const LeftSection = () => {
    return (
        <main className="leftSection">
            <div className="headings">
                <h1>MVSR Engineering College - Hyderabad</h1>
                <h2>Association for Computing Machinery</h2>
                <h3>
                    <q>Helping professionals be creative and at their best</q>
                </h3>
            </div>
            <MousePointer/>
        </main>
    );
}

export default LeftSection;
