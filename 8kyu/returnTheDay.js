/* Return The Day */

/*
Complete the function which returns the weekday according to the input number:
> 1 returns "Sunday"
> 2 returns "Monday"
> 3 returns "Tuesday"
> 4 returns "Wednesday"
> 5 returns "Thursday"
> 6 returns "Friday"
> 7 returns "Saturday"
> Otherwise returns "Wrong, please enter a number between 1 and 7"
*/

/*
P - One argument as an integer. Will always be (+).
R - String representing the day of the week that the given integer matches with.
E - 
whatday(1)    // "Sunday"
whatday(2)    // "Monday"
whatday(3)    // "Tuesday"
whatday(8)    // "Wrong, please enter a number between 1 and 7"
whatday(20)   // "Wrong, please enter a number between 1 and 7"
P - 
function whatday(num) {
  // Create switch case to match inputs between 1 - 7 to a day of the week.
  // Return string.
}
*/

function whatday(num) {
  switch (num) {
    case 1: return "Sunday";
    case 2: return "Monday";
    case 3: return "Tuesday";
    case 4: return "Wednesday";
    case 5: return "Thursday";
    case 6: return "Friday";
    case 7: return "Saturday";
    default: return "Wrong, please enter a number between 1 and 7";
  }
}

// Test: 
// console.log(whatday(1))
// console.log(whatday(2))
// console.log(whatday(3))
// console.log(whatday(8))
// console.log(whatday(20))
