/* Exclamation Marks Series #06: Remove N Exclamation Marks In The Sentence From Left To Right */

/*
Description:
Remove n exclamation marks in the sentence from left to right. n is positive integer.

Examples: 
remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"
*/

/*
P - One argument as a string, one argument as an integer.
R - String representing the given string with n exclamation marks removed.
E - 
remove("Hi!", 1)                  // "Hi"
remove("Hi!!!", 1)                // "Hi!!"
remove("!Hi", 1)                  // "Hi"
remove("!!!Hi !!hi!!! !hi", 3)    // "Hi !!hi!!! !hi"
P - 
function remove(s, n) {
  // Create a variable to store the given string.
  // Iterate from 0 to n.
  // Replace the first instance of "!" from the given string.
  // Increment loop counter.
  // Return the created string with exclamations removed.
}
*/

function remove(s, n) {
  let str = s;
  for (let i = 0; i < n; i++) {
    str = str.replace(/!/, "");
  }

  return str;
}

// Test: 
// console.log(remove("Hi!", 1))
// console.log(remove("Hi!", 100))
// console.log(remove("Hi!!!", 1))
// console.log(remove("Hi!!!", 100))
// console.log(remove("!Hi", 1))
// console.log(remove("!Hi!", 1))
// console.log(remove("!Hi!", 100))
// console.log(remove("!!!Hi !!hi!!! !hi", 1))
// console.log(remove("!!!Hi !!hi!!! !hi", 3))
// console.log(remove("!!!Hi !!hi!!! !hi", 5))
// console.log(remove("!!!Hi !!hi!!! !hi", 100))
