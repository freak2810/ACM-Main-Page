import React, {useState, useEffect} from 'react';
import "components/teamPage/Team.css";
import {faGithubSquare, faLinkedin, faTwitterSquare} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faGlobeAsia} from "@fortawesome/free-solid-svg-icons";
import Header from "components/header/Header";
import SanityClient from "../../Client";
import Loading from "../loading/Loading";

export default function Team() {

    const [teamList, setTeamList] = useState(null);
    const [facultyAdvisors, setFacultyAdvisors] = useState(null);
    const [facultyCoordinators, setFacultyCoordinators] = useState(null);


    useEffect(() => {
        SanityClient.fetch(`
            *[_type=="facultyAdvisor"] | order(_createdAt asc)
            {
                details {
                    name,
                    designation,
                    image {
                    asset -> {
                        _id,
                        url
                    }
                },
                links {
                    linkedIn,
                    github,
                    email,
                    twitter,
                    website
                    }
                },
                collegeDesignation
            }
        `)
            .then(data => {
                setFacultyAdvisors(data);
            })
            .catch(err => console.error(err))
    },[])

    useEffect(() => {
        SanityClient.fetch(`
            *[_type=="facultyCoordinators"] | order(_createdAt asc)
            {
                details {
                    name,
                    designation,
                    image {
                    asset -> {
                        _id,
                        url
                    }
                },
                links {
                    linkedIn,
                    github,
                    email,
                    twitter,
                    website
                    }
                },
                collegeDesignation
            }
        `)
            .then(data => {
                setFacultyCoordinators(data);
            })
            .catch(err => console.error(err))
    },[])

    useEffect(()=>{
        SanityClient.fetch(`
            *[_type=="teamMember"] | order(_createdAt asc)
            {
                details {
                    name,
                    designation,
                    image {
                    asset -> {
                        _id,
                        url
                        }
                    },
                links {
                    linkedIn,
                    github,
                    email,
                    twitter,
                    website
                    }
                },
            }
        `)
            .then(data => {
                setTeamList(data);
            })
            .catch(err => console.error(err))
    },[])

    const renderTeamList = (list) => list.map(
        (member, index) => {
            return <div key={index} className="member"
                        style={{backgroundImage: `url(${member.details.image.asset.url})`}}
            >
                <hr className="topBorder"/>
                <div className="links">
                    {
                        member.details.links.linkedIn ?
                            <a href={member.details.links.linkedIn} target="blank" title="LinkedIn Link">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" className="socialIcons linkedIn"/>
                            </a>
                            : null
                    }
                    {
                        member.details.links.github ?
                            <a href={member.details.links.github} target="blank" title="GitHub Link">
                                <FontAwesomeIcon icon={faGithubSquare} size="2x" className="socialIcons linkedIn"/>
                            </a>
                            : null
                    }
                    {
                        member.details.links.website ?
                            <a href={member.details.links.website} target="blank" title="Website / Portfolio">
                                <FontAwesomeIcon icon={faGlobeAsia} size="2x" className="socialIcons linkedIn"/>
                            </a>
                            : null
                    }
                    {
                        member.details.links.email ?
                            <a href={`mailto:${member.details.links.email}`} target="blank" title="Email ID">
                                <FontAwesomeIcon icon={faEnvelope} size="2x" className="socialIcons linkedIn"/>
                            </a>
                            : null
                    }
                    {
                        member.details.links.twitter ?
                            <a href={member.details.links.twitter} target="blank" title="Twitter Link">
                                <FontAwesomeIcon icon={faTwitterSquare} size="2x" className="socialIcons linkedIn"/>
                            </a>
                            : null
                    }
                </div>
                <div className="details">
                    <h1>{member.details.name}</h1>
                    {member.collegeDesignation ? <h2>{member.collegeDesignation}</h2> : null}
                    <h2>{member.details.designation}</h2>
                </div>
            </div>
        }
    )

    return teamList && facultyAdvisors && facultyCoordinators ? <div className="team">
        <Header name="Team"
                description="ACM MVSR - Student Chapter has a team of remarkable people who believe in their team and strive to improve themselves and the chapter"/>
        <div className="heading">
            <h1>Our Team</h1>
        </div>
        <div className="teamList">
            {renderTeamList(facultyAdvisors)}
        </div>
        <div className="teamList">
            {renderTeamList(facultyCoordinators)}
        </div>
        <div className="teamList teachers">
            {renderTeamList(teamList)}
        </div>
    </div> : <Loading/>
}