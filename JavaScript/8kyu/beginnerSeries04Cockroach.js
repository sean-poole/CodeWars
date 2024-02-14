/* Beginner Series #4 Cockroach */

/*
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
*/

const cockroachSpeed = s => Math.floor(s / 0.036);

// Alternate solution: 
// function cockroachSpeed(s) {
//     const secInHour = 3600;
//     const centInKm = 100000;

//     return Math.floor((s * centInKm) / secInHour)
// }

// Test: 
// console.log(cockroachSpeed(1.08))
// console.log(cockroachSpeed(1.09))
// console.log(cockroachSpeed(0))
