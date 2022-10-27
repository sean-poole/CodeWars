/* Array Plus Array */

/*
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((s, c) => s += c);

// Test: 
// test1a = [1, 2, 3]
// test1b = [4, 5, 6]

// test2a = [-1, -2, -3]
// test2b = [-4, -5, -6]

// test3a = [0, 0, 0]
// test3b = [4, 5, 6]

// console.log(arrayPlusArray(test1a, test1b))
// console.log(arrayPlusArray(test2a, test2b))
// console.log(arrayPlusArray(test3a, test3b))
