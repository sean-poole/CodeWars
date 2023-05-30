/* Leap Years */

/*
In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:
> years divisible by 4 are leap years
> but years divisible by 100 are not leap years
> but years divisible by 400 are leap years

Additional Notes:
> Only valid years (positive integers) will be tested, so you don't have to validate them

Examples can be found in the test fixture.
*/

/*
P - One argument as an integer.
R - Boolean representing if the given integer is a leap year.
E - 
isLeapYear(1234)    // false
isLeapYear(1984)    // true
P - 
function isLeapYear(year) {
  // Check if the given year is divisible by 4 and not divisible by 100.
  // Or if the given year is divisible by 400.
  // Return Boolean.
}
*/

const isLeapYear = year => (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;

// Test: 
// console.log(isLeapYear(1234))
// console.log(isLeapYear(1984))
// console.log(isLeapYear(2000))
// console.log(isLeapYear(2010))
// console.log(isLeapYear(2013))
