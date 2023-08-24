/* Consecutive Items */

/*
You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

It is guaranteed that a and b are both present in arr.
*/

/*
P - One argument as an array of integers and two arguments as integers.
R - Boolean representing if the two given integers appear consecutively in the given array.
E - 
consecutive([1, 3, 5, 7], 3, 7)                 // false
consecutive([1, 3, 5, 7], 3, 1)                 // true
consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4)    // true
P - 
function consecutive(arr, a, b) {
  // Find the index of the first given integer in the given array.
  // Check if the previous or following index is the second given integer.
  // Return boolean.
}
*/

function consecutive(arr, a, b) {
  const index = arr.indexOf(a);
  if (arr[index - 1] === b || arr[index + 1] === b) {
    return true;
  }

  return false;
}

// Alternate solution: 
// const consecutive = (arr, a, b) => Math.abs(arr.indexOf(a) - arr.indexOf(b)) === 1;

// Test: 
// console.log(consecutive([1, 3, 5, 7], 3, 7))
// console.log(consecutive([1, 3, 5, 7], 3, 1))
// console.log(consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4))
