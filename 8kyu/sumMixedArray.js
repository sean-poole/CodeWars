/* Sum Mixed Array */

/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

const sumMix = x => x.reduce((acc, c) => acc += Number(c), 0);

// Test: 
// test1 = [9, 3, '7', '3']
// test2 = ['5', '0', 9, 3, 2, 1, '9', 6, 7]
// test3 = ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']

// console.log(sumMix(test1))
// console.log(sumMix(test2))
// console.log(sumMix(test3))
