import React from 'react';
import "components/contactPage/Contact.css";
import Email from "components/contactPage/Email";
import Address from "components/contactPage/Address";
import Header from "components/header/Header";

export default function Contact() {
    return <div className="contactUs" id="contactUs">
        <Header/>
        <Email/>
        <Address/>
    </div>
}