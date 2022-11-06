/* Shortest Word */

/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

// function findShort(s) {
//     let short = "";
//     s.split(" ").forEach(w => {
//         if (!short || w.length < short.length) {
//             short = w;
//         }
//     });
//     return short.length;
// }

// Alternate solution: 
const findShort = s => s.split(" ").sort((a, b) => b.length - a.length).pop().length;

// Alternate alternate solution: 
// const findShort = s => Math.min(...s.split(" ").map(s => s.length));

// Test: 
// console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
// console.log(findShort("turns out random test cases are easier than writing out basic ones"))
// console.log(findShort("Let's travel abroad shall we"))
