/* Make The Deadfish Swim */

/*
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:
> i increments the value (initially 0)
> d decrements the value
> s squares the value
> o outputs the value into the return array

Invalid characters should be ignored.

> parse("iiisdoso") => [ 8, 64 ]
*/

/*
P - One argument as a string. Characters "i", "d", "s", & "o" initiate a command. Invalid characters are ignored.
R - Array of integers representing the given string decoded with the 4 commands listed above.
E - parse("iiisdoso")     // [8, 64]
P - 
function parse(data) {
  // Create an array variable to store values.
  // Create an integer variable to store the current number value.
  // Iterate through the characters of the given string.
  // If the character is "i", increment number by 1.
  // If the character is "d", decrement number by 1.
  // If the character is "s", square the number.
  // If the character is "o", add the number to the created array.
  // All other characters are ignored.
  // After all characters have been evaluated, return the array of integers.
}
*/

function parse(data) {
  let result = [];
  let n = 0;

  for (c of data) {
    switch (c) {
      case "i": n++; break;
      case "d": n--; break;
      case "s": n = Math.pow(n, 2); break;
      case "o": result.push(n);
      default: continue;
    }
  }

  return result;
}

// Test: 
// console.log(parse("iiisdoso"))
// console.log(parse("iiisxxxdoso"))
