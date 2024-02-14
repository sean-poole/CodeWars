/* Multiply The Number */

/*
Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:
> multiply(3)==15 // 3 * 5¹
> multiply(10)==250 // 10 * 5²
> multiply(200)==25000 // 200 * 5³
> multiply(0)==0 // 0 * 5¹
> multiply(-3)==-15 // -3 * 5¹
*/

/*
P - One argument as an integer.
R - Integer representing the given argument multiplied by 5 raised to its number of digits.
E - 
multiply(10)    // 250
multiply(5)     // 25
multiply(200)   // 25000
multiply(0)     // 0
multiply(-2)    // -10
P - 
function multiply(number) {
  // Multiply the given argument by 5 raised to the power of its digits.
  // Return integer.
}
*/

function multiply(number) {
  return number * Math.pow(5, String(Math.abs(number)).length);
}

// Test: 
// console.log(multiply(10))
// console.log(multiply(5))
// console.log(multiply(200))
// console.log(multiply(0))
// console.log(multiply(-2))
