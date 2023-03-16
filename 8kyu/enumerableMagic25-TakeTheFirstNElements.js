/* Enumerable Magic #25 - Take The First N Elements */

/*
Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
*/

/*
P - Array and a number. N must be (+).
R - An array of the first N elements from the given array.
E - take([0, 1, 2, 3, 5, 8, 13], 3)     // [0, 1, 2]
P - 
function take(arr, n) {
    // Slice and return the first n elements.
}
*/

const take = (arr, n) => arr.slice(0, n);

// Test: 
// console.log(take([0, 1, 2, 3, 5, 8, 13], 3))
