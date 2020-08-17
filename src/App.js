import React,{ Suspense } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import About from "./components/aboutPage/About";
import Navbar from "./components/navbar/Navbar";
import Gallery from "./components/galleryPage/Gallery";
import EventList from "./components/eventsPage/EventList";
import {eventData} from "./components/eventsPage/Events_Data";
import Home from "./components/homePage/Home";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Team from "./components/teamPage/Team";
import Error404 from "./components/Error404/Error404";

const EventComponent = React.lazy(() => import("./components/eventsPage/Events"))

function App() {

    return (
        <Router>
            <ScrollToTop/>
            <Navbar />
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
                    <Gallery/>
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
                    <Suspense fallback={()=><div>Loading...</div>}>
                        <EventComponent/>
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
