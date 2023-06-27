/* Sum of Array Singles */

/*
In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.
*/

/*
P - One argument as an array of integers. Two integers appear once, the remaining integers appear twice.
R - Integer representing the sum of the two integers that only appear once.
E - 
repeats([4, 5, 7, 5, 4, 8])         // 15
repeats([9, 10, 19, 13, 19, 13])    // 19
P - 
function repeats(arr) {
  // Iterate through the given array of integers.
  // Filter the array for elements where their first occurrence === last occurrence.
  // Reduce the filtered array to get the sum of elements that only appear once.
  // Return integer.
}
*/

const repeats = arr => {
  return arr
    .filter(n => arr.indexOf(n) === arr.lastIndexOf(n))
    .reduce((acc, c) => acc += c, 0);
}

// Test: 
// console.log(repeats([4, 5, 7, 5, 4, 8]))
// console.log(repeats([9, 10, 19, 13, 19, 13]))
// console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]))
// console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]))
// console.log(repeats([5, 10, 19, 13, 10, 13]))
