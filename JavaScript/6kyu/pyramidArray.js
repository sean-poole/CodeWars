/* Pyramid Array */

/*
Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]

Note: the subarrays should be filled with 1s
*/

/*
P - One argument as an integer.
R - Array with subarrays of ascending length until it has a length of the given integer. Subarray elements will always be 1.
E - 
pyramid(0)    // []
pyramid(1)    // [[1]]
pyramid(2)    // [[1], [1, 1]]
pyramid(3)    // [[1], [1, 1], [1, 1, 1]]
P - 
function pyramid(n) {
  // Create an empty array variable to store subarrays.
  // Iterate up to the given integer.
  // Create a subarray with a length of the current iteration + 1.
  // Fill the subarray with 1.
  // Push the subarray to the created array.
  // Return array of subarrays containing elements of 1.
}
*/

function pyramid(n) {
  let result = [];

  for (let i = 0; i < n; i++) {
    result.push([...Array(i + 1).fill(1)]);
  }

  return result;
}

// Test: 
// console.log(pyramid(0))
// console.log(pyramid(1))
// console.log(pyramid(2))
// console.log(pyramid(3))
