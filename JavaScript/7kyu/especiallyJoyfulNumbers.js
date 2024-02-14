/* Especially Joyful Numbers */

/*
Positive integers that are divisible exactly by the sum of their digits are called Harshad numbers. The first few Harshad numbers are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, ...

We are interested in Harshad numbers where the product of its digit sum s and s with the digits reversed, gives the original number n. For example consider number 1729:
> its digit sum, s = 1 + 7 + 2 + 9 = 19
> reversing s = 91
> and 19 * 91 = 1729 --> the number that we started with.

Complete the function which tests if a positive integer n is Harshad number, and returns True if the product of its digit sum and its digit sum reversed equals n; otherwise return False.
*/

/*
P - One argument as an integer.
R - Boolean representing if the given integer is a Harshad number, and if the product of the sum of its digits and its digit sum reversed is equal to the given integer.
E - 
numberJoy(1997)   // false
numberJoy(1998)   // false
numberJoy(1729)   // true
numberJoy(18)     // false
numberJoy(1)      // true
numberJoy(81)     // true
numberJoy(1458)   // true
P - 
function numberJoy(n) {
  // Check if the given integer is a Harshad number (divisible by the sum of its digits).
  // Check if the product of its digit sum and digit sum reversed is equal to the given integer.
  // Return boolean.
}
*/

function numberJoy(n) {
  return isHarshad(n) && checkProduct(n);
}

function isHarshad(n) {
  let digitSum = String(n).split("").reduce((acc, c) => acc += +c, 0);
  return n % digitSum === 0;
}

function checkProduct(n) {
  let digitSum = String(n).split("").reduce((acc, c) => acc += +c, 0);
  let reverseSum = String(digitSum).split("").reverse().join("");
  return digitSum * reverseSum === n;
}

// Test: 
// console.log(numberJoy(1997))
// console.log(numberJoy(1998))
// console.log(numberJoy(1729))
// console.log(numberJoy(18))
// console.log(numberJoy(1))
// console.log(numberJoy(81))
// console.log(numberJoy(1458))
