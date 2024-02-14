/* Sum Of Differences In Array */

/*
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example: 
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]
Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
*/

/*
P - Array of integers.
R - Integer representing the sum of differences between consecutive pairs in the given array.
E - sumOfDifferences([1, 2, 10])        // 9
P - 
function sumOfDifferences(arr) {
    // Create an empty variable to store the sum.
    // Sort the given array in descending order.
    // Iterate through the array.
    // Add the value of (n - (n + 1)) to the created variable and return.
}
*/

function sumOfDifferences(arr) {
    let sum = 0;
    arr = arr.sort((a, b) => b - a);
    for (let i = 0; i < arr.length - 1; i++) {
        sum += arr[i] - arr[i + 1];
    }

    return sum;
}

// Alternate solution: 
// const sumOfDifferences = arr => arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;

// Test: 
// console.log(sumOfDifferences([1, 2, 10]))
// console.log(sumOfDifferences([-3, -2, -1]))
