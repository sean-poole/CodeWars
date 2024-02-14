/* Factorial */

/*
Your task is to write function factorial.
*/

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

// Alternate solution:
// const factorial = n => n ? factorial(n - 1) * n : 1;

// Test: 
// console.log(factorial(0))
// console.log(factorial(1))
// console.log(factorial(4))
// console.log(factorial(7))
// console.log(factorial(17))
