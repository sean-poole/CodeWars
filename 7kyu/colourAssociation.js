/* Colour Association */

/*
Colour plays an important role in our lifes. Most of us like this colour better then another. User experience specialists believe that certain colours have certain psychological meanings for us.

You are given a 2D array, composed of a colour and its 'common' association in each array element. The function you will write needs to return the colour as 'key' and association as its 'value'.

For example:
var array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...]
*/

/*
P - Array of [key, value] array pairs.
R - Array of {key: value} object pairs.
E - 
colourAssociation([["white", "goodness"], ...])     //returns [{white: 'goodness'}, ...]
P - 
function colourAssociation(array) {
    // Create new array.
    // Iterate through given array.
    // Assign [key, value] pairs as objects and push to created array.
}
*/

function colourAssociation(array) {
    let colors = [];
    for (pair of array) {
        let color = new Object;
        color[pair[0]] = pair[1];
        colors.push(color);
    }

    return colors;
}

// Alternate solution: 
// const colourAssociation = array => array.map(([colour, association]) => ({color: association}));

// Test: 
// console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]))
// console.log(colourAssociation([["red", "energy"],["yellow", "creativity"],["brown" , "friendly"],["green", "growth"]]))
