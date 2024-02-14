/* Is Integer Array */

/*
Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}
returns true  / True if every element in an array is an integer or a float with no decimals.
returns true  / True if array is empty.
returns false / False for every other input.
*/

/* 
P - One argument as an array. Can be null or empty.
R - Return true if the given array is empty or only contains integers. Return false otherwise.
E - 
isIntArray([])                  // true
isIntArray([1, 2, 3, 4])        // true
isIntArray([1, 2, 3, NaN])      // false
P - 
function isIntArray(arr) {
    // Check if an array is provided.
    // Iterate through the given array.
    // Check if every element is a number and is not a decimal.
    // Return true / false based on these conditions.
}
*/

const isIntArray = arr => arr ? arr.every(n => typeof n === "number" && n % 1 === 0) : false;

// Test: 
// console.log(isIntArray([]))
// console.log(isIntArray([1, 2, 3, 4]))
// console.log(isIntArray([1, 2, 3, NaN]))
