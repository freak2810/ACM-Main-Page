import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import About from "./components/aboutPage/About";
import Navbar from "./components/navbar/Navbar";
import Gallery from "./components/galleryPage/Gallery";
import EventList from "./components/eventsPage/EventList";
import {eventData} from "./components/eventsPage/Events_Data";
import Events from "./components/eventsPage/Events";
import Home from "./components/homePage/Home";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Team from "./components/teamPage/Team";



const EventWithId = ({match}) => {
    return <Events
        event={eventData.filter(
            event => event.id === match.params.id)[0]}
    />
}

function App() {

    return (
        <Router>
            <ScrollToTop/>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/gallery">
                    <Gallery/>
                </Route>
                <Route exact path="/events">
                    <EventList eventData={eventData}/>
                </Route>
                <Route exact path="/team">
                    <Team/>
                </Route>
                <Route path="/events/:id" component={EventWithId}/>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
