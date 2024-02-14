/* Replace With Alphabet Position */

/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example:
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

function alphabetPosition(text) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let alphabetValues = {};
    let numbers = [];

    for (let i = 1; i <= alphabet.length; i++) {
        alphabetValues[alphabet[i - 1]] = i;
    }
    
    for (c of text.toLowerCase()) {
        if (alphabet.includes(c)) {
            numbers.push(alphabetValues[c]);
        }
    }

    return numbers.join(" ");
}

// Alternate solution: 
// function alphabetPosition(text) {
//     let alphabetValues = [];
//     let alphabet = "abcdefghijklmnopqrstuvwxyz";

//     for (c of text.toLowerCase()) {
//         if (alphabet.includes(c)) {
//             alphabetValues.push(alphabet.indexOf(c) + 1);
//         }
//     }

//     return alphabetValues.join(" ");
// }

// Test: 
// console.log(alphabetPosition("The sunset sets at twelve o' clock."))
// console.log(alphabetPosition("The narwhal bacons at midnight."))
