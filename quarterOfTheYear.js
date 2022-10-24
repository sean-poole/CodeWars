/* Quarter Of The Year */

/*
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
*/

const quarterOf = month => Math.ceil(month / 3);

// Test: 
// console.log(quarterOf(3))
// console.log(quarterOf(8))
// console.log(quarterOf(11))
