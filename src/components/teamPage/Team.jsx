import React from 'react';
import {facultyAdvisorsData, teachersData, teamData} from "components/teamPage/Team_Data";
import "components/teamPage/Team.css";
import {faGithubSquare, faLinkedin, faTwitterSquare} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faGlobeAsia} from "@fortawesome/free-solid-svg-icons";
import Header from "components/header/Header";

export default function Team() {

    const renderTeamList = (list) => list.map(
        (member, index) => {
            return <div key={index} className="member" style={{backgroundImage: `url(${member.photo})`}}>
                <hr className="topBorder"/>
                <div className="links">
                    {
                        member.links.linkedIn ?
                            <a href={member.links.linkedIn} target="blank" title="LinkedIn Link">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" className="socialIcons linkedIn"/>
                            </a>
                            : null
                    }
                    {
                        member.links.github ?
                            <a href={member.links.github} target="blank" title="GitHub Link">
                                <FontAwesomeIcon icon={faGithubSquare} size="2x" className="socialIcons linkedIn"/>
                            </a>
                            : null
                    }
                    {
                        member.links.website ?
                            <a href={member.links.website} target="blank" title="Website / Portfolio">
                                <FontAwesomeIcon icon={faGlobeAsia} size="2x" className="socialIcons linkedIn"/>
                            </a>
                            : null
                    }
                    {
                        member.links.email ?
                            <a href={`mailto:${member.links.email}`} target="blank" title="Email ID">
                                <FontAwesomeIcon icon={faEnvelope} size="2x" className="socialIcons linkedIn"/>
                            </a>
                            : null
                    }
                    {
                        member.links.twitter ?
                            <a href={member.links.twitter} target="blank" title="Twitter Link">
                                <FontAwesomeIcon icon={faTwitterSquare} size="2x" className="socialIcons linkedIn"/>
                            </a>
                            : null
                    }
                </div>
                <div className="details">
                    <h1>{member.name}</h1>
                    {member.collegeDesignation ? <h2>{member.collegeDesignation}</h2> : null}
                    <h2>{member.designation}</h2>
                </div>
            </div>
        }
    )

    return <div className="team">
        <Header name="Team" description="ACM MVSR - Student Chapter has a team of remarkable people who believe in their team and strive to improve themselves and the chapter"/>
        <div className="heading">
            <h1>Our Team</h1>
        </div>
        <div className="teamList">
            {renderTeamList(facultyAdvisorsData)}
        </div>
        <div className="teamList">
            {renderTeamList(teachersData)}
        </div>
        <div className="teamList teachers">
            {renderTeamList(teamData)}
        </div>
    </div>
}