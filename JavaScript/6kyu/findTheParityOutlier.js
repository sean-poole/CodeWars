/* Find The Parity Outlier */

/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

/*
P - One argument as an array of integers.
R - Integer representing the only odd/even number that is different from the rest of the given array.
E - 
findOutlier([0, 1, 2])    // 1
findOutlier([1, 2, 3])    // 2
P - 
function findOutlier(integers) {
  // Create an array variable that stores the odd numbers from the given array.
  // Create an array variable that stores the even numbers from the given array.
  // If the length of the odd numbers array is greater than 1, return the first element of the evens array.
  // Else, return the first element of the odds array.
}
*/

function findOutlier(integers) {
  let odds = integers.filter(num => num % 2);
  let evens = integers.filter(num => num % 2 === 0);
  return odds.length > 1 ? evens[0] : odds[0];
}

// Test: 
// console.log(findOutlier([0, 1, 2]))
// console.log(findOutlier([1, 2, 3]))
// console.log(findOutlier([2, 6, 8, 10, 3]))
// console.log(findOutlier([0, 0, 3, 0, 0]))
// console.log(findOutlier([1, 1, 0, 1, 1]))
