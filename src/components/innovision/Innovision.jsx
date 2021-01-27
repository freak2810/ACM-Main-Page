import React, { useState, useRef } from 'react';
import 'components/innovision/innoStyle.css';
import {cards} from 'components/innovision/Innovision_Data';
import Card from 'components/innovision/innoCard';
import Image from 'components/innovision/cardImage'
import Button from './cardButton';

const Innovision = () => {
  return(
    <div className="inno">
      <div className="main">     
        <div className="container">                
          <div className="row">
            {cards.map((card, i) => (
              <div className="column">
                <Card>
                <Image ratio={card.imageRatio} src={card.image}/>
                  <div className="card-title">{card.title}</div>
                  <div className="card-body">{card.description}</div>
                  <Button/>
                </Card>
              </div>
            ))}
          </div>
        </div>            
      </div>
    </div>
  )
}

export default Innovision;
