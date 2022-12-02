/* Summing A Number's Digits */

/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
*/

function sumDigits(number) {
    return Math.abs(number)
            .toString()
            .split("")
            .map(x => Number(x))
            .reduce((sum, c) => sum += c, 0);
}

// Test: 
// console.log(sumDigits(10))
// console.log(sumDigits(99))
// console.log(sumDigits(-32))
