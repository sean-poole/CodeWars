/* Between Extremes */

/*
Given an array of numbers, return the difference between the largest and smallest values.

For example:
> [23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).
> [1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.
*/

/* 
P - One argument as an array of integers. Will contain at least two elements. Elements can be (+) or (-).
R - Integer representing the difference between the largest and smallest values of the given array.
E - betweenExtremes([21, 34, 54, 43, 26, 12])       // 42
P - 
function betweenExtremes(numbers) {
    // Return the difference of Math.max(...numbers) and Math.min(...numbers);
}
*/

const betweenExtremes = numbers => Math.max(...numbers) - Math.min(...numbers);

// Test: 
// console.log(betweenExtremes([21, 34, 54, 43, 26, 12]))
// console.log(betweenExtremes([-1, -41, -77, -100]))
