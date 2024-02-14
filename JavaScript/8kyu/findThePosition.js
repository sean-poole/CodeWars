/* Find The Position */

/*
When provided with a letter, return its position in the alphabet.

Input :: "a"
Ouput :: "Position of alphabet: 1"
*/

/*
P - One argument as a string representing a letter of the alphabet.
R - String representing the given letter's position in the alphabet. Formatted as: `Position of alphabet: ${position}`
E - 
position("a")           // 1
position("z")           // 26
P - 
function position(letter) {
    // Get charCodeAt() of the given letter and subtract by 96.
    // Return position as a part of the formatted string.
}
*/

const position = letter => `Position of alphabet: ${letter.charCodeAt() - 96}`;

// Test: 
// console.log(position("a"))
// console.log(position("z"))
// console.log(position("e"))
