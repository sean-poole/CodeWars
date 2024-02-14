/* Refactored Greeting */

/*
The following code could use a bit of object-oriented artistry. While it's a simple method and works just fine as it is, in a larger system it's best to organize methods into classes/objects. (Or, at least, something similar depending on your language)

Refactor the following code so that it belongs to a Person class/object. Each Person instance will have a greet method. The Person instance should be instantiated with a name so that it no longer has to be passed into each greet method call.

Here is how the final refactored code would be used:
> var joe = new Person('Joe');
> joe.greet('Kate'); // should return 'Hello Kate, my name is Joe'
> joe.name           // should == 'Joe'
*/

/*
P - Function.
R - Object containing the given function.
E - 
joe.greet("Kate")   // "Hello Kate, my name is Joe"
joe.name            // "Joe"
P - 
function greet(myName, yourName) {

}
// Move this function into a Person object
// Person object takes one argument as a string representing the user's name.
// Greet method takes one argument as a string representing the name of the person being greeted.
// Greet method returns formatted string.
*/

class Person {
  constructor(myName) {
    this.name = myName;
  }

  greet(yourName) {
    return `Hello ${yourName}, my name is ${this.name}`;
  }
}

// Test: 
const joe = new Person("Joe");

// console.log(joe.greet("Kate"))
// console.log(joe.name)
