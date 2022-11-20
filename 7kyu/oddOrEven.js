/* Odd Or Even */

/*
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
*/

const oddOrEven = array => (array.reduce((acc, c) => acc += c, 0)) % 2 == 0 ? "even" : "odd";

// Test: 
console.log(oddOrEven([]))
console.log(oddOrEven([0]))
console.log(oddOrEven([0, 1, 5]))
console.log(oddOrEven([0, 1, 2]))
console.log(oddOrEven([0, -1, -4]))
