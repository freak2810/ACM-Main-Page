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
                        <div className="column">
                            <Card>
                                <Image ratio={card.imageRatio} src={card.image}/>
                                <h1 className="card-title">{card.title}</h1>
                                <p className="card-body">{card.description}</p>
                                <Button/>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Events;
