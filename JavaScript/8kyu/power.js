/* Power */

/*
The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).

Examples: 
> numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
> numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
> numberToPower(10, 6) // -> 1000000

Note: Math.pow and some other Math functions like eval() and ** are disabled.
*/

/*
P - Two arguments as integers.
R - Integer representing the given base raised by the given power.
E - 
numberToPower(4, 2)
numberToPower(10, 4)
numberToPower(10, 0)
P - 
function numberToPower(number, power) {
  // Create a variable to store an array of numbers.
  // Iterate from 1 to the given power.
  // For each iteration, push the given base number to the created array.
  // Reduce the array by multiplying the elements together. Start from 1.
  // Return integer.
}
*/

function numberToPower(number, power) {
  let num = [];
  for (let i = 1; i <= power; i++) {
    num.push(number);
  }

  return num.reduce((acc, c) => acc *= c, 1);
}

// Test: 
// console.log(numberToPower(4, 2))
// console.log(numberToPower(10, 4))
// console.log(numberToPower(10, 0))
