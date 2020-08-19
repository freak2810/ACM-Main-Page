import React from 'react';
import "./loading.css";
import "./spinner.css"

export default function Loading(){
    return <div className="loading">
        <div className="spinner">
            <div className="double-bounce1"/>
            <div className="double-bounce2"/>
        </div>

    </div>
}