import React from "react"
import "./About.css"

const AboutCard = (props) => {
    console.log(props)
    return (
        <div className="content-card"
        style={{float:props.float}}>
            <img src={props.content.imgUrl} />
            <div className="description">
                <h1>{props.content.name}</h1>
                <h1> {props.content.Info}</h1>
              
            </div>
        </div>
    )
}

export default AboutCard