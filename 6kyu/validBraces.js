/* Valid Braces */

/*
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/

/*
P - One argument as a string. Characters will only include parentheses, brackets and curly braces.
R - Boolean representing if the given string contains correct usage of opening and closing braces.
E - 
validBraces("(){}[]")
validBraces("([{}])")
validBraces("(}")
validBraces("[(])")
validBraces("[({})](]")
P - 
function validBraces(braces) {
  // Create an array variable to store opening braces.
  // Iterate through the given string.
  // If the current element is an opening brace "(", "{", "[" ...
  // ... push it to the created array.
  // Else, create a variable to store the last element added to the array.
  // If there are no elements in the array, the brace is invalid and return false.
  // Check the last opening brace and the current element for valid pairings.
  // If the braces are valid, remove the opening brace from the array.
  // Else, break out of the loop.
  // Check if the opening braces array's length === 0.
  // Return boolean.
}
*/

function validBraces(braces) {
  let opening = [];
  for (let i = 0; i < braces.length; i++) {
    if (braces[i] === "(" || braces[i] === "{" || braces[i] === "[") {
      opening.push(braces[i]);
    } else {
      if (opening.length === 0) return false;
      let lastValue = opening[opening.length - 1];
      if (lastValue === "(" && braces[i] === ")" || lastValue === "{" && braces[i] === "}" || lastValue === "[" && braces[i] === "]") {
        opening.pop();
      } else {
        break;
      }
    }
  }

  return opening.length === 0;
}

// Test: 
// console.log(validBraces("(){}[]"))
// console.log(validBraces("([{}])"))
// console.log(validBraces("(}"))
// console.log(validBraces("[(])"))
// console.log(validBraces("[({})](]"))

