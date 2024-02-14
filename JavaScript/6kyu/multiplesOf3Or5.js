/* Multiples Of 3 Or 5 */

/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

/*
P - One argument as an integer.
R - Integer representing the sum of all multiples of 3 or 5 below the given integer.
E - solution(10)        // 23
P - 
function solution(number) {
    // Create an empty array to store multiples.
    // Create a for loop from 1 to the given number - 1.
    // Check if the iteration count is divisible by 3 or 5.
    // If it is divisible, push the iteration count to the array.
    // Reduce the array to get the sum of its elements.
    // Return the integer.
}
*/

function solution(number) {
    let sum = [];
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) sum.push(i);
    }

    return sum.reduce((acc, c) => acc += c, 0);
}

// Test: 
// console.log(solution(10))
