import React from "react";

import Card from "./Card";

import cardData from "../data/data"

export default function CardGallery() {

    const cardElements = cardData.map(element => {
        // console.log(element)
        return <Card 
            key = {element.id}
            element = {element}
        />
    })

    return (
        <div className="card-gallery-container">
            {cardElements}
        </div>
    );
}