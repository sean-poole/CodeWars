/* Stringy Strings */

/*
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
the string should start with a 1.

a string with size 6 should return :'101010'.
with size 4 should return : '1010'.
with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/

/*
P - One argument as an integer. Will always be (+) and whole number.
R - String with length of the given integer. Alternate "1" & "0", starting with "1".
E - 
stringy(5)          // "10101"
stringy(6)          // "101010"
P - 
function stringy(size) {
    // Create an empty string.
    // Iterate through a loop for duration of size.
    // If iteration is even, add "1" to the string.
    // Else iteration is odd, add "0" to the string.
    // Return string.
}
*/

function stringy(size) {
    let result = "";
    for (let i = 0; i < size; i++) {
        result += i % 2 ? "0" : "1";
    }

    return result;
}

// Alternate solution: 
// const stringy = size => "".padStart(size, "10");

// Test: 
// console.log(stringy(5))
// console.log(stringy(6))
