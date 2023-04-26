/* No Loops 02 - You Only Need One */

/*
*** No Loops Allowed ***

You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.

Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.
*/

/*
P - Two arguments: One array containing numbers or strings, and one variable also containing a number or string.
R - Boolean based on if the given array contains the given variable.
E - 
check([80, 117, 115, 104, 45, 85, 112, 115], 45)        // true
check(['what', 'a', 'great', 'kata'], 'kat')            // false
P - 
function check(a, x) {
    // Iterate through the array to check if an element === the given variable.
    // Return boolean.
}
*/

const check = (a, x) => a.some(e => e === x);

// Test: 
// console.log(check([66, 101], 66))
// console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45))
// console.log(check(['t', 'e', 's', 't'], 'e'))
// console.log(check(['what', 'a', 'great', 'kata'], 'kat'))
