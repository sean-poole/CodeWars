/* Is N Divisible By (...)? */

/*
Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

Example:
(6,1,3)--> true because 6 is divisible by 1 and 3
(12,2)--> true because 12 is divisible by 2
(100,5,4,10,25,20)--> true
(12,7)--> false because 12 is not divisible by 7
*/

/*
P - Any amount of arguments as integers.
R - Boolean representing if the first argument is divisible by all other given arguments.
E - 
isDivisible(3, 3, 4)          // false
isDivisible(12, 3, 4)         // true
isDivisible(8, 3, 4, 2, 5)    // false
P - 
function isDivisible() {
  // Destructure the given arguments.
  // Create a variable to store the first argument.
  // Create an array variable to store the remaining arguments.
  // Iterate through the array.
  // Verify that the first argument is divisible by every element in the array.
  // Return boolean.
}
*/

function isDivisible() {
  const [n, ...numbers] = arguments;

  return numbers.every(e => n % e === 0);
}

// Test: 
// console.log(isDivisible(3, 3, 4))
// console.log(isDivisible(12, 3, 4))
// console.log(isDivisible(8, 3, 4, 2, 5))
