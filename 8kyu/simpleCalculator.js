/* Simple Calculator */

/*
You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on these two numbers.

if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

Example:
calculator(1,2,"+"); //=> result will be 3
calculator(1,2,"&"); //=> result will be "unknown value"
calculator(1,"k","*"); //=> result will be "unknown value"
Good luck!
*/

/*
P - Two arguments as integers and one argument as a string.
R - Integer representing the calculated result of the given arguments, or "unknown value" if the result cannot be determined.
E - 
calculator(1, 2, "+")     // 3
calculator(1, 2, "&")     // "unknown value"
calculator(1,"k","*")     // "unknown value"
P - 
function calculator(a, b, sign) {
  // Check if arguments a & b are valid integers.
  // Create a switch statement for arithmetic operators +, -, *, /.
  // Calculate the result using the given arguments.
  // If the calculation is invalid, return default "unknown value".
}
*/

function calculator(a, b, sign) {
  if ((typeof a === "number") && typeof b === "number") {
    switch (sign) {
      case "+": return a + b;
      case "-": return a - b;
      case "*": return a * b;
      case "/": return a / b;
    }
  }

  return "unknown value";
}

// Test: 
// console.log(calculator(1, 2, "+"))
// console.log(calculator(1, 2, "-"))
// console.log(calculator(3, 5, "*"))
// console.log(calculator(6, 2, "/"))
// console.log(calculator(6, 2, "$"))
// console.log(calculator(6, "h", "*"))
