/* Is This My Tail */

/*
Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

If the tail is right return true, else return false.

The arguments will always be non empty strings, and normal letters.
*/

/*
P - Broken function.
R - Fixed function that takes in two arguments and returns boolean if the second argument is the last character of the first argument.
E - 
correctTail("Fox", "x")       // true
correctTail("Rhino", "o")     // true
correctTail("Meerkat", "t")   // true
P - 
function correctTail(bod, tail) {
  sub = body.substr(bodylength-(tail.length))
  if sub = tail) ;
    return true
  } else
    return false
}

// Incorrect first argument. Change `bod` to `body`.
// Initialize `sub` variable with `let` or `const`.
// Include `.` to call `length` method.
// Use `==` or `===` to compare `sub` and `tail`.
// Format if/else statement to include parenthesis or as a ternary.
// Return boolean.
*/

function correctTail(body, tail) {
  let sub = body.substr(body.length - tail.length)
  return sub === tail;
}

// Test: 
// console.log(correctTail("Fox", "x"))
// console.log(correctTail("Rhino", "o"))
// console.log(correctTail("Meerkat", "t"))
