import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "./Events.css";
import {eventData} from "components/eventsPage/Events_Data";
import Loading from "components/loading/Loading";
import Header from "components/header/Header";
import SanityClient from "../../Client";
import BlockContent from "@sanity/block-content-to-react"

export default function Events() {

    const {id} = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {

        console.log(id);
        SanityClient.fetch(`
              *[id.current == "${id}"]
              {
                id,
                what,
                where,
                when,
                upcoming,
                aboutEvent,
                poster {
                    asset -> {
                        _id,
                        url
                    }
                },
                chiefGuests,
                coordinators,
              }
  `)
    .then(data=>setEvent(data[0]))
    .catch(err=>console.log(err))
    }, [id])

    const RenderChiefGuestList = (chiefGuestList) =>
        chiefGuestList.map((chiefGuest) => (
            <div key={chiefGuest.id} className="eachGuest">
                <h2>{chiefGuest.name}</h2>
                <p>{chiefGuest.details}</p>
            </div>
        ));

    const RenderCoordinatorsList = (coordinatorsList) => {
        return coordinatorsList.map((coordinator, index) => (
            <div key={index} className="eachCoordinator">
                <h2>{coordinator.name}</h2>
                <p>{coordinator.contact}</p>
            </div>

        ));
    }

    return event ? <div className="events">
        <Header name={`${event.what}`} description={`This Page contains all the details about ${event.what} comprising the information like when and where it happened, The Chief Guests and The Summary of the Event `}/>
        <div className="poster" style={{backgroundImage: `url(${event.poster.asset.url})`}}/>
        <div className="details">
            <div className="aboutVenue">
                <div className="eachDetail">
                    <h4>What</h4>
                    <h1>{event.what}</h1>
                </div>
                <div className="eachDetail">
                    <h4>Where</h4>
                    <h1>{event.where}</h1>
                </div>
                <div className="eachDetail">
                    <h4>When</h4>
                    <h1>{event.when}</h1>
                </div>
            </div>
            <div className="eventDetails">
                <div className="aboutEvent">
                    <h4>{event.upcoming ? `What is it about ??` : `Event Summary`}</h4>
{/*                     <p>{event.aboutEvent}</p> */}
                          <BlockContent
                            blocks={event.aboutEvent}
                            projectId="5q3312ct"
                            dataset="production"
                          />

                </div>
                <div className="chiefGuests">
                    <h4>{event.chiefGuests ? (event.chiefGuests.length === 1 ? `Chief Guest/Speaker` : `Chief Guests/ Speakers`) : null}</h4>
                    {event.chiefGuests ? RenderChiefGuestList(event.chiefGuests) : null}
                </div>
            </div>
            <div className="contactDetails">
                {
                    event.coordinators && event.upcoming ?
                        <h2>Have a question ?</h2>
                        : null
                }
                {
                    event.coordinators && event.upcoming ?
                        <div className="coordinators">
                            {RenderCoordinatorsList(event.coordinators)}
                        </div>
                        : null
                }
            </div>
        </div>
    </div> : <Loading/>
}
