/* Find Nearest Square Number */

/*
Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.
*/

/*
P - One argument as an integer.
R - Integer representing the nearest square number to the given number.
E - 
nearestSq(1)        // 1
nearestSq(2)        // 1
nearestSq(10)       // 9
nearestSq(111)      // 121
nearestSq(9999)     // 10000
P - 
function nearestSq(n) {
  // Get the square root of the given number and round to the nearest whole number.
  // Square the result and return as an integer.
}
*/

const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);

// Test: 
// console.log(nearestSq(1))
// console.log(nearestSq(2))
// console.log(nearestSq(10))
// console.log(nearestSq(111))
// console.log(nearestSq(9999))
