/* Semi-optional */

/*
We have implemented a function wrap(value) that takes a value of arbitrary type and wraps it in a new JavaScript Object or Python Dict setting the 'value' key on the new Object or Dict to the passed-in value.

So, for example, if we execute the following code:
wrapper_obj = wrap("my_wrapped_string"); 
 # wrapper_obj should be  {"value":"my_wrapped_string"}

We would then expect the following statement to be true:
wrapper_obj["value"] == "my_wrapped_string"

Unfortunately, the code is not working as designed. Please fix the code so that it behaves as specified.
*/

/*
P - One argument of any type.
R - Object containing the given argument as a value for the property "value".
E - 
console.log(wrap("MyTest").value)             // "MyTest"
console.log(wrap(343).value)                  // 343
console.log(wrap({ "test": "testy" }).value)  // { "test": "testy" }
P - 
function wrap(value) {
  // Create an object with a property "value".
  // Assign the property with a value of the given argument.
  // Return object.
}
*/

function wrap(value) {
  return {
    "value": value
  };
}

// Test: 
const res = wrap("MyTest");
const test = wrap(343);
const obj = wrap({ "test": "testy" });

// console.log(res.value)
// console.log(test.value)
// console.log(obj.value)
