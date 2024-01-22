/* Bingo Or Not */

/*
For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.
*/

/*
P - One argument as an array of integers. Integers will range from 1 - 26. Duplicates may be present.
R - String representing if the given array contains integers with alphebetical letter positions of "BINGO".
E - 
bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])      // "LOSE"
bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10])  // "WIN"
P - 
function bingo(a) {
  // Iterate through the array containing bingo letter positions.
  // Check if the current element is within the given array.
  // If all values are present, return "WIN".
  // Else, return "LOSE".
}
*/

const letters = [2, 9, 14, 7, 15];

const bingo = a => letters.every(letter => a.includes(letter)) ? "WIN" : "LOSE";

// Alternate solution: 
// function bingo(a) {
//   return (
//     [..."bingo"]
//       .map(e => e.charCodeAt(0) - 96)
//       .every(letter => a.includes(letter))
//         ? "WIN"
//         : "LOSE"
//     );
// }

// Test: 
// console.log(bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// console.log(bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10]))
