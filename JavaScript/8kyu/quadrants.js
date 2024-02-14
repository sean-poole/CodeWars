/* Quadrants */

/*
Task: 
Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.

Examples: 
> (1, 2)     => 1
> (3, 5)     => 1
> (-10, 100) => 2
> (-1, -9)   => 3
> (19, -56)  => 4

There are four quadrants:
> First quadrant, the quadrant in the top-right, contains all points with positive X and Y
> Second quadrant, the quadrant in the top-left, contains all points with negative X, but positive Y
> Third quadrant, the quadrant in the bottom-left, contains all points with negative X and Y
> Fourth quadrant, the quadrant in the bottom-right, contains all points with positive X, but negative Y
*/

/* 
P - Two arguments as integers. Non-zero integers. Can be (+) or (-). 
R - Integer representing the quadrant location of the two given points on a Euclidean plane.
E - 
quadrant(1, 2)          // 1
quadrant(-10, 100)      // 2
quadrant(-1, -9)        // 3
quadrant(19, -56)       // 4
P - 
function quadrant(x, y) {
  // If x and y are positive, return 1.
  // If x is negative and y is positive, return 2.
  // If x and y are negative, return 3.
  // If x is positive and y is negative, return 4.
}
*/

function quadrant(x, y) {
  if (x > 0) {
    return y > 0 ? 1 : 4;
  } else {
    return y > 0 ? 2 : 3;
  }
}

// Test: 
// console.log(quadrant(1, 2))
// console.log(quadrant(3, 5))
// console.log(quadrant(-10, 100))
// console.log(quadrant(-1, -9))
// console.log(quadrant(19, -56))
