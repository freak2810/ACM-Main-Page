import React from "react";
import "./About.css";

const AboutCard = (props) => {
    return (
        <div
            className="about-card"
            style={{
                position:"relative",
                right:  props.float === "right" ? "20px":"-20px",
                alignSelf: props.float === "right" ? "flex-end" : "flex-start",
                flexDirection: props.float === "right" ? "row-reverse" : "row",
            }}
        >
            <img alt="" src={props.imageURL}/>
            <div className="description">
                <h1>{props.name}</h1>
                <p> {props.info}</p>
            </div>
        </div>
    );
};

export default AboutCard;
