import React from 'react';
import "components/loading/loading.css";
import "components/loading/spinner.css"
import Header from "components/header/Header";

export default function Loading(){
    return <div className="loading">
        <Header name="Loading"/>
        <div className="spinner">
            <div className="double-bounce1"/>
            <div className="double-bounce2"/>
        </div>
    </div>
}