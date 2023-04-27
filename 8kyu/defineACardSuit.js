/* Define A Card Suit */

/*
You get any card as an argument. Your task is to return the suit of this card (in lowercase).
Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

/*
P - One argument as a string representing a card from a standard playing deck.
R - String representing the suit of the given card string.
E - defineSuit("Q♠")       // "spades"
P - 
function defineSuit(card) {
    // Make a switch case to test for each suit.
    // Compare the second character of the given string.
    // Return string of the card suit.
}
*/

function defineSuit(card) {
    switch(card.slice(-1)) {
        case "♣": return "clubs";
        case "♦": return "diamonds";
        case "♥": return "hearts";
        case "♠": return "spades";
    }
}

// Test: 
// console.log(defineSuit("Q♠"))
// console.log(defineSuit("9♦"))
// console.log(defineSuit("J♥"))
