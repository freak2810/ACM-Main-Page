import React from 'react';
import "components/eventsPage/EventList.css";
import {Link} from "react-router-dom";
import Header from "components/header/Header";

export default function EventList(props) {

    const renderEventsList = (eventList) => eventList
        .map((event, index) =>
            <div key={index} className="eachEvent">
                <div className="border"/>
                <Link  to={`/events/${event.id}`} >
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
        <div className="list">
            {renderEventsList(props.eventData)}
        </div>
    </div>
}