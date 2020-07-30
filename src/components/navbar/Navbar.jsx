import React from "react";
import Logo from "../../assets/mvsr-acm.png";
import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <header className="navbar">
            <img src={Logo} alt="MVSR ACM Logo" className="logo"/>
            <h1 className="heading">MVSR ACM Student Chapter</h1>
            <nav className="navLinks">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
