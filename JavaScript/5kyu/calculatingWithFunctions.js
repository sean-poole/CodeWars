/* Calculating With Functions */

/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:
> seven(times(five())); // must return 35
> four(plus(nine())); // must return 13
> eight(minus(three())); // must return 5
> six(dividedBy(two())); // must return 3

Requirements:
> There must be a function for each number from 0 ("zero") to 9 ("nine")
> There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
> Each calculation consist of exactly one operation and two numbers
> The most outer function represents the left operand, the most inner function represents the right operand
> Division should be integer division. For example, this should return 2, not 2.666666...:

eight(dividedBy(three()));
*/

/*
P - Multiple arguments as functions.
R - Integer that represents the calculation of the given arguments.
E - 
seven(times(five()))    // 35
four(plus(nine()))      // 13
eight(minus(three()))   // 5
six(dividedBy(two()))   // 3
P - 
  // If a function argument is passed, return the result of calling that function with its respective numeric value. Else, return the numeric value itself.
  // If the function argument is a mathmatical operation, apply that operation to the provided values.
  // Return integer.
*/

const zero = func => { return func ? func(0) : 0 }
const one = func => { return func ? func(1) : 1 }
const two = func => { return func ? func(2) : 2 }
const three = func => { return func ? func(3) : 3 }
const four = func => { return func ? func(4) : 4 }
const five = func => { return func ? func(5) : 5 }
const six = func => { return func ? func(6) : 6 }
const seven = func => { return func ? func(7) : 7 }
const eight = func => { return func ? func(8) : 8 }
const nine = func => { return func ? func(9) : 9 }

const plus = b => { return function(a) { return a + b }}
const minus = b => { return function(a) { return a - b }}
const times = b => { return function(a) { return a * b }}
const dividedBy = b => { return function(a) { return Math.floor(a / b) }}

// Test: 
// console.log(seven(times(five())))
// console.log(four(plus(nine())))
// console.log(eight(minus(three())))
// console.log(six(dividedBy(two())))
