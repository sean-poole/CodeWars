/* Validate Credit Card Number */

/*
In this Kata, you will implement the Luhn Algorithm, which is used to help validate credit card numbers.
Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.

Here is the algorithm:
Double every other digit, scanning from right to left, starting from the second digit (from the right).
Another way to think about it is: if there are an even number of digits, double every other digit starting with the first; if there are an odd number of digits, double every other digit starting with the second:
1714 ==> [1*, 7, 1*, 4] ==> [2, 7, 2, 4]
12345 ==> [1, 2*, 3, 4*, 5] ==> [1, 4, 3, 8, 5]
891 ==> [8, 9*, 1] ==> [8, 18, 1]

If a resulting number is greater than 9, replace it with the sum of its own digits (which is the same as subtracting 9 from it):
[8, 18*, 1] ==> [8, (1+8), 1] ==> [8, 9, 1]
or:
[8, 18*, 1] ==> [8, (18-9), 1] ==> [8, 9, 1]

Sum all of the final digits:
[8, 9, 1] ==> 8 + 9 + 1 = 18

Finally, take that sum and divide it by 10. If the remainder equals zero, the original credit card number is valid.
18 (modulus) 10 ==> 8 , which is not equal to 0, so this is not a valid credit card number
*/

/*
P - One argument as an integer.
R - Boolean representing if the given integer is a valid credit card number through application of the Luhn Algorithm.
E - 
validate(123)   // false
validate(1)     // false
validate(2121)  // true
validate(1230)  // true
P - 
function validate(n) {
  // Determine the number of digits in the given integer.
  // If there are an even number of digits, double every other digit starting from the first digit.
  // If there are an odd number of digits, double every other digit starting from the second digit.
  // If the resulting number > 9, replace it with the sum of its digits.
  // Calculate the sum of all the final digits and divide by 10. If the remainder equals 0, the number is valid.
  // Return boolean.
}
*/

function validate(n) {
  let isEven = String(n).length % 2 === 0;
  let arr = String(n).split("").map((e, i) => isEven ? (i % 2 === 0 ? +e + +e : +e) : (i % 2 ? +e + +e : +e));

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 9) {
      arr[i] = String(arr[i]).split("").reduce((acc, c) => acc += +c, 0);
    }
  }

  return arr.reduce((acc, c) => acc += c, 0) % 10 === 0;
}

// Test: 
// console.log(validate(123))
// console.log(validate(1))
// console.log(validate(2121))
// console.log(validate(1230))
// console.log(validate(891))
