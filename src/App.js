import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navbar from "components/navbar/Navbar";
import Footer from "components/footer/Footer";
import ScrollToTop from "components/scrollToTop/ScrollToTop";
import Error404 from "components/Error404/Error404";
import Events from "components/eventsPage/Events";
import EventList from "components/eventsPage/EventList";
import Loading from "components/loading/Loading";

import {eventData} from "components/eventsPage/Events_Data";

const Home = React.lazy(() => import(`components/homePage/Home`));
const Team = React.lazy(() => import(`components/teamPage/Team`));
const Gallery = React.lazy(() => import(`components/galleryPage/Gallery`));
const About = React.lazy(() => import(`components/aboutPage/About`));

function App() {

    return (
        <Router>
            <ScrollToTop/>
            <Navbar/>
            <Switch>
                <Route path="/" exact>
                    <Suspense fallback={<Loading/>}>
                        <Home/>
                        <Footer/>
                    </Suspense>
                </Route>
                <Route path="/about">
                    <Suspense fallback={<Loading/>}>
                        <About/>
                        <Footer/>
                    </Suspense>
                </Route>
                <Route path="/gallery">
                    <Suspense fallback={<Loading/>}>
                        <Gallery/>
                        <Footer/>
                    </Suspense>
                </Route>
                <Route exact path="/events">
                    <Suspense fallback={<Loading/>}>
                        <EventList eventData={eventData}/>
                        <Footer/>
                    </Suspense>
                </Route>
                <Route path="/events/:id">
                    <Suspense fallback={<Loading/>}>
                        <Events/>
                        <Footer/>
                    </Suspense>
                </Route>
                <Route exact path="/team">
                    <Suspense fallback={<Loading/>}>
                        <Team/>
                        <Footer/>
                    </Suspense>
                </Route>
                <Route>
                    <Error404/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
