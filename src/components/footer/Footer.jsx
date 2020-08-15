import React from 'react';
import Logo from "../../assets/acm-black.png";
import "./Footer.css"
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
                    <NavLink exact to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink exact to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink exact to="/gallery">Gallery</NavLink>
                </li>
                <li>
                    <NavLink exact to="/events">Events</NavLink>
                </li>
                <li>
                    <HashLink to="/#email">Contact Us</HashLink>
                </li>
            </ul>
        </div>
        <div className="links">
            <h2>External Links</h2>
            <ul>
                <li><a href="https://www.acm.org/" target="blank">ACM Official Page</a></li>
                <li><a href="https://www.mvsrec.edu.in/" target="blank">MVSR Official Page</a></li>
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
            <a href="https://github.com/AdityaManikanth2810/ACM-Main-Page" target="blank">
                <h5>Like our work? Check out the code <FontAwesomeIcon icon={faGithubAlt} size="sm"/></h5>
            </a>
        </div>
    </footer>
}