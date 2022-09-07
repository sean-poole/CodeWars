/* Square(n) Sum */

/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

function squareSum(arr) {
    squareNums = arr.map(x => x**2)
    return squareNums.reduce((acc, c) => acc + c, 0)
}

// function squareSum(arr) {
//     return arr.reduce((acc, c) => acc + (c**2), 0);
// }
