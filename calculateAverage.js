/* Calculate Average */

/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

function findAverage(array) {
    return array.length === 0 ? 0 : array.reduce((sum, c) => sum + c, 0) / array.length;
}

// Test
// test1 = [1, 1, 1]
// test2 = [1, 2, 3]
// test3 = [1, 2, 3, 4]
// test4 = []
// console.log(findAverage(test1))
// console.log(findAverage(test2))
// console.log(findAverage(test3))
// console.log(findAverage(test4))
