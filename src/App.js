import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import About from "./components/aboutPage/About";
import Navbar from "./components/navbar/Navbar";
// import Gallery from "./components/galleryPage/Gallery";
// import EventList from "./components/eventsPage/EventList";
import {eventData} from "./components/eventsPage/Events_Data";
// import Home from "./components/homePage/Home";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Error404 from "./components/Error404/Error404";
import Loading from "./components/loading/Loading";
// import Events from "./components/eventsPage/Events";

const Events = React.lazy(() => import(`./components/eventsPage/Events`));
const Team = React.lazy(() => import(`./components/teamPage/Team`));
const Gallery = React.lazy(() => import(`./components/galleryPage/Gallery`));
const EventList = React.lazy(() => import(`./components/eventsPage/EventList`));
const Home = React.lazy(() => import(`./components/homePage/Home`));


const EventWithId = ({match}) => {

    return <Suspense fallback={<Loading/>}>
        <Events
            event={eventData.filter(
                event => event.id === match.params.id)[0]}
        />
    </Suspense>
}

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
                    <About/>
                    <Footer/>
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
                <Route exact path="/team">
                    <Suspense fallback={<Loading/>}>
                        <Team/>
                        <Footer/>
                    </Suspense>
                </Route>
                <Route path="/events/:id" component={EventWithId}>
                </Route>
                <Route>
                    <Error404/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
