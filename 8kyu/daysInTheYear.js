/* Days in the Year */

/*
A variation of determining leap years, assuming only integers are used and years can be negative and positive.

Write a function which will return the days in the year and the year entered in a string. For example:
> yearDays(2000) returns "2000 has 366 days"

There are a few assumptions we will accept the year 0, even though there is no year 0 in the Gregorian Calendar.

Also the basic rule for validating a leap year are as follows

Most years that can be divided evenly by 4 are leap years.

Exception: Century years are NOT leap years UNLESS they can be evenly divided by 400.

So the years 0, -64 and 2016 will return 366 days. Whilst 1974, -10 and 666 will return 365 days.
*/

/*
P - One argument as an integer.
R - String representing how many days are in the given year.
E - 
yearDays(2000)    // "2000 has 366 days"
yearDays(1974)    // "1974 has 365 days"
P - 
function yearDays(year) {
  // Create a variable to store the number of days as an integer, starting at 365.
  // If the given year is divisible by 100 and 400, set days to 366.
  // Else if the given year is not divisible by 100 but is divisible by 4, set days to 366.
  // Else, set days to 365.
  // Return string.
}
*/

function yearDays(year) {
  let days = 365;
  if (year % 100 === 0 && year % 400 === 0) {
    days = 366;
  } else if (year % 100 !== 0 && year % 4 === 0) {
    days = 366;
  } else {
    days = 365;
  }

  return `${year} has ${days} days`
}

// Test: 
// console.log(yearDays(0))
// console.log(yearDays(-64))
// console.log(yearDays(2016))
// console.log(yearDays(1974))
// console.log(yearDays(-10))
// console.log(yearDays(666))
// console.log(yearDays(1857))
