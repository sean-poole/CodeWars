/* Training JS #6: Basic Data Types - Boolean and Conditional Statements */

/*
In javascript, Boolean object only has two value, true or false. Use ===, ==, >, <, >=, <= between two variables(or constant), the result of such an expression is a bool value. The operation between the two bool values can be used with logical operators:&&, ||, ! or some bitwise operators:&, |, ^

Many of the data are likely to be implicitly converted to Boolean values in a given context, most common in conditional statements. In other words, the Boolean value is mainly used for conditional judgment. Look this example:
> var arr=[];
> ...
> ...
> ......
> if (arr.length) return "arr has elements";
> else            return "arr is empty";

You can see, arr is defined as an array, arr.length should be a number value, but in this example, the number value should convert to bool value. it means, if arr.length value is 0, convert value to false, if arr.length value is not 0, convert value to true.

These values are converted to false in the conditional statement:
> 0, -0, "", null, undefined, NaN

Task: 
Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".
*/

/*
P - One argument as a boolean.
R - String representing the given boolean.
E - 
trueOrFalse(1 > 2)    // "false"
trueOrFalse(1 === 1)  // "true"
trueOrFalse(1 !== 2)  // "true"
P - 
function trueOrFalse(val) {
  // If the given val represents true, return string "true".
  // Else, return string "false".
}
*/

const trueOrFalse = val => val ? "true" : "false";

// Alternate solution: 
// const trueOrFalse = val => Boolean(val).toString();

// Test: 
const a = 1;
const b = 2;
const c = 1;

// console.log(trueOrFalse(a > b))
// console.log(trueOrFalse(a === b))
// console.log(trueOrFalse(a < b))
// console.log(trueOrFalse(a !== b))
// console.log(trueOrFalse(b > c))
// console.log(trueOrFalse(b === c))
// console.log(trueOrFalse(b < c))
// console.log(trueOrFalse(b !== c))
// console.log(trueOrFalse(a === c))
// console.log(trueOrFalse(a !== c))
