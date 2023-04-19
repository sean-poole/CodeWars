/* By 3 Or Not By 3 */

/*
A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

Given a series of digits as a string, determine if the number represented by the string is divisible by three.

Example:
> "123"      -> true
> "8409"     -> true
> "100853"   -> false
> "33333333" -> true
> "7"        -> false

Try to avoid using the % (modulo) operator.
*/

/* 
P - One argument as a string representing a number.
R - True / False based on if the numerical value of the given string is divisble by 3.
E - 
divisibleByThree("123")      // true
divisibleByThree("88")       // false
P - 
function divisibleByThree(str) {
    // Split the given string into an array where each element represents a single digit.
    // Reduce the array and divide the sum of digits by 3.
    // Compare sum / 3 === Math.floor(sum / 3) and return boolean.
}
*/

function divisibleByThree(str) {
    let sum = str.split("").reduce((acc, c) => acc += +(c), 0);
    return sum / 3 === Math.floor(sum / 3);
}

// Test: 
// console.log(divisibleByThree("123"))
// console.log(divisibleByThree("19254"))
// console.log(divisibleByThree("88"))
// console.log(divisibleByThree("1"))
