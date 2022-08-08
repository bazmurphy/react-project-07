import React from "react";

export default function Card(props) {
    return (
        <div className="card-container">
            <img className="card-image" src={props.element.imageUrl} alt="" />
            <div className="card-info-container">
                <div>
                    <img className="card-pin" src="../images/pin.png" alt="" />
                    <span className="card-country">{props.element.location}</span>
                    <a className="card-googlemaps" href={props.element.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h2 className="card-title">{props.element.title}</h2>
                <span className="card-date">{props.element.startDate} - {props.element.endDate}</span>
                <p className="card-description">{props.element.description}</p>
            </div>
        </div>
    );
}