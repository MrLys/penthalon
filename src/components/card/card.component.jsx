import React from "react";
import {suitsToIcon} from "./card.utils";
import "./card.styles.scss"

const Card = ({ suit, type }) => {
    const Suit = suitsToIcon(suit);
    return (
        <div>
            {Suit}
        </div>
    )
};

export default Card;