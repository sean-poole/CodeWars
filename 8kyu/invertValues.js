/* Invert Values */

/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

Examples: 
invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

You can assume that all values are integers. Do not mutate the input array/list.
*/

function invert(array) {
    return array.map(x => -x);
}

// Alternate solution:
// const invert = array => array.map(x => -x);

// Test: 
// test1 = [1, 2, 3, 4, 5]
// test2 = [1, -2, 3, -4, 5]
// test3 = []

// console.log(invert(test1))
// console.log(invert(test2))
// console.log(invert(test3))
