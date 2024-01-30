/* Last Digits of a Number */

/*
Your job is to implement a function which returns the last D digits of an integer N as a list.

Special cases:
If D > (the number of digits of N), return all the digits.
If D <= 0, return an empty list.

Examples:
N = 1
D = 1
result = [1]

N = 1234
D = 2
result = [3, 4]

N = 637547
D = 6
result = [6, 3, 7, 5, 4, 7]
*/

/*
P - Two arguments as integers. 
R - Array representing the last d number of digits in the given integer n.
E - 
lastDigit(1, 1)                 // [1]
lastDigit(123767, 4)            // [3, 7, 6, 7]
lastDigit(0, 1)                 // [0]
lastDigit(34625647867585, 10)   // [5, 6, 4, 7, 8, 6, 7, 5, 8, 5]
lastDigit(1234, 0)              // []
lastDigit(24134, -4)            // []
lastDigit(1343, 5)              // [1, 3, 4, 3]
P - 
function lastDigit(n, d) {
  // Create an empty array variable to store digits.
  // Convert n into a string and split into an array.
  // If d > arr.length, return an array containing every digit of n.
  // If d <= 0, return an empty array.
  // Iterate through n, starting from the position of arr.length - d.
  // Push the current digit as an integer to the created array.
  // Return array of integers.
}
*/

function lastDigit(n, d) {
  let digits = [];
  let arr = String(n).split("");

  if (d > arr.length) return arr.map(e => +e);
  if (d <= 0) return [];

  for (let i = arr.length - d; i <= arr.length - 1; i++) {
    digits.push(Number(arr[i]));
  }

  return digits;
}

// Test: 
// console.log(lastDigit(1, 1))
// console.log(lastDigit(123767, 4))
// console.log(lastDigit(0, 1))
// console.log(lastDigit(34625647867585, 10))
// console.log(lastDigit(1234, 0))
// console.log(lastDigit(24134, -4))
// console.log(lastDigit(1343, 5))
