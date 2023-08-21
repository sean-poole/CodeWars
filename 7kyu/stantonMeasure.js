/* Stanton Measure */

/*
The Stanton measure of an array is computed as follows: count the number of occurences for value 1 in the array. Let this count be n. The Stanton measure is the number of times that n appears in the array.

Write a function which takes an integer array and returns its Stanton measure.

Examples: 
> The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.
> The Stanton measure of [1, 4, 1, 2, 11, 2, 3, 1] is 1, because 1 occurs 3 times in the array and 3 occurs 1 time.
*/

/*
P - One argument as an array of integers.
R - Integer representing how many times the number of occurrences of 1 appear in the given array.
E - 
stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2])      // 3
stantonMeasure([1, 4, 1, 2, 11, 2, 3, 1])     // 1
P - 
function stantdonMeasure(arr) {
  // Create a variable that stores the length of an array that filters for elements equal to 1.
  // Filter the given array for elements that are equal to the created variable.
  // Return the length of the filtered array.
}
*/

function stantonMeasure(arr) {
  const ones = arr.filter(n => n === 1).length;
  return arr.filter(n => n === ones).length;
}

// Alternate solution: 
// function stantonMeasure(arr) {
//   return arr.filter(n => n === arr.filter(n => n === 1).length).length;
// }

// Test: 
// console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]))
