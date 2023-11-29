/* Scaling Squared Strings */

/*
You are given a string of n lines, each substring being n characters long. For example:
s = "abcd\nefgh\nijkl\nmnop"

We will study the "horizontal" and the "vertical" scaling of this square of strings.

A k-horizontal scaling of a string consists of replicating k times each character of the string (except '\n').

Example: 2-horizontal scaling of s: => "aabbccdd\neeffgghh\niijjkkll\nmmnnoopp"
A v-vertical scaling of a string consists of replicating v times each part of the squared string.

Example: 2-vertical scaling of s: => "abcd\nabcd\nefgh\nefgh\nijkl\nijkl\nmnop\nmnop"
Function scale(strng, k, v) will perform a k-horizontal scaling and a v-vertical scaling.

Example: a = "abcd\nefgh\nijkl\nmnop"
scale(a, 2, 3) --> "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp"
Printed:
abcd   ----->   aabbccdd
efgh            aabbccdd
ijkl            aabbccdd
mnop            eeffgghh
                eeffgghh
                eeffgghh
                iijjkkll
                iijjkkll
                iijjkkll
                mmnnoopp
                mmnnoopp
                mmnnoopp

Task:
Write function scale(strng, k, v) k and v will be positive integers. If strng == "" return "".
*/

/*
P - One argument as a string. Two arguments as integers. String can be empty. Integers will always be positive.
R - String representing the given string with horizontal and vertical scaling based on the given integers.
E - scale("Kj\nSH", 1, 2)   // "Kj\nKj\nSH\nSH"
P - 
function scale(string, k, n) {
  // Create a variable to store the formatted string.
  // If the given string is empty, return an empty string.
  // Split the given string at the line breaks into an array.
  // Map each element to split into individual letters, repeat k times, and join.
  // Map each element of repeated letters to append a " " and repeat v times.
  // Map each element to trim the whitespace and replace separating spaces with line breaks.
  // Join the array at the line breaks.
  // Return the result as a string.
}
*/

function scale(string, k, v) {
  let result = "";
  if (string === "") return result;

  result = string.split("\n")
                  .map(e => e.split("").map(e => e.repeat(k)).join(""))
                  .map(e => (e + " ").repeat(v))
                  .map(e => e.trim().replace(/ /g, "\n"))
                  .join("\n")

  return result;
}

// Test: 
// console.log(scale("abcd\nefgh\nijkl\nmnop", 2, 3))
// console.log(scale("", 5, 5))
// console.log(scale("Kj\nSH", 1, 2))
