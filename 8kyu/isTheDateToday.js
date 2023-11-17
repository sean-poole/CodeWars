/* Is The Date Today */

/*
Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day.
*/

/*
P - One argument as a Date object.
R - Boolean representing if the given argument is today's date.
E - 
const today = new Date();
isToday(today)    // true

const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
isToday(tomorrow) // false
P - 
function isToday(date) {
  // Create a new Date object and convert to a string.
  // Convert the given Date object to a string.
  // Compare strings and return boolean.
}
*/

const isToday = date => new Date().toDateString() === date.toDateString();

// Test: 
const today = new Date();
// console.log(isToday(today))

const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
// console.log(isToday(tomorrow))
