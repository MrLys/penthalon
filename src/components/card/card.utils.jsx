import React from "react";
import {CardSuits} from "./card.types";

export const suitsToIcon = (suits) => {
    switch(suits) {
        case CardSuits.CLUBS:
            return (<span className="clubs">&clubs;</span>);
        case CardSuits.HEART:
            return (<span className="hearts">&hearts;</span>);
        case CardSuits.DIAMONDS:
            return (<span className="diamonds">&diams;</span>);
        case CardSuits.SPADES:
            return (<span className="spades">&spades;</span>);
        default:
            return "";
    }
}