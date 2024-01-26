/* Is Really NaN */

/*
I've hit a few bugs in my Java/Type/Coffee-script code recently, and I've traced the problem back to the global isNaN function I was using. I had expected it to be more discerning, but it's returning true for undefined right now.

Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, and returns false otherwise.

Any solution is acceptable!
*/

/*
P - One argument of any type.
R - Boolean representing if the given argument evaluates to NaN.
E - 
isReallyNaN(37)         // false
isReallyNaN("37")       // false
isReallyNaN(NaN)        // true
isReallyNaN(undefined)  // false
P - 
function isReallyNaN(val) {
  // Check if the given value is NaN.
  // Return boolean.
}
*/

const isReallyNaN = val => Number.isNaN(val);

// Test: 
// console.log(isReallyNaN(37))
// console.log(isReallyNaN("37"))
// console.log(isReallyNaN(NaN))
// console.log(isReallyNaN(undefined))
