/* Gravity Flip */

/*
If you've completed this kata already and want a bigger challenge, here's the 3D version

Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.

There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.

+---+                                       +---+
|   |                                       |   |
+---+                                       +---+
+---++---+     +---+              +---++---++---+
|   ||   |     |   |   -->        |   ||   ||   |
+---++---+     +---+              +---++---++---+
+---++---++---++---+         +---++---++---++---+
|   ||   ||   ||   |         |   ||   ||   ||   |
+---++---++---++---+         +---++---++---++---+
Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.

Examples (input -> output:
* 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
* 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]
*/

/*
P - Two arguments: String valued as "L" or "R", and an Array of numbers.
R - Given array sorted in ascending or descending order determined by the given string.
E - 
flip('R', [3, 2, 1, 2])         // [1, 2, 2, 3]
flip('L', [1, 4, 5, 3, 5])     // [5, 5, 4, 3, 1]
P - 
function flip(d, a) {
    // If given string === "R", sort the given array in ascending order.
    // Else, sort the given array in descending order.
}
*/

const flip = (d, a) => d === "R" ? a.sort((a, b) => a - b) : d === "L" ? a.sort((a, b) => b - a) : a;

// Alternate solution: 
// const flip = (d, a) => a.sort((a, b) => d === "R" ? a - b : b - a);

// Test: 
// console.log(flip('R', [3, 2, 1, 2]))
// console.log(flip('L', [1, 4, 5, 3, 5]))
