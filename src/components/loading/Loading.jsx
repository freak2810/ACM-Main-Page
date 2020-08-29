import React from 'react';
import "components/loading/loading.css";
import "components/loading/spinner.css"

export default function Loading(){
    return <div className="loading">
        <div className="spinner">
            <div className="double-bounce1"/>
            <div className="double-bounce2"/>
        </div>

    </div>
}