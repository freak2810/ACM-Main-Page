import React from 'react';
import "./Address.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Address() {
    return <div className="address">
        <h1>Hyderabad</h1>
        <h2>MVSR Engineering College, Nadergul.</h2>
        <h4><FontAwesomeIcon icon={faEnvelope} /> contact@mvsr.acm.org</h4>
    </div>
}