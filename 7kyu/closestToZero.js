/* Closest To Zero */

/*
Simply find the closest value to zero from the list. Notice that there are negatives in the list.

List is always not empty and contains only integers. Return None if it is not possible to define only one of such values. And of course, we are expecting 0 as closest value to zero.

Examples:
[2, 4, -1, -3]  => -1
[5, 2, -2]      => None
[5, 2, 2]       => 2
[13, 0, -6]     => 0
*/

/*
P - One argument as an array of integers. Array is never empty and will only contain integers.
R - Integer representing the element in the given array that is closest to 0. If two elements are the same distance away from 0, return null.
E - 
closest([10, 3, 9, 1])            // 1
closest([2, 4, -1, -3])           // -1
closest([13, 0, -6])              // 0
closest([5, 1, -1, 2, -10])       // null
closest([5, 11, 11, 2, -1, 1])    // null
P - 
function closest(arr) {
  // Create a variable to store a new set using the given array and sort in ascending order of the element's absolute value.
  // If the absolute values of the first and second elements are not equal, return the first element.
  // Else, return null.
}
*/

function closest(arr) {
  let sorted = [...new Set(arr)].sort((a, b) => Math.abs(a) - Math.abs(b));
  return Math.abs(sorted[0]) !== Math.abs(sorted[1]) ? sorted[0] : null;
}

// Test: 
// console.log(closest([10, 3, 9, 1]))
// console.log(closest([2, 4, -1, -3]))
// console.log(closest([13, 0, -6]))
// console.log(closest([5, 1, -1, 2, -10]))
// console.log(closest([5, 11, 11, 2, -1, 1]))
