/* Sum Even Numbers */

/*
Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

Only numbers without decimals like 4 or 4.0 can be even.

The input is a sequence of numbers: integers and/or floats.

Examples
[4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
[]                               -->  0
/*

/*
P - One argument as an array of integers.
R - Integer representing the sum of even integers in the given array.
E - 
sumEvenNumbers([4, 3, 1, 2, 5, 10, 6, 7, 9, 8])   // 30
sumEvenNumbers([])                                // 0
P - 
function sumEvenNumbers(input) {
  // Filter the given array to only include even integers.
  // Reduce the filtered array to get the sum of even integers.
  // Return integer.
}
*/

const sumEvenNumbers = input => input.filter(n => n % 2 === 0).reduce((acc, c) => acc += c, 0);

// Test: 
// console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
