/* Product Of Largest Pair */

/*
Rick wants a faster way to get the product of the largest pair in an array. Your task is to create a performant solution to find the product of the largest two integers in a unique array of positive numbers.
All inputs will be valid.
Passing [2, 6, 3] should return 18, the product of [6, 3].

Disclaimer: only accepts solutions that are faster than his, which has a running time O(nlogn).

> maxProduct([2, 1, 5, 0, 4, 3])              // 20
> maxProduct([7, 8, 9])                       // 72
> maxProduct([33, 231, 454, 11, 9, 99, 57])   // 104874
*/

/*
P - One argument as an array of unique, positive integers.
R - Integer representing the product of the largest pair in the given array.
E - 
maxProduct([2, 1, 5, 0, 4, 3])              // 20
maxProduct([7, 8, 9])                       // 72
maxProduct([33, 231, 454, 11, 9, 99, 57])   // 104874
P - 
function maxProduct(a) {
  // Create an integer variable to store the largest number in the given array.
  // Remove the largest number from the given array.
  // Create an integer variable to store the largest number in the mutated array.
  // Get the product of the two integer variables.
  // Return as integer.
}
*/

function maxProduct(a) {
  let first = Math.max(...a);
  a.splice(a.indexOf(first), 1);
  let second = Math.max(...a);

  return first * second;
}

// Test: 
// console.log(maxProduct([56, 335, 195, 443, 6, 494, 252]))
// console.log(maxProduct([154, 428, 455, 346]))
// console.log(maxProduct([136, 376, 10, 146, 105, 63, 234]))
// console.log(maxProduct([134, 320, 266, 299]))
// console.log(maxProduct([375, 56, 337, 466, 203]))
