import React, {Suspense} from 'react';
import {Route,Redirect, Switch} from "react-router-dom";
import Loading from "components/loading/Loading";
import Footer from "components/footer/Footer";


const Home = React.lazy(() => import(`components/homePage/Home`));
const About = React.lazy(() => import(`components/aboutPage/About`));
const Gallery = React.lazy(() => import(`components/galleryPage/Gallery`));
const Team = React.lazy(() => import(`components/teamPage/Team`));
const EventList = React.lazy(() => import(`components/eventsPage/EventList`))
const Events = React.lazy(() => import(`components/eventsPage/Events`));
const Error404 = React.lazy(() => import(`components/error404/Error404`));


export default function Routes() {
    return <Switch>
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
                <EventList/>
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
        <Route path="/wp">
           <Redirect to="/"/>
        </Route>
        <Route>
            <Suspense fallback={<Loading/>}>
                <Error404/>
            </Suspense>
        </Route>
    </Switch>
}