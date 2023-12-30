/* Enumerable Magic #03 - Does My List Include This? */

/*
Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
*/

/*
P - One argument as an array of integers, and one argument as an array.
R - Boolean representing if the given array contains the given integer.
E - 
include([1, 2, 3, 4], 3)  // true
include([1, 2, 4, 5], 3)  // false
include([], 3)            // false
P - 
function include(arr, item) {
  // Apply includes method to the given array to check for the given integer.
  // Return boolean.
}
*/

const include = (arr, item) => arr.includes(item);

// Test: 
// console.log(include([1, 2, 3, 4], 3))
// console.log(include([1, 2, 4, 5], 3))
// console.log(include([], 3))
