/* Covfefe */

/*
Your are given a string. You must replace any occurence of the sequence coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.

For the languages where the string is mutable (such as ruby), don't modify the given string, otherwise this will break the test cases.
*/

/*
P - One argument as a string.
R - String representing the given string with every instance of "coverage" replaced with "covfefe", or " covfefe" added to the end of the string if "coverage" does not exist.
E - 
covfefe("coverage")             // "covfefe"
covfefe("coverage coverage")    // "covfefe covfefe"
covfefe("nothing")              // "nothing covfefe"
covfefe("double space ")        // "double space  covfefe"
covfefe("covfefe")              // "covfefe covfefe"
covfefe("erag")                 // "erag covfefe"
P - 
function covfefe(str) {
  // Check if the given string includes "coverage".
  // If true, replace every instance of "coverage" with "covfefe".
  // Else, add " covfefe" to the end of the given string.
  // Return string.
}
*/

function covfefe(str) {
  return str.includes("coverage") 
    ? str.replaceAll("coverage", "covfefe") 
    : str + " covfefe";
}

// Test: 
// console.log(covfefe("coverage"))
// console.log(covfefe("coverage coverage"))
// console.log(covfefe("nothing"))
// console.log(covfefe("double space "))
// console.log(covfefe("covfefe"))
// console.log(covfefe("erag"))
