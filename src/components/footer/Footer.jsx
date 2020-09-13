import React from 'react';
import Logo from "assets/acm-black.png";
import "components/footer/Footer.css"
import {NavLink} from "react-router-dom";
import {faGithubAlt} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {HashLink} from "react-router-hash-link";


export default function Footer() {

    const onScrollToTopClicked = () => {
        window.scrollTo(0, 0);
        return null;
    }


    return <footer>
        <img src={Logo} alt="ACMLogo"/>
        <div className="links">
            <h2>Useful Links</h2>
            <ul>
                <li>
                    <a href="https://services.acm.org/public/qj/proflevel/proflevel_control.cfm?level=3&country=India&form_type=Student&promo=LEVEL&pay=DD" title="ACM Membership Form" target="blank">ACM Membership</a>
                </li>
                <li>
                    <a href="https://dl.acm.org/" title="ACM Digital Library" target="blank">ACM Digital Library</a>
                </li>
                <li>
                    <a href="https://www.oreilly.com/" title="O'Reilly" target="blank">O'Reilly</a>
                </li>
                <li>
                    <a href="https://acm.skillport.com/" title="SkillSoft Link" target="blank">Skill Soft</a>
                </li>
            </ul>
        </div>
        <div className="links">
            <h2>External Links</h2>
            <ul>
                <li><a href="https://www.mvsrec.edu.in/" target="blank" title="MVSR Engineering College Official Site">MVSR Official Page</a></li>
                <li><a href="https://www.acm.org/" target="blank" title="ACM International Official SIte">ACM International</a></li>
                <li><a href="https://india.acm.org/" target="blank" title="ACM India Official Site">ACM India</a></li>
            </ul>
        </div>
        <div className="contact">
            <h2>Contact Us</h2>
            <p>MVSR Engineering College</p>
            <p>Nadergul, Hyderabad</p>
            <p>Telanagana, India</p>
        </div>
       <button onClick={() => onScrollToTopClicked()}>Scroll To Top</button>
        <div className="credits">
            <h5>Built in the beautiful city of Hyderabad</h5>
            <h5>Copyright © 2020 MVSR ACM</h5>
            <a href="https://github.com/AdityaManikanth2810/ACM-Main-Page" title="ACM React Project Code" target="blank">
                <h5>Like our work? Check out the code <FontAwesomeIcon icon={faGithubAlt} size="sm"/></h5>
            </a>
        </div>
    </footer>
}