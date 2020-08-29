import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navbar from "components/navbar/Navbar";
import Footer from "components/footer/Footer";
import ScrollToTop from "components/scrollToTop/ScrollToTop";
import Error404 from "components/Error404/Error404";
import Events from "components/eventsPage/Events";
import EventList from "components/eventsPage/EventList";

import {eventData} from "components/eventsPage/Events_Data";
import Home from "./components/homePage/Home";
import About from "./components/aboutPage/About";
import ImageGallery from "components/galleryPage/Gallery";
import Team from "./components/teamPage/Team";


// const Home = React.lazy(() => import(`components/homePage/Home`));
// const Team = React.lazy(() => import(`components/teamPage/Team`));
// const Gallery = React.lazy(() => import(`components/galleryPage/Gallery`));
// const About = React.lazy(() => import(`components/aboutPage/About`));

function App() {

    return (
        <Router>
            <ScrollToTop/>
            <Navbar/>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                    <Footer/>
                </Route>
                <Route path="/about">
                    <About/>
                    <Footer/>
                </Route>
                <Route path="/gallery">
                    <ImageGallery/>
                    <Footer/>
                </Route>
                <Route exact path="/events">
                    <EventList eventData={eventData}/>
                    <Footer/>
                </Route>
                <Route exact path="/team">
                    <Team/>
                    <Footer/>
                </Route>
                <Route path="/events/:id">
                    <Events/>
                    <Footer/>
                </Route>
                <Route>
                    <Error404/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
