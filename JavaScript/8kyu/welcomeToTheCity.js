/* Welcome To The City */

/*
Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

Example:
> sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
This example will return the string "Hello, John Smith! Welcome to Phoenix, Arizona!"
*/

/*
P - Three arguments: One array containing two elements, and two strings.
R - String output formatted with the given arguements.
E - sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')   // "Hello, John Smith! Welcome to Phoenix, Arizona!"
P - 
function sayHello(name, city, state) {
    // Return string using template literals to format with given arguments.
}
*/

const sayHello = (name, city, state) => `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;

// Test: 
// console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'))
// console.log(sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'))
// console.log(sayHello(['Wallace','Russel','Osbourne'],'Albany','New York'))
