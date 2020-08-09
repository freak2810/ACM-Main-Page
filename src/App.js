import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import About from "./components/aboutPage/About";
import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landingPage/Landing";
import Gallery from "./components/galleryPage/Gallery";
import EventList from "./components/eventsPage/EventList";
import {eventData} from "./components/eventsPage/Events_DummyData";
import Events from "./components/eventsPage/Events";

const EventWithId = ({match}) => {

    return <Events
        event={eventData.filter(
            event => event.id === parseInt(match.params.id, 10))[0]}
    />
}


function App() {
    return (
        <Router>
            <Navbar/>
            <Route path="/" exact>
                <Landing/>
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
            <Route path="/events/:id" component={EventWithId}/>
        </Router>
    );
}

export default App;
