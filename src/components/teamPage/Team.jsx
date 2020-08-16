import React from 'react';
import {teamData} from "./Team_Data";
import "./Team.css";
import {faGithubSquare, faInternetExplorer, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function Team() {

    const renderTeamList = (list) => list.map(
        (member, index) => {
            return <div key={index} className="member" style={{backgroundImage: `url(${member.photo})`}}>
                <div className="links">
                    {
                        member.links.linkedIn ?
                            <a href={member.links.linkedIn} target="blank">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" className="socialIcons linkedIn"/>
                            </a>
                            : null
                    }
                    {
                        member.links.github ?
                            <a href={member.links.github} target="blank">
                                <FontAwesomeIcon icon={faGithubSquare} size="2x" className="socialIcons linkedIn"/>
                            </a>
                            : null
                    }
                    {
                        member.links.website ?
                            <a href={member.links.website} target="blank">
                                <FontAwesomeIcon icon={faInternetExplorer} size="2x" className="socialIcons linkedIn"/>
                            </a>
                            : null
                    }
                    {
                        member.links.email ?
                            <a href={member.links.email} target="blank">
                                <FontAwesomeIcon icon={faEnvelope} size="2x" className="socialIcons linkedIn"/>
                            </a>
                            : null
                    }
                </div>
                <div className="details">
                    <h1>{member.name}</h1>
                    <h2>{member.designation}</h2>
                </div>
            </div>
        }
    )

    return <div className="team">
        {renderTeamList(teamData)}
    </div>
}