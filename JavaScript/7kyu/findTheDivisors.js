/* Find The Divisors */

/*
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"
*/

/*
P - One argument as an integer. Will always be greater than 1.
R - Array of all numbers that the given integer is divisble by, excluding 1 and itself. If the given integer is a prime number, return "${integer} is prime".
E - 
divisors(15)        // [3, 5]
divisors(13)        // "13 is prime"
P - 
function divisors(integer) {
    // Create an empty array to store divisors.
    // Create a for loop from 2 to integer - 1.
    // Check if the integer is divisible by the iteration count.
    // If it is divisible, push the iteration count to the array.
    // Return the array.
    // If the array is empty, return a string indicating that the given integer is a prime number.
}
*/

function divisors(integer) {
    let nums = [];
    for (let i = 2; i < integer; i++) {
        if (integer % i === 0) nums.push(i);
    }

    return nums.length > 1 ? nums : `${integer} is prime`;
}

// Test: 
// console.log(divisors(15))
// console.log(divisors(12))
// console.log(divisors(13))
