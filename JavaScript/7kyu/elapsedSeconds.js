/* Elapsed Seconds */

/*
Complete the function so that it returns the number of seconds that have elapsed between the start and end times given.

Tips:
> The start/end times are given as Date (JS/CoffeeScript), DateTime (C#), Time (Nim), datetime(Python) and Time (Ruby) instances.
> The start time will always be before the end time.
*/

const elapsedSeconds = (startDate, endDate) => (endDate - startDate) / 1000;

// Test: 
// const start = new Date(2013, 1, 1, 0, 0, 1);
// const end1 = new Date(2013, 1, 1, 0, 0, 2);
// const end2 = new Date(2013, 1, 1, 0, 0, 20);
// const end3 = new Date(2013, 1, 1, 0, 1, 20);

// console.log(elapsedSeconds(start, end1))
// console.log(elapsedSeconds(start, end2))
// console.log(elapsedSeconds(start, end3))
