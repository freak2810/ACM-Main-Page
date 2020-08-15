import React from 'react';
import "./Address.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faFacebookSquare, faInstagramSquare, faLinkedin} from "@fortawesome/free-brands-svg-icons";


export default function Address() {
    return <div className="address">
        <h1>Hyderabad</h1>
        <h2>MVSR Engineering College, Nadergul.</h2>
        <a href="mailto:contact@mvsr.acm.org" target="blank"><h4><FontAwesomeIcon icon={faEnvelope}/> contact@mvsr.acm.org</h4></a>
        <h2>Connect with Us</h2>
        <div className="socialLinks">
            <a href="https://www.linkedin.com/groups/13885592" target="blank"><FontAwesomeIcon icon={faLinkedin} size="3x" className="socialIcons linkedIn"/></a>
            <a href="https://www.facebook.com/MVSR-ACM-Student-Chapter-2372670922946786" target="blank"><FontAwesomeIcon icon={faFacebookSquare} size="3x" className="socialIcons fb"/></a>
            <a href="https://www.instagram.com/p/CDT87AVpqf8/?igshid=1bq4dojcwjdjc" target="blank"><FontAwesomeIcon icon={faInstagramSquare} size="3x" className="socialIcons insta"/></a>
        </div>
    </div>
}