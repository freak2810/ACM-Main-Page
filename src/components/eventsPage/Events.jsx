import React from "react";
import "./Events.css";

export default function Events(props) {
  const RenderChiefGuestList = (chiefGuestList) =>
    chiefGuestList.map((chiefGuest) => (
      <div key={chiefGuest.id} className="eachGuest">
        <h2>{chiefGuest.name}</h2>
        <h4>{chiefGuest.details}</h4>
      </div>
    ));

  return (
    <div className="events">
      <div className="poster"></div>
      <div className="details">
        <div className="aboutVenue">
          <div className="eachDetail">
            <h4>What</h4>
            <h1>{props.what}</h1>
          </div>
          <div className="eachDetail">
            <h4>Where</h4>
            <h1>{props.where}</h1>
          </div>
          <div className="eachDetail">
            <h4>When</h4>
            <h1>{props.when}</h1>
          </div>
        </div>
        <div className="eventDetails">
          <div className="aboutEvent">
            <h4>{props.upcoming ? `What is it about??` : `Event Summary`}</h4>
            <p>{props.aboutEvent}</p>
          </div>
          <div className="chiefGuests">
            <h4>Chief Guest</h4>
            {RenderChiefGuestList(props.chiefGuests)}
          </div>
        </div>
        {/* {props.upcoming ? <JoinUsForm /> : null} */}
      </div>
    </div>
  );
}
