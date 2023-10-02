/* Band Name Generator */

/*
My friend wants a new band name for her band. She like bands that use the formula: "The" + a noun with the first letter capitalized, for example:

"dolphin" -> "The Dolphin"

However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word (WITHOUT "The" in front), like this:

"alaska" -> "Alaskalaska"

Complete the function that takes a noun as a string, and returns her preferred band name written as a string.
*/

/*
P - One argument as a string.
R - String representing the generated band name. If the given string begins and ends with the same letter, repeat it. Otherwise, prepend it with "The".
E - 
bandNameGenerator("dolphin")    // "The Dolphin"
bandNameGenerator("alaska")     // "Alaskaalaska"
P - 
function bandNameGenerator(str) {
  // Check if the first and last letter of the given string are the same.
  // If they are, repeat the given string.
  // Else, prepend the given string with "The ".
  // Return string.
}
*/

function bandNameGenerator(str) {
  if (str.charAt(0) === str.charAt(str.length - 1)) {
    return str[0].toUpperCase() + str.slice(1).repeat(2);
  }
  
  return `The ${str[0].toUpperCase() + str.slice(1)}`;
}

// Test: 
// console.log(bandNameGenerator("knife"))
// console.log(bandNameGenerator("tart"))
// console.log(bandNameGenerator("sandles"))
// console.log(bandNameGenerator("bed"))
