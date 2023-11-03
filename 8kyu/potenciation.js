/* Potenciation */

/*
The function takes in 2 inputs x and y, and should return x to the power of y

Simple, right? But you're NOT allowed to use Math.pow();

Obs: x and y will be naturals, so DON'T take fractions into consideration;

Note : zero to the power of zero equals one in this kata
*/

/*
P - Two arguments as integers.
R - Integer representing the first argument raised to the power of the second argument.
E - 
power(1, 701270)  // 1
power(2, 2)       // 4
power(3, 2)       // 9
power(-1, 40)     // 1
P - 
function power(x, y) {
  // Raise x to the power of y with **.
  // Return integer.
}
*/

const power = (x, y) => x ** y;

// Test: 
// console.log(power(1, 701270))
// console.log(power(2, 2))
// console.log(power(3, 2))
// console.log(power(-1, 40))
