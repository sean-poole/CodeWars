/* Maximum Subarray Sum */

/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

/*
P - One argument as an array of integers. Elements can be (+) or (-). Array can be empty.
R - Integer representing the maximum sum of a subsequence of numbers. Return 0 if the given array is empty.
E - 
maxSequence([])                                     // 0
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])        // 6
P - 
function maxSequence(arr) {
    // Create variables to store max sum and current sum values.
    // If the array is empty, return 0.
    // Iterate through the given array.
    // Store the greater value of the current element or the current element + max sum.
    // Store the greater value of the max sum or the current sum.
    // Return the max sum.
}
*/

function maxSequence(arr) {
    let maxSum = 0;
    let currentSum = 0;

    if (arr.length === 0) return 0;

    arr.forEach(n => {
        currentSum = Math.max(n, currentSum + n);
        maxSum = Math.max(maxSum, currentSum);
    });

    return maxSum;
}

// Test: 
// console.log(maxSequence([]))
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
