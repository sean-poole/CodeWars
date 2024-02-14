/* Return the Closest Number Multiple of 10 */

/*
Given a number return the closest number to it that is divisible by 10.

Example input:
> 22
> 25
> 37

Expected output:
> 20
> 30
> 40
*/

/*
P - One argument as an integer.
R - Integer representing the closest number to the given integer that is divisible by 10.
E - 
closestMultiple10(22)     // 20
closestMultiple10(25)     // 30
closestMultiple10(37)     // 40
P - 
function closestMultiple10(num) {
  // Divide the given number by 10 and round to the nearest whole number.
  // Multiply by 10.
  // Return integer.
}
*/

const closestMultiple10 = num => Math.round(num / 10) * 10;

// Test: 
// console.log(closestMultiple10(22))
// console.log(closestMultiple10(25))
// console.log(closestMultiple10(37))
