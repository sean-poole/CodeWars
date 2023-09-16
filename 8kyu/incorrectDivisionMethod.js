/* Incorrect Division Method */

/*
This method, which is supposed to return the result of dividing its first argument by its second, isn't always returning correct values. Fix it.
*/

/*
P - Two arguments as integers.
R - Integer representing the quotient of the given arguments.
E - 
solve(2, 1)   // 2
solve(2, 4)   // 0.5
solve(0, 8)   // 0
P - 
function solve(x, y) {
  x // y
  // Correct the given operation to include only one "/".
  // Return integer.
}
*/

const solve = (x, y) => x / y;

// Test: 
// console.log(solve(2, 1))
// console.log(solve(2, 4))
// console.log(solve(42, 0))
// console.log(solve(0, 8))
// console.log(solve(7, 2))
// console.log(solve(4.2, 1))
// console.log(solve(9999, 11))
