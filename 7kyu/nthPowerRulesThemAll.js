/* Nth Power Rules Them All */

/*
You are provided with an array of positive integers and an additional integer n (n > 1).
Calculate the sum of each value in the array to the nth power. Then subtract the sum of the original array.

Examples: 
> {1, 2, 3}, 3  -->  (1^3 + 2^3 + 3^3 ) - (1 + 2 + 3)  -->  36 - 6  -->  30
> {1, 2}, 5     -->  (1^5 + 2^5) - (1 + 2)             -->  33 - 3  -->  30
*/

/* 
P - Two arguments: One array of integers, one integer.
R - Integer representing the calculated sum of array values to the nth power subtracted by the sum of the original array.
E - 
modifiedSum([1, 2, 3], 3)       // 30
modifiedSum([1, 2], 5)          // 30
P - 
function modifiedSum(a, n) {
    // Iterate through the given array and raise each element to the power of n.
    // Reduce the mapped array to get the sum.
    // Reduce the original array to get the sum.
    // Subtract the sum of the original array from the mapped array.
    // Return result as an integer.
}
*/

const modifiedSum = (a, n) => a.map(e => Math.pow(e, n)).reduce((acc, c) => acc += c, 0) - a.reduce((acc, c) => acc += c, 0);

// Test: 
// console.log(modifiedSum([1, 2, 3], 3))
// console.log(modifiedSum([1, 2], 5))
