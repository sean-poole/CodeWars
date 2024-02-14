/* Return Two Highest Value In List */

/*
In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []
*/

/*
P - One argument as an array of integers.
R - Array of the two highest values in the given array. 
E - 
twoHighest([])                  // []
twoHighest([15])                // [15]
twoHighest([15, 20, 20, 17])    // [20, 17]
P - 
function twoHighest(arr) {
  // Destructure the given array elements into a new set.
  // Sort the new array in descending order.
  // Slice the first two elements of the sorted array.
  // Return array of integers.
}
*/

function twoHighest(arr) {
  return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2);
}

// Test: 
// console.log(twoHighest([]))
// console.log(twoHighest([15]))
// console.log(twoHighest([15, 20, 20, 17]))
