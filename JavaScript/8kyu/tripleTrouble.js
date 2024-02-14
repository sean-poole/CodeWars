/* Triple Trouble */

/*
Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.
*/

/*
P - Three arguments as strings of the same length.
R - String representing the concatenation of the given strings one letter at at time
E - 
tripleTrouble("aaa","bbb","ccc")    // "abcabcabc"
tripleTrouble("Sea","urn","pms")    // "Supermans"
P - 
function tripleTrouble(one, two, three) {
  // Create an empty string variable.
  // Iterate through the given string arguments collectively.
  // Add the letter at the current index of each string to the created variable.
  // Return string.
}
*/

function tripleTrouble(one, two, three) {
  let result = "";
  for (let i = 0; i < one.length; i++) {
    result += `${one[i]}${two[i]}${three[i]}`;
  }

  return result;
}

// Test: 
// console.log(tripleTrouble("aaa","bbb","ccc"))
// console.log(tripleTrouble("aaaaaa","bbbbbb","cccccc"))
// console.log(tripleTrouble("burn", "reds", "roll"))
// console.log(tripleTrouble("Sea","urn","pms"))
// console.log(tripleTrouble("LLh","euo","xtr"))
