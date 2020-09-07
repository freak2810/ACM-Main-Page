import React from 'react';
import {BrowserRouter as Router} from "react-router-dom"
import Navbar from "components/navbar/Navbar";
import ScrollToTop from "components/scrollToTop/ScrollToTop";
import Routes from "routes/Routes";

function App() {
    return (
        <Router>
            <ScrollToTop/>
            <Navbar/>
            <Routes/>
        </Router>
    );
}

export default App;
