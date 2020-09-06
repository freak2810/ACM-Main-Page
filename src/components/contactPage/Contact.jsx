import React from 'react';
import "components/contactPage/Contact.css";
import Email from "components/contactPage/Email";
import Address from "components/contactPage/Address";
import Header from "../Header/Header";

export default function Contact() {
    return <div className="contactUs">
        <Email/>
        <Address/>
    </div>
}