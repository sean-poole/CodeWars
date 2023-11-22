/* Is Integer Safe To Use? */

/*
Not all integers can be represented by JavaScript/TypeScript. It has space to to represent 53bit signed integers. In this Kata, we've to determine if it is safe to use the integer or not. Make use of the latest ES6 features to find this.

SafeInteger(9007199254740990) //true
SafeInteger(-90) //true
SafeInteger(9007199254740992) //false
*/

/*
P - One argument as an integer.
R - Boolean representing if the given integer has space to be represented by 53 bits.
E - 
SafeInteger(9007199254740992)   // false
SafeInteger(9007199254740990)   // true
P - 
function SafeInteger(n) {
  // Apply isSafeinteger method to the given integer.
  // Return boolean.
}
*/

const SafeInteger = n => Number.isSafeInteger(n);

// Test: 
// console.log(SafeInteger(9007199254740992))
// console.log(SafeInteger(9007199254740990))
