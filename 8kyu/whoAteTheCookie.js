/* Who Ate The Cookie */

/*
For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

Note: Make sure you return the correct message with correct spaces and punctuation.

Please leave feedback for this kata. Cheers!
*/

/*
P - One argument as a string, integer, or boolean.
R - String representing who ate the last cookie determined by the given argument.
E - 
cookie("Ryan")    // "Who ate the last cookie? It was Zach!"
cookie(26)        // "Who ate the last cookie? It was Monica!"
cocookie(2.3)     // "Who ate the last cookie? It was Monica!"
cookie(true)      // "Who ate the last cookie? It was the dog!"
P - 
function cookie(x) {
  // Evaluate the variable type of the given argument.
  // If the argument is a string, return "Zach".
  // If the argument is an integer, return "Monica".
  // If the argument is anything else, return "the dog".
}
*/

function cookie(x) {
  let name = "";
  if (typeof(x) === "string") {
    name = "Zach";
  } else if (typeof(x) === "number") {
    name = "Monica";
  } else {
    name = "the dog";
  }

  return `Who ate the last cookie? It was ${name}!`;
}

// Test: 
// console.log(cookie("Ryan"))
// console.log(cookie(26))
// console.log(cookie(2.3))
// console.log(cookie(true))
