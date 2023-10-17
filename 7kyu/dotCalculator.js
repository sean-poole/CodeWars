/* Dot Calculator */

/*
You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

Here are the following valid operators:
+ Addition
- Subtraction
* Multiplication
// Integer Division

Your Work (Task): 
You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

Examples (Input => Output): 
* "..... + ..............." => "...................."
* "..... - ..."             => ".."
* "..... - ."               => "...."
* "..... * ..."             => "..............."
* "..... * .."              => ".........."
* "..... // .."             => ".."
* "..... // ."              => "....."
* ". // .."                 => ""
* ".. - .."                 => ""
*/

/*
P - One argument as a string.
R - String representing the calculated result of the given argument.
E - 
P - 
function dotCalculator(equation) {
  // Split the given string at " ".
  // Convert first and third elements to integers.
  // Create a variable to store the result.
  // Pass the second element through a switch case statement to determine operator.
  // Apply the operator to the first and third elements as integers.
  // Calculate the result.
  // Convert the result to dot notation.
  // Return string.
}
*/

function dotCalculator(equation) {
  let arr = equation.split(" ");
  let left = arr[0].length;
  let right = arr[2].length;
  let result = 0;

  switch (arr[1]) {
    case "+": result = left + right; break;
    case "-": result = left - right; break;
    case "*": result = left * right; break;
    case "//": result = Math.floor(left / right); break;
  }

  return [...new Array(result)].fill(".").join("");
}

// Test: 
// console.log(dotCalculator("..... + ..............."))
// console.log(dotCalculator("..... - ..."))
// console.log(dotCalculator("..... - ."))
// console.log(dotCalculator("..... * ..."))
// console.log(dotCalculator("..... * .."))
// console.log(dotCalculator("..... // .."))
// console.log(dotCalculator("..... // ."))
// console.log(dotCalculator(". // .."))
// console.log(dotCalculator(". - ."))
