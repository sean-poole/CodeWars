/* Reduce But Grow */

/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

function grow(x) {
    return x.reduce((product, c) => product * c);
}

// Alternate solution:
// const grow = x => x.reduce((product, c) => product * c);

// Test: 
// test1 = [1, 2, 3]
// test2 = [4, 1, 1, 1, 4]
// test3 = [2, 2, 2, 2, 2, 2]

// console.log(grow(test1))
// console.log(grow(test2))
// console.log(grow(test3))
