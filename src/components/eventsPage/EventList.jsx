import React from 'react';
import "components/eventsPage/EventList.css";
import {Link} from "react-router-dom";
import Header from "../Header/Header";

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
        <Header name="Events"/>
        <div className="heading">
            <h1>Events</h1>
        </div>
        <div className="list">
            {renderEventsList(props.eventData)}
        </div>
    </div>
}