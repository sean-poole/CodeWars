/* Spoonerize Me */

/*
A spoonerism is a spoken phrase in which the first letters of two of the words are swapped around, often with amusing results.

In its most basic form a spoonerism is a two word phrase in which only the first letters of each word are swapped:
> "not picking" --> "pot nicking"

Your task is to create a function that takes a string of two words, separated by a space: words and returns a spoonerism of those words in a string, as in the above example. A "word" in the context of this kata can contain any of the letters A through Z in upper or lower case, and the numbers 0 to 9. Though spoonerisms are about letters in words in the domain of written and spoken language, numbers are included in the inputs for the random test cases and they require no special treatment.

NOTE: All input strings will contain only two words. Spoonerisms can be more complex. For example, three-word phrases in which the first letters of the first and last words are swapped: "pack of lies" --> "lack of pies" or more than one letter from a word is swapped: "flat battery --> "bat flattery" You are NOT expected to account for these, or any other nuances involved in spoonerisms.
*/

/*
P - One argument as a string. String will only contain two words.
R - String representing the given string with the first letters of each word swapped.
E - spoonerize("nit picking")   // "pit nicking"
P - 
function spoonerize(words) {
  // Split the given string into an array where each word is an element.
  // Create two variables and store the first letter of each word from the array.
  // Format and return a string to swap the first letter of each word.
}
*/

function spoonerize(words) {
  let arr = words.split(" ");
  let c1 = arr[0][0];
  let c2 = arr[1][0];
  return `${c2 + arr[0].slice(1)} ${c1 + arr[1].slice(1)}`;
}

// Test: 
// console.log(spoonerize("nit picking"))
// console.log(spoonerize("wedding bells"))
// console.log(spoonerize("jelly beans"))
