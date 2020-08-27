import React from 'react';
import {teachersData, teamData} from "./Team_Data";
import "./Team.css";
import {faGithubSquare, faLinkedin, faTwitterSquare} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faGlobeAsia} from "@fortawesome/free-solid-svg-icons";

export default function Team() {

    const renderTeamList = (list) => list.map(
        (member, index) => {
            return <div key={index} className="member" style={{backgroundImage: `url(${member.photo})`}}>
                <hr className="topBorder"/>
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
                                <FontAwesomeIcon icon={faGlobeAsia} size="2x" className="socialIcons linkedIn"/>
                            </a>
                            : null
                    }
                    {
                        member.links.email ?
                            <a href={`mailto:${member.links.email}`} target="blank">
                                <FontAwesomeIcon icon={faEnvelope} size="2x" className="socialIcons linkedIn"/>
                            </a>
                            : null
                    }
                    {
                        member.links.twitter ?
                            <a href={member.links.twitter} target="blank">
                                <FontAwesomeIcon icon={faTwitterSquare} size="2x" className="socialIcons linkedIn"/>
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
        <div className="heading">
            <h1>Our Team</h1>
        </div>
        <div className="teamList">
            {renderTeamList(teachersData)}
        </div>
        <div className="teamList">
            {renderTeamList(teamData)}
        </div>
    </div>
}