/* Does My Number Look Big In This */

/*
A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcissistic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
The Challenge:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.
*/

/*
P - One argument as an integer.
R - Boolean representing if the given integer is equal to the sum of the integer's digits raised to the power of the number of digits.
E - 
narcissistic(153)     // 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153, Returns: true
narcissistic(122)     // 1^3 + 2^3 + 2^3 = 1 + 8 + 8 = 17, Returns: false
P - 
function narcissistic(value) {
  // Convert the given integer into a string and split into an array where each element represents a digit.
  // Create a variable that stores the number of digits.
  // Map the array to raise the power of each element by the number of digits.
  // Reduce the array to get the sum and compare with the original given integer.
  // Return boolean comparing if the two values equal each other.
}
*/

function narcissistic(value) {
  let convertedNum = String(value).split("");
  let digits = convertedNum.length;

  let convertedSum = convertedNum.map(e => Math.pow(+e, digits)).reduce((acc, c) => acc += c, 0);

  return convertedSum === value;
}

// Alternate solution: 
// const narcissistic = value => String(value).split("").map((e, i, a) => Math.pow(+e, a.length)).reduce((acc, c) => acc += c, 0) === value;

// Test: 
// console.log(narcissistic(7))
// console.log(narcissistic(153))
// console.log(narcissistic(122))
// console.log(narcissistic(487))
