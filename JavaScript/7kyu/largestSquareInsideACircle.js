/* Largest Square Inside A Circle */

/*
Determine the area of the largest square that can fit inside a circle with radius r.
*/

/*
P - One argument as an integer.
R - Integer representing the area of a square that fits into a circle with a radius of given r.
E - 
areaLargestSquare(5)      // 50
areaLargestSquare(7)      // 98
areaLargestSquare(15)     // 450
P - 
function areaLargestSquare(r) {
  // Square r and multiply by 2.
  // Return integer.
}
*/

const areaLargestSquare = r => r * r * 2;

// Test: 
// console.log(areaLargestSquare(5))
// console.log(areaLargestSquare(7))
// console.log(areaLargestSquare(15))
