/* Do You Speak English? */

/*
Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

Upper or lower case letter does not matter -- "eNglisH" is also correct.

Return value as boolean values, true for the string to contains "English", false for it does not.
*/

/*
P - One argument as a string.
R - Boolean representing if the given string contains the word "english". Case does not matter.
E - 
spEng("english")    // true
spEng("EnGlIsH")    // true
spEng("egnlish")    // false
P - 
function spEng(sentence) {
  // Set the given string to be all lowercase.
  // Check the string if it contains "english".
  // Return boolean.
}
*/

const spEng = sentence => sentence.toLowerCase().includes("english");

// Test: 
// console.log(spEng("english"))
// console.log(spEng("egnlish"))
