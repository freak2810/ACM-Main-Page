import React from 'react';
import Landing from "components/landingPage/Landing";
import Contact from "components/contactPage/Contact";
import Header from "components/header/Header";

export default function Home()
{
    return <div>
        <Header/>
        <Landing/>
        <Contact/>
    </div>
}