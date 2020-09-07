import React from 'react';
import Landing from "components/landingPage/Landing";
import Contact from "components/contactPage/Contact";
import Header from "components/header/Header";

export default function Home()
{
    return <div>
        <Header description="ACM MVSR is a subsidiary of Association for Computing Machinery (ACM), a worldwide learning society for computing. The chapter was founded on August 2, 2019."/>
        <Landing/>
        <Contact/>
    </div>
}