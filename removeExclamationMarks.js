/* Remove Exclamation Marks */

/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

const removeExclamationMarks = s => s.split("").filter(c => c != "!").join("");

// Test: 
// console.log(removeExclamationMarks("Hello World!"))
// console.log(removeExclamationMarks("yhxgoKOtbA!DZYdJTUFou AJWeVuRiyO!giLBbGLNef"))
