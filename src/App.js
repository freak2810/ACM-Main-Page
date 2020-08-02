import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import About from "./components/aboutPage/About";
import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landingPage/Landing";
import Gallery from "./components/galleryPage/Gallery";


function App () {
  return (
    <Router>
      <Navbar />
        <Route path="/" exact>
            <Landing/>
        </Route>
      <Route path="/about">
        <About />
      </Route>
        <Route path="/gallery">
            <Gallery />
        </Route>
    </Router>
  );
}

export default App;
