/* Find The Remainder */

/*
Task:
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.

Examples:
n = 17
m = 5
result = 2 (remainder of `17 / 5`)

n = 13
m = 72
result = 7 (remainder of `72 / 13`)

n = 0
m = -1
result = 0 (remainder of `0 / -1`)

n = 0
m = 1
result - division by zero (refer to the specifications on how to handle this in your language)
*/

/*
P - Two integers. (+) or (-).
R - The remainder of dividing the larger number by the smaller number as an integer.
E - 
result(17, 5)       // 2
result(13, 72)      // 7
result(0, -1)       // 0
result(0, 1)        // Divide by 0 returns NaN
P - 
function remainder(m, n) {
    // Determine which number is higher.
    // Divide by the smaller number and return the remainder.
}
*/

const remainder = (m, n) => m > n ? m % n : n % m;

// Test: 
// console.log(remainder(17, 5))
// console.log(remainder(13, 72))
// console.log(remainder(1, 0))
// console.log(remainder(0, 0))
