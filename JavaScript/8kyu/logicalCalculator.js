/* Logical Calculator */

/*
Your Task: 
Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

Examples: 
1. booleans = [True, True, False], operator = "AND"
> True AND True -> True
> True AND False -> False
> return False
2. booleans = [True, True, False], operator = "OR"
> True OR True -> True
> True OR False -> True
> return True
3. booleans = [True, True, False], operator = "XOR"
> True XOR True -> False
> False XOR False -> False
> return False

Input: 
an array of Boolean values (1 <= array_length <= 50)
a string specifying a logical operator: "AND", "OR", "XOR"

Output: 
A Boolean value (True or False).
*/

/*
P - Two arguments: one array of boolean values, one string representing a logical operator.
R - Boolean value after applying the logical operator to the array of boolean values.
E - 
logicalCalc([true, true, true, false], "AND")   // false
logicalCalc([true, true, true, false], "OR")    // true
logicalCalc([true, true, true, false], "XOR")   // true
P - 
function logicalCalc(array, op) {
  // Create an object to store function values for logical operators.
  // Iterate through the array and apply the logical operator to all elements.
  // Return Boolean.
}
*/

const ops = {
  "AND": (a, b) => a && b,
  "OR": (a, b) => a || b,
  "XOR": (a, b) => a !== b
}

const logicalCalc = (array, op) => array.reduce(ops[op]);

// Test: 
// console.log(logicalCalc([true, true, true, false], "AND"))
// console.log(logicalCalc([true, true, true, false], "OR"))
// console.log(logicalCalc([true, true, true, false], "XOR"))
// console.log(logicalCalc([true, true, false, false], "AND"))
// console.log(logicalCalc([true, true, false, false], "OR"))
// console.log(logicalCalc([true, true, false, false], "XOR"))

