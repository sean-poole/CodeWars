/* Make Backronym */

/*
back·ro·nym
An acronym deliberately formed from a phrase whose initial letters spell out a particular word or words, either to create a memorable name or as a fanciful explanation of a word's origin.

"Biodiversity Serving Our Nation", or BISON
(from https://en.oxforddictionaries.com/definition/backronym)

Complete the function to create backronyms. Transform the given string (without spaces) to a backronym, using the preloaded dictionary and return a string of words, separated with a single space (but no trailing spaces).

The keys of the preloaded dictionary are uppercase letters A-Z and the values are predetermined words, for example:

dict["P"] == "perfect"
Examples
"dgm" ==> "disturbing gregarious mustache"

"lkj" ==> "literal klingon joke"
*/

/*
P - One argument as a string.
R - String of words representing a backronym from a preloaded dictionary.
E - 
makeBackronym("dgm")    // "disturbing gregarious mustache"
makeBackronym("lkj")    // "literal klingon joke"
P - 
function makeBackronym(string) {
  // Create an empty array variable to store words.
  // Iterate through each character of the given string.
  // Check the dictionary keys (uppercase) for the current element.
  // Push the key's value to the created array.
  // Join the array into a string with words separated by spaces.
  // Return string.
}
*/

function makeBackronym(string) {
  let backronym = [];
  for (c of string.toUpperCase()) {
    backronym.push(dict[c]);
  }

  return backronym.join(" ");
}

// Alternate solution: 
// function makeBackronym(string) {
//   return string.toUpperCase().split("").map(c => dict[c]).join(" ");
// }

// Test: 
// console.log(makeBackronym("dgm"))
// console.log(makeBackronym("lkj"))
// console.log(makeBackronym("interesting"))
// console.log(makeBackronym("codewars"))
