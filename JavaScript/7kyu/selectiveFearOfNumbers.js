/* Selective Fear of Numbers */

/*
I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm afraid of depends on which day of the week it is... This is a concrete description of my mental illness:

Monday --> 12
Tuesday --> numbers greater than 95
Wednesday --> 34
Thursday --> 0
Friday --> numbers divisible by 2
Saturday --> 56
Sunday --> 666 or -666

Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean)
*/

/*
P - One argument as a string representing a day of the week and one argument as an integer (can be positive, negative, or zero). 
R - Boolean representing if the given number is disliked on the given day of the week.
E - 
amIAfraid("Monday", 13)     // false
amIAfraid("Sunday", -666)   // true
amIAfraid("Tuesday", 2)     // false
amIAfraid("Tuesday", 965)   // true
amIAfraid("Friday", 2)      // true
P - 
function amIAfraid(day, num) {
  // Create a switch case statement to evaluate the given day of the week.
  // After determining the day of the week, evaluate if the given number is disliked on that day.
  // Return boolean.
}
*/

function amIAfraid(day, num) {
  switch (day) {
    case "Sunday": return num === 666 || num === -666;
    case "Monday": return num === 12;
    case "Tuesday": return num > 95;
    case "Wednesday": return num === 34;
    case "Thursday": return num === 0;
    case "Friday": return num % 2 === 0;
    case "Saturday": return num === 56;
  }
}

// Test: 
// console.log(amIAfraid("Monday", 13))
// console.log(amIAfraid("Sunday", -666))
// console.log(amIAfraid("Tuesday", 2))
// console.log(amIAfraid("Tuesday", 965))
// console.log(amIAfraid("Friday", 2))
