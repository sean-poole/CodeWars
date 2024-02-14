/* Geometry Basics - Distance Between Points In 2D */

/*
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have attributes x and y.

Write a function calculating distance between Point a and Point b.

Input coordinates fit in range −50 <= x, y <= 50. Tests compare expected result and actual answer with tolerance of 1e-6.
*/

/*
P - Two arguments as objects containing x and y coordinates.
R - Integer representing the distance between the two given points.
E - 
distanceBetweenPoints(new Point(3, 3), new Point(3, 3))               // 0
distanceBetweenPoints(new Point(1, 6), new Point(4, 2))               // 5
distanceBetweenPoints(new Point(-10.2, 12.5), new Point(0.3, 14.7))   // 10.728001
P - 
function distanceBetweenPoints(a, b) {
  // Square the difference of both given x points.
  // Square the difference of both given y points.
  // Add the values together.
  // Take the square root of the sum.
  // Return integer.
}
*/

function Point(x, y) {
  return {
    x: x,
    y: y
  }
}

function distanceBetweenPoints(a, b) {
  return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
}

// Test: 
// console.log(distanceBetweenPoints(new Point(3, 3), new Point(3, 3)))
// console.log(distanceBetweenPoints(new Point(1, 6), new Point(4, 2)))
// console.log(distanceBetweenPoints(new Point(-10.2, 12.5), new Point(0.3, 14.7)))
