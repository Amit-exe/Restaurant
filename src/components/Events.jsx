import React from "react";

function Event(props) {
    return <div className="event-card row">
        <div className="col-lg-5">
            <h1 className="eventName">{props.name}</h1>
            <p className="eventTime">{`Starting from ${props.start} till ${props.end}`}</p>
        </div>
        <div className="eventDate col-lg-3">
            <p>{props.date}</p>
        </div>
        <div className="col-lg-4">
            <div className="eventOffers">
                <p>{props.offer}</p>
            </div>
        </div>
        
    </div>;
}


export default Event;