/* Esrever Esrever */

/*
In this kata you must take an input string, reverse the order of the words, and reverse the order of the letters within the words.

But, as a bonus, every test input will end with a punctuation mark (! ? .) and the output should be returned with the mark at the end.

A few examples should help clarify:
esrever("hello world.") == "dlrow olleh."
esrever("Much l33t?") == "t33l hcuM?"
esrever("tacocat!") == "tacocat!"

Quick Note: A string will always be passed in (though it may be empty) so no need for error-checking other types.
*/

/*
P - One argument as a string.
R - String representing the given string with the order of its words reversed and the order of letters within each word reversed.
E - 
esrever('an Easy one?')                   // 'eno ysaE na?'
esrever('a small lOan OF 1,000,000 $!')   // '$ 000,000,1 FO naOl llams a!'
esrever('<?> &!.".')                      // '".!& >?<.'
esrever('b3tTer p4ss thIS 0ne.')          // 'en0 SIht ss4p reTt3b.'
esrever('')                               // ''
P - 
function esrever(str) {
  // Split the given string into an array of words.
  // Reverse the order of words.
  // Iterate through the reversed array.
  // Reverse the order of letters for each element.
  // Join the array into a string.
  // Remove the first character (punctuation mark) of the string.
  // Append it to the end of the string.
  // Return modified string.
}
*/

function esrever(str) {
  if (str.length === 0) return "";

  let reversed = str.split(" ").reverse().map(word => word.split("").reverse().join("")).join(" ");
  let punctuation = reversed[0];

  return reversed.slice(1).concat(punctuation);
}

// Alternate solution: 
// function esrever(str) {
//   let reversed = [...str].reverse();
//   reversed.push(reversed.shift());
//   return reversed.join("");
// }

// Test: 
// console.log(esrever('an Easy one?'))
// console.log(esrever('a small lOan OF 1,000,000 $!'))
// console.log(esrever('<?> &!.".'))
// console.log(esrever('b3tTer p4ss thIS 0ne.'))
// console.log(esrever(''))
