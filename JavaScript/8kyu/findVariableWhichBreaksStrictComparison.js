/* Find Variable Which Breaks Strict Comparison */

/*
In JavaScript, there is a special case where strict comparison of the same variable returns false! Try to find out what must be done to get such result!

var x = something;
x === x // returns false!
Write a function which will return value for which strict comparison will give false!
*/

/*
P - No arguments.
R - Return a value so that strict comparison returns false.
E - testPassed(findStrangeValue())  // false;
P - 
function findStrangeValue() {
  // Return NaN.
}
*/

function findStrangeValue() {
  return NaN;
}

// Test: 
const x = findStrangeValue();
const testPassed = x => x === x;

// console.log(testPassed(x))
