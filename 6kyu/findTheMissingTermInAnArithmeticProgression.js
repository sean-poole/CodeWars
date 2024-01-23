/* Find the Missing Term in an Arithmetic Progression */

/*
An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.

Example: 
findMissing([1, 3, 5, 9, 11]) == 7

PS: This is a sample question of the facebook engineer challenge on interviewstreet. I found it quite fun to solve on paper using math, derive the algo that way. Have fun!
*/

/*
P - One argument as an array of integers in a sequence with one element missing. Array will always contain at least 3 elements. Missing integer will never be the first or last element.
R - Integer representing the missing number in the given array.
E - 
findMissing([1, 3, 4])          // 2
findMissing([1, 3, 5, 9, 11])   // 7
P - 
function findMissing(list) {
  // Calculate the sum of the first and last integers of the given array.
  // Multiply the sum by the length of the given array.
  // Divide the product by 2.
  // Calculate the sum of all elements in the array and subtract from the calculated quotient.
  // Return integer.
}
*/

const findMissing = list => ((list[0] + list[list.length - 1]) * (list.length + 1)) / 2 - list.reduce((acc, c) => acc += c, 0);

// Test: 
// console.log(findMissing([1, 3, 4]))
// console.log(findMissing([1, 3, 5, 9, 11]))
