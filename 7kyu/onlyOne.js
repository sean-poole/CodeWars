/* Only One */

/*
Given any number of boolean flags function should return true if and only if one of them is true while others are false. If function is called without arguments it should return false.

> onlyOne() --> false
> onlyOne(true, false, false) --> true
> onlyOne(true, false, false, true) --> false
> onlyOne(false, false, false, false) --> false  
*/

/*
P - Any number of arguments as boolean flags.
R - Boolean representing if the given arguments contains one and only one true flag.
E - 
onlyOne())                            // false
onlyOne(true, false, false))          // true
onlyOne(true, false, false, true))    // false
onlyOne(false, false, false, false))  // false
P - 
function onlyOne() {
  // Create an array variable to store the destructured arguments.
  // Filter the array for "true" boolean values.
  // If there is only one true boolean value in the array, return true.
  // Else, return false.
}
*/

function onlyOne() {
  let booleans = [...arguments];
  return booleans.filter(e => e === true).length === 1;
}

// Alternate solution: 
// const onlyOne = (...args) => args.filter(e => e === true).length === 1;

// Test: 
// console.log(onlyOne())
// console.log(onlyOne(true, false, false))
// console.log(onlyOne(true, false, false, true))
// console.log(onlyOne(false, false, false, false))
