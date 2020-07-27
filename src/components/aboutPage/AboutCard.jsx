import React from "react"
import "./About.css"

const AboutCard = (props) => {
    console.log(props)
    return (
        <div className="about-card"
             style={{
                 float: props.float,
                 flexDirection: props.float === 'right' ? "row-reverse" : "row"
             }}
        >
            <img alt="" src={props.imageURL}/>
            <div className="description">
                <h1>{props.name}</h1>
                <p> {props.info}</p>
            </div>
        </div>
    )
}

export default AboutCard