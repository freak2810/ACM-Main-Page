import React,{useState,useEffect} from 'react';
import "components/eventsPage/EventList.css";
import {Link} from "react-router-dom";
import Header from "components/header/Header";
import SanityClient from "../../Client";
import Loading from "../loading/Loading";

export default function EventList(props) {

    const [eventList,setEventList] = useState(null);

    useEffect(()=> {
    SanityClient.fetch(`
            *[_type=="event"] | order(_createdAt desc)
            {
                id,
                what,
                where,
                when
            }
    `)
    .then(data=>setEventList(data))
    .catch(err=>console.error(err))
    },[])

    const renderEventsList = (events) => events
        .map((event, index) =>
            <div key={index} className="eachEvent">
                <div className="border"/>
                <Link  to={`/events/${event.id.current}`} >
                    <h1> {event.what}</h1>
                    <h2>{event.where}</h2>
                    <h3>{event.when}</h3>
                </Link>
            </div>
        )


    return <div className="eventList">
        <Header name="Events" description="ACM MVSR - Student Chapter has been conducting multiple events including both technical and non-technical which helped many students learn, improve and grow without missing the fun and creativity. ACM - MVSR also encourages students to such events and share their knowledge with the fellow peers"/>
        <div className="heading">
            <h1>Events</h1>
        </div>
        { eventList ? <div className="list">
            { renderEventsList(eventList)}
        </div> : <Loading/> }
    </div>
}