/* Reverse A Number */

/*
Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)
Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

Examples: 
 123 ->  321
-456 -> -654
1000 ->    1
*/

function reverseNumber(n) {
    return n > 0 ? Number(String(n).split("").reverse().join("")) : -Number(String(n).slice(1).split("").reverse().join(""));
}

// Alternate solution: 
// const reverseNumber = n => (n > 0 ? 1 : -1) * Math.abs(n).toString().split("").reverse().join("");

// Test: 
// console.log(reverseNumber(123))
// console.log(reverseNumber(-123))
// console.log(reverseNumber(1000))
// console.log(reverseNumber(4321234))
// console.log(reverseNumber(5))
// console.log(reverseNumber(0))
// console.log(reverseNumber(98989898))
