/* Dangerous Dates */

/*
Fix this function so that it correctly outputs a list of the next five days (starting after the input date). Each date should be in the format M/D/YYYY. i.e. March 12th 2013 would be 3/12/2013.

Example output: "3/14/2013, 3/15/2013, 3/16/2013, 3/17/2013, 3/18/2013"

There's a hard way to do this and there's a right way.
*/

/*
P - One argument as a Date object.
R - String representing the next 5 days from the given argument.
E - 
nextFiveDays(new Date(2023, 7, 4))
// "8/5/2023, 8/6/2023, 8/7/2023, 8/8/2023, 8/9/2023"
P - 
function nextFiveDays(date) {
  // Create variables to store the day, month, and year of the given date.
  // Create an array variable which will be used to store the next 5 dates.
  // Create a for loop which iterates 5 times, starting from 1.
  // Add the iteration count to the day and push the result to the created array.
  // Join the array with ", ".
  // Return as string.
}
*/

function nextFiveDays(date) {
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  const dates = [];

  for (let i = 1; i <= 5; i++) {
    dates.push(new Date(year, month, day + i).toLocaleDateString("en"));
  }

  return dates.join(", ");
}

// Test: 
// console.log(nextFiveDays(new Date()))
