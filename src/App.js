import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import About from "./components/aboutPage/About";
import Navbar from "./components/nav/Nav";


function App () {
  return (
    <Router>
      <Navbar />
      <Route path="/about">
        <About />
      </Route>
    </Router>
  );
}

export default App;
