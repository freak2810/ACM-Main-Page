import React from 'react';
import Landing from "components/innovision/Landing";
import Events from "./Events";
import ParticlesBg from "particles-bg";
// import InnovisionBG from "../../assets/Billboard/innovisionBG.png"


//lines circle cobweb

export default function Innovision() {
    return <main>
            <Landing/>
            <Events/>
            <ParticlesBg  type="lines" bg/>
    </main>
}