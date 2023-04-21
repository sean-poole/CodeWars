/* String Incrementer */

/*
Your job is to write a function which increments a string, to create a new string.
> If the string already ends with a number, the number should be incremented by 1.
> If the string does not end with a number. the number 1 should be appended to the new string.

Examples:
foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/

/*
P - One argument as a string.
R - Given string with trailing number incremented by 1. If string does not end with a number, append 1.
E - 
incrementString("foobar000")        // "foobar001"
incrementString("foobar999")        // "foobar1000"
incrementString("foo")              // "foo1"
incrementString("1")                // "2"
P - 
function incrementString(string) {
    // Match a sequence of digits at the end of the given string that is either 0 - 8, or 9 with at least one digit in front of it.
    // Increment the matched substring by 1.
    // If no substring is found, append 1.
    // Returned the formatted string.
}
*/

const incrementString = string => string.replace(/([0-8]|\d?9+)?$/, (e) => (e ? +e + 1 : 1));

// Test: 
// console.log(incrementString("foobar000"))
// console.log(incrementString("foobar999"))
// console.log(incrementString("foobar00999"))
// console.log(incrementString("foo"))
// console.log(incrementString("foobar001"))
// console.log(incrementString("foobar1"))
// console.log(incrementString("1"))
// console.log(incrementString("009"))
// console.log(incrementString("fo99obar99"))
