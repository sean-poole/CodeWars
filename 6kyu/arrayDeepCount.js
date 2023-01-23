/* Array Deep Count */

/*
You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

Examples: 
[]                   -->  0
[1, 2, 3]            -->  3
["x", "y", ["z"]]    -->  4
[1, 2, [3, 4, [5]]]  -->  7

The input will always be an array.
*/

function deepCount(a) {
    return a.reduce((acc, c) => Array.isArray(c) ? acc += deepCount(c) : acc, a.length);
}

// Test: 
// console.log(deepCount([]))
// console.log(deepCount([1, 2, 3]))
// console.log(deepCount(["x", "y", ["z"]]))
// console.log(deepCount([1, 2, [3, 4, [5]]]))
// console.log(deepCount([[[[[[[[[]]]]]]]]]))
