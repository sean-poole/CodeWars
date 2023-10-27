/* Array Combinations */

/*
In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.
*/

/*
P - One argument as an array of arrays containing integers.
R - Integer representing the number of unique array combinations that can be formed by selecting one element from each subarray.
E - 
solve([[1,2],[4],[5,6]])                        // 4
solve([[1,2],[4,4],[5,6,6]])                    // 4
solve([[1,2],[3,4],[5,6]])                      // 8
solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]])    // 72
P - 
function solve(arr) {
  // Iterate through the given array.
  // Map each subarray to a Set to confirm an instance of a number only occurs once within its respective subarray.
  // Multiply the length of each subarray together to get the number of unique combinations.
  // Return integer.
}
*/

function solve(arr) {
  return arr.map(e => [...new Set(e)]).reduce((acc, c) => acc *= c.length, 1);
}

// Test: 
// console.log(solve([[1,2],[4],[5,6]]))
// console.log(solve([[1,2],[4,4],[5,6,6]]))
// console.log(solve([[1,2],[3,4],[5,6]]))
// console.log(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]))
