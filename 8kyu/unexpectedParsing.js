/* Unexpected Parsing */

/*
Here is a piece of code:
function getStatus(isBusy) {
  var msg = (isBusy ? "busy" : "available");
  return 
  {
    status: msg
  }
}

Expected Behaviour: 
Function should return a dictionary/Object/Hash with "status" as a key, whose value can : "busy" or "available" depending on the truth value of the argument is_busy.

But as you will see after clicking RUN or ATTEMPT this code has several bugs, please fix them.
*/

/*
P - One argument as a boolean.
R - String representing the status based on the given argument.
E - 
getStatus(true)     // "busy"
getStatus(false)    // "available"
P - 
function getStatus(isBusy) {
  // Create a variable to store an object.
  // Create a "status" key with a value of "busy" or "available" based on the provided boolean argument.
  // Return object.
}
*/

function getStatus(isBusy) {
  let msg = {
    status: isBusy ? "busy" : "available"
  }

  return msg;
}

// Test: 
// console.log(getStatus(true).status)
