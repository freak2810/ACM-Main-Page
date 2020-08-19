import React, {useState} from "react";
import Logo from "../../assets/mvsr-acm.png";
import "./Navbar.css";
import {NavLink} from "react-router-dom";
import {HashLink} from 'react-router-hash-link';
import {useScrollPosition} from '@n8tb1t/use-scroll-position';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

    const [color, setColor] = useState('transparent');
    const [showMenu, toggleMenu] = useState(false);

    const MobileMenu = () => {
        return <div className="mobileMenu">
            <nav>
                <RenderMenuItems/>
            </nav>
        </div>
    }

    const RenderMenuItems = () =>
        <ul>
            <li>
                <NavLink exact to="/"
                         activeStyle={{color: '#ff6768', transition: 'all 0.6s linear'}}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about"
                         activeStyle={{color: '#ff6768', transition: 'all 0.6s linear'}}>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="/events"
                         activeStyle={{color: '#ff6768', transition: 'all 0.6s linear'}}>
                    Events
                </NavLink>
            </li>
            <li>
                <NavLink to="/gallery"
                         activeStyle={{color: '#ff6768', transition: 'all 0.6s linear'}}>
                    Gallery
                </NavLink>
            </li>
            <li>
                <NavLink to="/team"
                         activeStyle={{color: '#ff6768', transition: 'all 0.6s linear'}}>
                    Our Team
                </NavLink>
            </li>
            <li>
                <HashLink to="/#email">
                    Contact Us
                </HashLink>
            </li>
        </ul>


    const onMenuButtonCLicked = () => {
        toggleMenu(!showMenu);
        console.log(showMenu);
    }

    useScrollPosition(({prevPos, currPos}) => {
        if (-currPos.y > 10 * (window.innerHeight / 100)) {
            setColor('#263859');
        } else {
            setColor('transparent');
        }
    })

    return (
        <header className="navbar" style={{
            backgroundColor: color,
            borderBottom: color === "transparent" ? "none" : "2px solid #ff6768"
        }}>
            <NavLink exact to="/" className="logo-container"><img src={Logo} alt="MVSR ACM Logo"
                                                                  className="logo"/></NavLink>
            <h1 className="heading">MVSR ACM Student Chapter</h1>
            <nav className="navLinks">
                <RenderMenuItems/>
            </nav>
            <button onClick={() => onMenuButtonCLicked()}><FontAwesomeIcon className="menu" size="1x" icon={faBars}/>
            </button>
            {showMenu ? MobileMenu() : null}
        </header>
    );
}

export default Navbar;
