/* Area of a Square */

/*
Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.
*/

/*
P - One argument as an integer.
R - Integer representing the area of a square where the given integer is the length of a circular arc. Round to two decimals.
E - 
squareArea(2)       // 1.62
squareArea(0)       // 0
squareArea(14.05)   // 80
P - 
function squareArea(a) {
  // Multiply the given integer by 2.
  // Divide the product by pi.
  // Square the quotient.
  // Round to 2 decimal places.
  // Convert from string to integer, return integer.
}
*/

const squareArea = a => Number(((2 * a / Math.PI) ** 2).toFixed(2));

// Test: 
// console.log(squareArea(2))
// console.log(squareArea(0))
// console.log(squareArea(14.05))
