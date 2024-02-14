/* Remove The Time */

/*
Task Description: 
You're re-designing a blog, and the blog's posts have the Weekday Month Day, time format for showing the date and time when a post was made, e.g., Friday May 2, 7pm.

You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

Write a function that takes the website date/time in its original string format and returns the shortened format.

Input: 
Input will always be a string, e.g., "Friday May 2, 7pm". 

Output: 
Output will be the shortened string, e.g., "Friday May 2".
*/

/*
P - One argument as a string.
R - String representing the given string with the time removed.
E - 
shortenToDate("Friday May 2, 9am")          // "Friday May 2"
shortenToDate("Tuesday January 29, 10pm")   // "Tuesday January 29"
shortenToDate("Monday December 25, 10pm")   // "Monday December 25"
P - 
function shortenToDate(longDate) {
  // Split the string at the "," into an array.
  // Return the first element representing the day and date as a string.
}
*/

const shortenToDate = longDate => longDate.split(",")[0];

// Test: 
// console.log(shortenToDate("Friday May 2, 9am"))
// console.log(shortenToDate("Tuesday January 29, 10pm"))
// console.log(shortenToDate("Monday December 25, 10pm"))
