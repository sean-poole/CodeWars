/* Crash Override */

/*
Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.
Your task is to create a function that, given a proper first and last name, will return the correct alias.

Notes:
> Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.
> If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."
> Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.
*/

/*
P - Two arguments as strings.
R - String representing an alias derived from preloaded objects. If either string argument does not begin with a letter, return "Your name must start with a letter from A - Z."
E - 
console.log(aliasGen("Alex", "Billiamson"))   // "Alpha Bomb"
console.log(aliasGen("Chris", "12345"))       // "Your name must start with a letter from A - Z."
console.log(aliasGen("12345", "Ampersand"))   // "Your name must start with a letter from A - Z."
P - 
function aliasGen() {
  // Create an empty string variable to store alias name.
  // Extract arguments. Map the array to represent the uppercased first letter of each element.
  // If the first letter of either argument is not present in the preloaded object, return "Your name must start with a letter from A - Z."
  // Else, add the letter's value to the created string.
  // Return string.
}
*/

const firstName = { A: 'Alpha', B: 'Beta', C: 'Cache' }
const surname = { A: 'Analogue', B: 'Bomb', C: 'Catalyst' }

function aliasGen() {
  const name = [...arguments].map(e => e[0].toUpperCase());
  let alias = "";

  if (name[0] in firstName && name[1] in surname) {
    alias += `${firstName[name[0]]} ${surname[name[1]]}`;
  } else {
    return "Your name must start with a letter from A - Z.";
  }

  return alias;
}

// Test: 
// console.log(aliasGen("Alex", "Billiamson"))
// console.log(aliasGen("Chris", "12345"))
// console.log(aliasGen("12345", "Ampersand"))
