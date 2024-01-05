/* Valid Parentheses */

/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= length of input <= 100

All inputs will be strings, consisting only of characters ( and ).
Empty strings are considered balanced (and therefore valid), and will be tested.
For languages with mutable strings, the inputs should not be mutated.
*/

/*
P - One argument as a string containing only open and closed parentheses.
R - Boolean representing if the order of parentheses is valid.
E - 
validParentheses("()")              // true
validParentheses(")(()))")          // false
validParentheses("(")               // false
validParentheses("(())((()())())")  // true
P - 
function validParentheses(parenStr) {
  // Create a count variable to store an integer.
  // Iterate through the given string.
  // If the current element === "(", increment the count.
  // If the current element === ")", decrement the count.
  // If at any point the count < 0, break out of the for loop.
  // After breaking or iterating through the string, evaluate if count === 0 and return boolean.
}
*/

function validParentheses(parenStr) {
  let count = 0;
  for (p of parenStr.split("")) {
    p === "(" ? count++ : count--;
    if (count < 0) break;
  }

  return count === 0;
}

// Test: 
// console.log(validParentheses("()"))
// console.log(validParentheses(")(()))"))
// console.log(validParentheses("("))
// console.log(validParentheses("(())((()())())"))
