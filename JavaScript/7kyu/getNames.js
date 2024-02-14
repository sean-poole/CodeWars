/* Get Names */

/*
The following code is not giving the expected results. Can you debug what the issue is?

The following is an example of data that would be passed in to the function.

var data = [
  {name: 'Joe', age: 20},
  {name: 'Bill', age: 30},
  {name: 'Kate', age: 23}
]

getNames(data) // should return ['Joe', 'Bill', 'Kate']
*/

/*
P - Broken function that takes in an array of objects containing a person's name and age.
R - Corrected function that returns an array of names from the objects within the given array.
E - getNames(data)    // ["Joe", "Bill", "Kate"]
P - 
function getNames(data) {
  return data.map(function(item){item.name});
  // Rewrite as an arrow function
  // Return array of names.
}
*/

function getNames(data) {
  return data.map(item => item.name);
}

// Test: 
const data = [
  { name: "Joe", age: 20 },
  { name: "Bill", age: 30 },
  { name: "Kate", age: 23 }
]

// console.log(getNames(data))
