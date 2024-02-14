/* How Many Consecutive Numbers Are Needed */

/*
Write a function that takes an array of unique integers and returns the minimum number of integers needed to make the values of the array consecutive from the lowest number to the highest number.

Example: 
[4, 8, 6] --> 2
Because 5 and 7 need to be added to have [4, 5, 6, 7, 8]

[-1, -5] --> 3
Because -2, -3, -4 need to be added to have [-5, -4, -3, -2, -1]

[1] --> 0
[]  --> 0
*/

/*
P - One argument as an array of unique integers. 
R - Integer representing the number of integers needed to make the given array elements consecutive.
E - 
consecutive([4, 8, 6])      // 2
consecutive([1, 2, 3, 4])   // 0
consecutive([])             // 0
consecutive([1])            // 0
P - 
function consecutive(array) {
  // Create a variable to store count as an integer.
  // Sort the given array in ascending order.
  // Iterate from the lowest value to the highest value.
  // If the current value is not listed in the given array, increment count by 1.
  // Return integer.
}
*/

function consecutive(array) {
  let count = 0;

  let sorted = array.sort((a, b) => a - b);
  for (let i = sorted[0]; i <= sorted[sorted.length - 1]; i++) {
    if (!sorted.includes(i)) count++;
  }

  return count;
}

// Alternate solution: 
// function consecutive(array) {
//   let l = array.length;
//   return l ? Math.max(...array) - Math.min(...array) - l + 1 : 0;
// }

// Test: 
// console.log(consecutive([4, 8, 6]))
// console.log(consecutive([1, 2, 3, 4]))
// console.log(consecutive([]))
// console.log(consecutive([1]))
