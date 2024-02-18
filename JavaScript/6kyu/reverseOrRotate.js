/* Reverse or Rotate */

/*
The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If
> sz is <= 0 or if str is empty return ""
> sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

Examples:
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("563000655734469485", 4) --> "0365065073456944"

Example of a string rotated to the left by one position:
s = "123456" gives "234561".
*/

/*
P - One argument as a string and one argument as an integer.
R - String representing modified chunks of the given string joined together. Each chunk is of size sz. Evaluate if the sum of the chunk's cubed digits is divisible by 2. If it is, reverse the order of its elements. Else, move each digit to the left by 1 position.
E - 
revrot("1234", 0)                 // ""
revrot("", 0)                     // ""
revrot("1234", 5)                 // ""
revrot("733049910872815764", 5)   // "330479108928157"
P - 
function revrot(str, sz) {
  // Verify that the given arguments are valid.
  // Create an empty array variable to store chunks.
  // Iterate through the given string in increments of sz.
  // Slice str of length sz, starting from the current index. If the length of the substring === sz, split it into an array and push it to the created array.
  // Create helper function `sumCubes` that takes in an array and returns the sum of the array element's cubed values. Returns integer.
  // Create helper function `rotate` that takes in an array and moves each element to the left by 1 position. Joins the modified array and returns string.
  // Iterate through the created array.
  // Apply sumCubes to the current element.
  // If the sum is divisibly by 2, reverse the order of its elements.
  // Else, apply rotate to the current element.
  // Once iteration is complete, join the array of modified elements.
  // Return string.
}
*/

function revrot(str, sz) {
  if (sz === 0 || sz > str.length) return "";

  let chunks = [];
  for (let i = 0; i < str.length; i += sz) {
    let chunk = str.slice(i, i + sz);
    if (chunk.length === sz) chunks.push(chunk.split(""));
  }

  const sumCubes = arr => arr.reduce((acc, c) => acc += Math.pow(+c, 3), 0);
  const rotate = arr => arr.slice(1).concat(arr[0]).join("");

  chunks = chunks.map(el => sumCubes(el) % 2 === 0 ? el.reverse().join("") : rotate(el));

  return chunks.join("");
}

// Test: 
// console.log(revrot("1234", 0))
// console.log(revrot("", 0))
// console.log(revrot("1234", 5))
// console.log(revrot("733049910872815764", 5))
