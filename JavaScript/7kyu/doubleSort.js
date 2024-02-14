/* Double Sort */

/*
Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

Note that numbers written as strings are strings and must be sorted with the other strings.
*/

/*
P - One argument as an array of integers and/or strings.
R - Array with integers sorted in ascending order, followed by sorted strings.
E - 
dbSort([6, 2, 3, 4, 5])
// [2, 3, 4, 5, 6]
dbSort([14, 32, 3, 5, 5])
// [3, 5, 5, 14, 32]
dbSort([1, 2, 3, 4, 5])
// [1, 2, 3, 4, 5]
dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2])
// [0, 2, 2, "Apple", "Banana", "Mango", "Orange"]
dbSort(["C", "W", "W", "W", 1, 2, 0])
// [0, 1, 2, "C", "W", "W", "W"]
dbSort(["Apple", 46, "287", 574, "Peach", "3", "69", 78, "Grape", "423"])
// [46, 78, 574, '287', '3', '423', '69', 'Apple', 'Grape', 'Peach']
P - 
function dbSort(a) {
  // Create an array variable to store the given array filtered for integers.
  // Create an array variable to store the given array filtered for strings.
  // Sort each array in ascending order.
  // Concatenate the array of strings to the array of integers.
  // Return array.
}
*/

function dbSort(a) {
  let integers = a.filter(e => typeof e === "number").sort((a, b) => a - b);
  let strings = a.filter(e => typeof e === "string").sort();

  return integers.concat(strings);
}

// Test: 
// console.log(dbSort([6, 2, 3, 4, 5]))
// console.log(dbSort([14, 32, 3, 5, 5]))
// console.log(dbSort([1, 2, 3, 4, 5]))
// console.log(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]))
// console.log(dbSort(["C", "W", "W", "W", 1, 2, 0]))
// console.log(dbSort(["Apple", 46, "287", 574, "Peach", "3", "69", 78, "Grape", "423"]))
