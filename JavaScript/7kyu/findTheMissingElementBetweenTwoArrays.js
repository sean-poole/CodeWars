/* Find The Missing Element Between Two Arrays */

/*
Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.
Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

> find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
> find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8

The first array will always have at least one element.
*/

/*
P - Two arrays of integers. The second array is a shuffled duplicate of the first array with one element missing.
R - Integer representing the missing number from the first array.
E - 
findMissing([1, 2, 3], [1, 3])          // 2
findMissing([7], [0])                   // 7
P - 
function findMissing(arr1, arr2) {
    // Reduce both arrays to equal the sum of its elements.
    // Subtract the second array from the first array and return the difference.
}
*/

const findMissing = (arr1, arr2) => arr1.reduce((acc, c) => acc += c, 0) - arr2.reduce((acc, c) => acc += c, 0);

// Test: 
// console.log(findMissing([1, 2, 3], [1, 3]))
// console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]))
// console.log(findMissing([7], [0]))
// console.log(findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]))
// console.log(findMissing([0, 0, 0, 0, 0], [0, 0, 0, 0]))
