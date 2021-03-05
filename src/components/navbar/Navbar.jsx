import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {HashLink} from 'react-router-hash-link';
import Logo from "assets/mvsr-acm.png";
import "components/navbar/Navbar.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

    const [showMenu, toggleMenu] = useState(false);
    // const [color,setColor] = useState('transparent');

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
                <NavLink exact to="/" title="Home"
                         activeStyle={{color: '#ff6768', transition: 'all 0.6s linear'}}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" title="About"
                         activeStyle={{color: '#ff6768', transition: 'all 0.6s linear'}}>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="/events" title="Events"
                         activeStyle={{color: '#ff6768', transition: 'all 0.6s linear'}}>
                    Events
                </NavLink>
            </li>
            <li>
                <NavLink to="/gallery" title="Gallery"
                         activeStyle={{color: '#ff6768', transition: 'all 0.6s linear'}}>
                    Gallery
                </NavLink>
            </li>
            <li>
                <NavLink to="/team" title="Our Team"
                         activeStyle={{color: '#ff6768', transition: 'all 0.6s linear'}}>
                    Our Team
                </NavLink>
            </li>
            <li>
                <HashLink to="/#contactUs" title="Contact Us">
                    Contact Us
                </HashLink>
            </li>
        </ul>


    const onMenuButtonCLicked = () => {
        toggleMenu(!showMenu);
    }

    // useScrollPosition(({prevPos, currPos}) => {
    //     if (-currPos.y > 10 * (window.innerHeight / 100)) {
    //         setColor('#263859');
    //     } else {
    //         setColor('transparent');
    //     }
    // })

    return (
        <header className="navbar">
            <NavLink exact to="/" title="MVSR ACM" className="logo-container">
                <img src={Logo} alt="MVSR ACM Student Chapter" className="logo"/>
            </NavLink>
            <h1 className="heading">MVSR ACM</h1>
            <nav className="navLinks">
                <RenderMenuItems/>
            </nav>
            <button onClick={() => onMenuButtonCLicked()}>
                <FontAwesomeIcon className="menu" size="1x" icon={faBars}/>
            </button>
            {showMenu ? MobileMenu() : null}
        </header>
    );
}

export default Navbar;
