/* Count the Number of Cubes With Paint On */

/*
Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

Your function takes as parameter the number of times the cube has been cut. You must return the number of smaller cubes created by the cuts that have at least one red face.

To make it clearer, the picture below represents the cube after (from left to right) 0, 1 and 2 cuts have been made.

Examples:
If we cut the cube 2 times, the function should return 26
If we cut the cube 4 times, the function should return 98
*/

/*
P - One argument as an integer.
R - Integer representing the amount of cubes after applying the given number of cuts.
E - 
countSquares(5)     // 152
countSquares(16)    // 1538
countSquares(23)    // 3176
P - 
function countSquares(cuts) {
  // If the given integer === 0, return 1.
  // Else, square the given integer, multiply by 6, and add 2.
  // Return integer.
}
*/

const countSquares = cuts => cuts === 0 ? 1 : 6 * cuts * cuts + 2;

// Test: 
// console.log(countSquares(5))
// console.log(countSquares(16))
// console.log(countSquares(23))
