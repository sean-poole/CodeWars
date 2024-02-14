/* Bug Fixing #6 - Switch/Case */

/*
Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?
*/

/*
P - One object as an argument.
R - Integer representing the calculated value using the given object.
E - 
evalObject({ a: 1, b: 1, operation: "+" })  // 2
evalObject({ a: 1, b: 1, operation: "-" })  // 0
evalObject({ a: 1 ,b: 1, operation: "/" })  // 1
evalObject({ a: 1, b: 1, operation: "*" })  // 1
evalObject({ a: 1, b: 1, operation: "%" })  // 0
evalObject({ a: 1, b: 1, operation: "^" })  // 1
P - 
function evalObject(value) {
  let result = 0;
  // Include break statements after each operation.
  switch(value.operation) {
    case "+": result = value.a + value.b;
    case "-": result = value.a - value.b;
    case "/": result = value.a / value.b;
    case "*": result = value.a * value.b;
    case "%": result = value.a % value.b;
    case "^": result = Math.pow(value.a, value.b);
  }

  return result;
}
*/

function evalObject(value) {
  let result = 0;
  switch(value.operation) {
    case "+": result = value.a + value.b; break;
    case "-": result = value.a - value.b; break;
    case "/": result = value.a / value.b; break;
    case "*": result = value.a * value.b; break;
    case "%": result = value.a % value.b; break;
    case "^": result = Math.pow(value.a, value.b); break;
  }

  return result;
}

// Test: 
// console.log(evalObject({ a: 1, b: 1, operation: "+" }))
// console.log(evalObject({ a: 1, b: 1, operation: "-" }))
// console.log(evalObject({ a: 1 ,b: 1, operation: "/" }))
// console.log(evalObject({ a: 1, b: 1, operation: "*" }))
// console.log(evalObject({ a: 1, b: 1, operation: "%" }))
// console.log(evalObject({ a: 1, b: 1, operation: "^" }))
