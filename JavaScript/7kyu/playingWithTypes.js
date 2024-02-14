/* Playing With Types */

/*
JavaScript is a dynamically typed programming language. This means that you don't have to specify what kind of information a variable contains, but sometimes it's useful to know it.

You have to implement a typing() function that takes a parameter and is able to tell the type and value of it.

For example:
typing(2);            //returns "number=2"
typing(true);         //returns "boolean=true"
typing("test");       //returns "string="test""
typing([1,2,3]);      //returns "object=[1,2,3]"
typing({a:1,b:2});    //returns "object={"a":1,"b":2}"
typing(function(){}); //returns "function=function (){}"
typing(undefined);    //returns "undefined"
*/

/*
P - One argument as a number, string, boolean, object, or function.
R - String representing the given argument's type and its value.
E - 
typing(1)       // "number=1"
typing(true)    // "boolean=true"
P - 
function typing(param) {
  // Create a switch case statement evaluating the given argument.
  // Determine the type of the given argument.
  // Determine the value of the given argument.
  // Concatenate the evaluations in a string.
  // Return string.
}
*/

function typing(param) {
  switch (typeof param) {
    case "number": return `number=${param}`;
    case "string": return `string="${param}"`;
    case "boolean": return `boolean=${param}`;
    case "object": return `object=${JSON.stringify(param)}`;
    case "function": return `function=${param}`;
    default: return `undefined`;
  }
}

// Test: 
// console.log(typing(1))
// console.log(typing(true))
