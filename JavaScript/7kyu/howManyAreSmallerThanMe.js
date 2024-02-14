/* How Many Are Smaller Than Me? */

/*
Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

For example:
> Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
> Input [1, 2, 0] => Output [1, 1, 0]
*/

/*
P - One argument as an array of integers.
R - Array with elements containing the amount of numbers that are less than its value at arr[i] in the given array.
E - 
smaller([5, 4, 3, 2, 1])        // [4, 3, 2, 1, 0]
smaller([1, 2, 3])              // [0, 0, 0]
P - 
function smaller(nums) {
    // Iterate through the given array.
    // Map each element to...
    // Slice a copy of the given array from its current index to the end of the array.
    // Filter the elements that are less than its value at the current index and return the length of each filtered array.
    // Return the array.
}
*/

const smaller = nums => nums.map((e, i, a) => a.slice(i).filter(e => a[i] > e).length);

// Test: 
// console.log(smaller([5, 4, 3, 2, 1]))
// console.log(smaller([1, 2, 3]))
// console.log(smaller([1, 2, 0]))
// console.log(smaller([1, 2, 1]))
// console.log(smaller([1, 1, -1, 0, 0]))
// console.log(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]))
