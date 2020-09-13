import {CardSuits} from "./card.types";

const suitsToIcon = (suits) => {
    switch(suits) {
        case CardSuits.CLUBS:
            return "&clubs;";
        case CardSuits.HEART:
            return "&hearts;";
        case CardSuits.DIAMONDS:
            return "&diams;";
        case CardSuits.SPADES:
            return "&spades;";
        default:
            return "";
    }
};
export default suitsToIcon;