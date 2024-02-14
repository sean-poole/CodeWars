/* Flick Switch */

/*
Task: 
Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.

Examples: 
['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]
['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]
['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

Notes: 
> "flick" will always be given in lowercase.
> A list may contain multiple flicks.
> Switch the boolean value on the same element as the flick itself.
*/

/*
P - One argument as an array of strings.
R - Array of booleans. Boolean will always start as true, and return the opposite value after an occurrence of "flick" in the given array of strings.
E - 
flickSwitch(["codewars", "flick", "code", "wars"])
// [true, false, false, false]
flickSwitch(["flick", "chocolate", "adventure", "sunshine"])
// [false, false, false, false]
flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"])
// [true, true, false, false, true]
P - 
function flickSwitch(arr) {
  // Create a variable to store the current boolean value. True by default.
  // Create an array variable to store boolean values.
  // Iterate through the given string.
  // If the current element === "flick", set the current boolean value to its opposite. Push the value to the created array.
  // Else, push the current boolean value to the created array.
  // Return array of booleans.
}
*/

function flickSwitch(arr) {
  let flag = true;
  let result = [];

  for (s of arr) {
    if (s === "flick") {
      flag = !flag;
      result.push(flag);
    } else {
      result.push(flag);
    }
  }

  return result;
}

// Test: 
// console.log(flickSwitch(["codewars", "flick", "code", "wars"]))
// console.log(flickSwitch(["flick", "chocolate", "adventure", "sunshine"]))
// console.log(flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]))
// console.log(flickSwitch(["flick", "flick", "flick", "flick", "flick"]))
// console.log(flickSwitch(["bicycle"]))
// console.log(flickSwitch(["flick"]))
// console.log(flickSwitch([]))
