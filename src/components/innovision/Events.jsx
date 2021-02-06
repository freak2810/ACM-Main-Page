import React from 'react';
import 'components/innovision/Events.css';
import Header from "../header/Header";
import {cards} from "./Innovision_Data";
import Card from "./EventCard";
import Image from "./cardImage";
import Button from "./cardButton";

const Events = () => {
    return (
        <div className="events">
            <Header/>
            <h1 className="heading">Events</h1>
            <div className="container">
                <div className="row">
                    {cards.map((card, i) => (
                        <div key={i} className="column">
                            <Card>
                                <Image ratio={card.imageRatio} src={card.image}/>
                                <h1 className="card-title">{card.title}</h1>
                                <p className="card-body">{card.description}</p>
                                <p className = "card-body"><b>When : {card.date}</b></p>
                                { card.registrationFee ? <p className = "card-body"><b>Registration Fee : {card.registrationFee}</b></p> : null}
                                {card.link ? <Button link={card.link}/> : null}
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            <div className="footer">
                <h1> For Queries, Contact </h1>
                <p>Shreyas - +91 77024 92817</p>
                <p>Snigdha - +91 98668 53612</p>
                <p>NSS Koushik - +91 94419 50643</p>

            </div>
        </div>
    )
}

export default Events;
