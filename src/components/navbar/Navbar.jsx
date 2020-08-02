import React from "react";
import Logo from "../../assets/mvsr-acm.png";
import "./Navbar.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <header className="navbar">
            <img src={Logo} alt="MVSR ACM Logo" className="logo"/>
            <h1 className="heading">MVSR ACM Student Chapter</h1>
            <nav className="navLinks">
                <ul>
                    <li>
                        <NavLink exact to="/"
                                 activeStyle={{color: '#ff6768',transition: 'all 0.6s linear'}}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about"
                                 activeStyle={{color: '#ff6768',transition: 'all 0.6s linear'}}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/gallery"
                                 activeStyle={{color: '#ff6768',transition: 'all 0.6s linear'}}>
                            Gallery
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
