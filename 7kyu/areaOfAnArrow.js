/* Area of an Arrow */

/*
An arrow is formed in a rectangle with sides a and b by joining the bottom corners to the midpoint of the top edge and the centre of the rectangle.

a and b are integers and > 0

Write a function which returns the area of the arrow.
*/

/*
P - Two arguments as integers.
R - Integer representing the area of a triangle formed by the bottom corners & midpoint in a square/rectangle of the given dimensions.
E - 
arrowArea(4, 2)     // 2
arrowArea(7, 6)     // 10.5
arrowArea(25, 25)   // 156.25
P - 
function arrowArea(a, b) {
  // Multiply the base by half of the height.
  // Divide by 2.
  // Return area of the triangle as an integer.
}
*/

const arrowArea = (a, b) => (a * (b / 2)) / 2;

// Test: 
// console.log(arrowArea(4, 2))
// console.log(arrowArea(7, 6))
// console.log(arrowArea(25, 25))
