/* ASCII Total */

/*
You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

Examples:
> uniTotal("a") == 97
> uniTotal("aaa") == 291
*/

/*
P - One argument as a string.
R - Integer representing the sum of the given string's ASCII value.
E - 
uniTotal("")      // 0
uniTotal("a")     // 97
uniTotal("aaa")   // 291
P - 
function uniTotal(string) {
  // Split the given string into an array.
  // Iterate through the array and map each element to its ASCII value.
  // Reduce the array and calculate the sum of integers.
  // Return integer.
}
*/

function uniTotal(str) {
  return str.split("")
            .map(e => e.charCodeAt())
            .reduce((acc, c) => acc += c, 0);
}

// Alternate solution
// const uniTotal = str => [...str].reduce((acc, c) => acc += c.charCodeAt(), 0);

// Test: 
console.log(uniTotal(""))
console.log(uniTotal("a"))
console.log(uniTotal("b"))
console.log(uniTotal("c"))
console.log(uniTotal("d"))
console.log(uniTotal("e"))
console.log(uniTotal("aaa"))
console.log(uniTotal("Mary Had A Little Lamb"))
