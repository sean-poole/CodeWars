/* Find The Slope */

/*
Given an array of 4 integers
[a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

   a:x1
   b:y1
   c:x2
   d:y2
Assume that [a,b,c,d] and the answer are all integers (no floating numbers!).
*/

/*
P - One argument as an array of integers.
R - String representing the slope as an integer.
E - 
slope([19, 3, 20, 3])     // "0"
slope([2, 7, 4, -7])      // "-7"
slope([10, 50, 30, 150])  // "5"
slope([15, 45, 12, 60])   // "-5"
slope([10, 20, 20, 80])   // "6"
slope([-10, 6, -10, 3])   // "undefined"
P - 
function slope(points) {
  // Create a variable that represents the rise of the given coordinates.
  // Create a variable that represents the run of the given coordinates.
  // If run === 0, return "undefined".
  // Divide the rise by the run and convert the calculation to a string.
  // Return string.
}
*/

function slope(points) {
  const rise = points[3] - points[1];
  const run = points[2] - points[0];
  if (run === 0) return "undefined";

  return (rise / run).toString();
}

// Test: 
// console.log(slope([19, 3, 20, 3]))
// console.log(slope([2, 7, 4, -7]))
// console.log(slope([10, 50, 30, 150]))
// console.log(slope([15, 45, 12, 60]))
// console.log(slope([10, 20, 20, 80]))
// console.log(slope([-10, 6, -10, 3]))
