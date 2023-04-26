/* Difference Of 2 */

/*
The objective is to return all pairs of integers from a given array of integers that have a difference of 2.
The result array should be sorted in ascending order of values.
Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.

Examples: 
> [1, 2, 3, 4]  should return [[1, 3], [2, 4]]
> [4, 1, 2, 3]  should also return [[1, 3], [2, 4]]
> [1, 23, 3, 4, 7] should return [[1, 3]]
> [4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]
*/

/*
P - One argument as an array of integers.
R - Array with elements representing pairs of integers from the given array with a difference of 2.
E - twoDifference([1, 2, 3, 4])     // [ [1, 3], [2, 4] ]
P - 
function twosDifference(input) {
    // Sort the given array in ascending order.
    // Filter the array for elements with a value of the current element + 2.
    // Map the array to contain [e, e + 2] pairs.
    // Return the array.
}
*/

function twosDifference(input) {
    return input.sort((a, b) => a - b)
                .filter(e => input.indexOf(e + 2) !== -1)
                .map(e => [e, e + 2]);
}

// Test: 
// console.log(twosDifference([1, 2, 3, 4]))
// console.log(twosDifference([1, 3, 4, 6]))
