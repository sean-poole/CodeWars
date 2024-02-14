/* Exclamation Series #2 - Remove All Exclamation Marks From The End Of Sentence */

/*
Description:
Remove all exclamation marks from the end of sentence.

Examples: 
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/

/*
P - One argument as a string.
R - String representing the given string with exclamation marks removed from the end.
E - 
remove("Hi!")       // "Hi"
remove("Hi!!!")     // "Hi"
remove("!Hi")       // "!Hi"
remove("!hi!")      // "!hi"
remove("Hi! Hi!")   // "Hi! Hi"
remove("Hi")        // "Hi"
P - 
function remove(string) {
  // While the last element of the given string is "!" ...
  // ... remove the last element.
  // Return string.
}
*/

function remove(string) {
  while (string.lastIndexOf("!") === string.length - 1) {
    string = string.slice(0, string.length - 1);
  }

  return string;
}

// Test: 
console.log(remove("Hi!"))
console.log(remove("Hi!!!"))
console.log(remove("!Hi"))
console.log(remove("!hi!"))
console.log(remove("Hi! Hi!"))
console.log(remove("Hi"))
