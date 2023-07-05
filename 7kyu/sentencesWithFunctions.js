/* Sentences With Functions */

/*
Implement all required functions in order to create the following sentences by calling those functions:

Adam(has(a(dog()))); // must return "Adam has a dog."
The(name(of(the(dog(is(also(Adam()))))))); // must return "The name of the dog is also Adam."
*/

/*
P - Empty functions with names that will make up a sentence.
R - Create a new function to format the string by extracting the names of the given functions.
E - 
Adam(has(a(dog())))   // "Adam has a dog."
P - 
function getName(args) {
  // Append "." to the last argument.
  // Otherwise, separate function names with a space.
  // Return string.
}
*/

function getName(args) {
  return arguments.callee.caller.name + (args.length === 0 ? `.` : ` ${args[0]}`);
}

function Adam() { return getName(arguments) }
function has() { return getName(arguments) }
function a() { return getName(arguments) }
function dog() { return getName(arguments) }
function The() { return getName(arguments) }
function name() { return getName(arguments) }
function of() { return getName(arguments) }
function the() { return getName(arguments) }
function is() { return getName(arguments) }
function also() { return getName(arguments) }

// Test: 
// console.log(Adam(has(a(dog()))))
// console.log(The(name(of(the(dog(is(also(Adam()))))))))