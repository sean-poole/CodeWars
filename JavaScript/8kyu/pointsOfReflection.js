/* Points of Reflection */

/*
"Point reflection" or "point symmetry" is a basic concept in geometry where a given point, P, at a given position relative to a mid-point, Q has a corresponding point, P1, which is the same distance from Q but in the opposite direction.

Task
Given two points P and Q, output the symmetric point of point P about Q. Each argument is a two-element array of integers representing the point's X and Y coordinates. Output should be in the same format, giving the X and Y coordinates of point P1. You do not have to validate the input.
*/

/*
P - Two arguments as two element arrays.
R - Two element array of integers representing [x, y] coordinates of point P1.
E - 
symmetricPoint([0, 0], [1, 1])          // [2, 2]
symmetricPoint([2, 6], [-2, -6])        // [-6, -18]
symmetricPoint([10, -10], [-10, 10])    // [-30, 30]
symmetricPoint([1, -35], -12, 1)        // [-25, 37]
symmetricPoint([1000, 15], [-7, -214])  // [-1014, -443]
symmetricPoint([0, 0], [0, 0])          // [0, 0]
P - 
function symmetricPoint(p, q) {
  // Double the second element of the first array.
  // Subtract the first element of the first array from it.
  // Set as x coordinate.
  // Double the second element of the second array.
  // Subtract the first element of the second array from it.
  // Set as y coordinate.
  // Return two element array of integers.
}
*/

const symmetricPoint = (p, q) => [2 * q[0] - p[0], 2 * q[1] - p[1]];

// Test: 
// console.log(symmetricPoint([0, 0], [1, 1]))
// console.log(symmetricPoint([2, 6], [-2, -6]))
// console.log(symmetricPoint([10, -10], [-10, 10]))
// console.log(symmetricPoint([1, -35], [-12, 1]))
// console.log(symmetricPoint([1000, 15], [-7, -214]))
// console.log(symmetricPoint([0, 0], [0, 0]))
