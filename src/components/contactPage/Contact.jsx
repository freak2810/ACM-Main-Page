import React from 'react';
import "./Contact.css";
import Email from "./Email";
import Address from "./Address";

export default function Contact() {
    return <div className="contactUs">
        <Email/>
        <Address/>
    </div>
}