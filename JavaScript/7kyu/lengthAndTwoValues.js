/* Length and Two Values */

/*
Given an integer n and two other values, build an array of size n filled with these two values alternating.

Examples: 
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []

Good luck!
*/

/*
P - One argument as an integer and two arguments as booleans/strings.
R - Array of alternating boolean/string values.
E - 
alternate(5, true, false)
// [true, false, true, false, true]
alternate(10, "blue", "red")
// ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
alternate(0, "lemons", "apples")
// []
P - 
function alternate(n, firstValue, secondValue) {
  // Create an empty array variable.
  // Iterate from 0 to the given n integer.
  // If the current iteration is even, push the firstValue to the array.
  // If the current iteration is odd, push the secondValue to the array.
  // Return array of boolean/string values.
}
*/

function alternate(n, firstValue, secondValue) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(i % 2 === 0 ? firstValue : secondValue);
  }

  return result;
}

// Test: 
// console.log(alternate(5, true, false))
// console.log(alternate(10, "blue", "red"))
// console.log(alternate(0, "lemons", "apples"))
