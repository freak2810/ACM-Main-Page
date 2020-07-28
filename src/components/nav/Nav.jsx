import React from "react";
import "./Nav.css";
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <header className="navbar">
            <h1 className="logo">ACM MVSR</h1>
            <nav className="navLinks">
                <ul>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
