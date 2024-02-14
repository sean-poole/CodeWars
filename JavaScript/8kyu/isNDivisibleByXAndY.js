/* Is N Divisible By X And Y */

/*
Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
*/

/*
P - Three arguements as integers. Only (+) and non-zero inputs.
R - Boolean determined by if n is divisible by both x and y.
E - 
isDivisible(3, 3, 4)        // false
isDivisible(12, 3, 4)       // true
P - 
function isDivisible(n, x, y) {
    // Check if n % x === 0 and n % y === 0.
    // Return true / false based on this conditional.
}
*/

const isDivisible = (n, x, y) => n % x === 0 && n % y === 0 ? true : false;

// Test: 
// console.log(isDivisible(3, 3, 4))
// console.log(isDivisible(12, 3, 4))
// console.log(isDivisible(8, 3, 4))
// console.log(isDivisible(48, 3, 4))
