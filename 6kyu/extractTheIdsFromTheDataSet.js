/* Extract the IDs From the Data Set */

/*
Complete the method so that it returns an array of all ID's passed in. The data structure will be similar to the following:

var data = {
  id: 1,
  items: [
    {id: 2},
    {id: 3, items: [
      {id: 4},
      {id: 5}
    ]}
  ]
}

extractIds(data) // should return [1,2,3,4,5]
The method should be able to handle the case of empty data being passed in.

Note: The only arrays that need to be traversed are those assigned to the "items" property.
*/

/*
P - One argument as an object of data.
R - Array of integers representing the ids within the given data object.
E - 
const data = {
  id: 1,
  items: [ {id: 2}, {id: 3, items: [ {id: 4}, {id: 5} ]} ]
}

extractIds(data)    // [1, 2, 3, 4, 5]
P - 
function extractIds(data) {
  // Create an empty array.
  // Destrucure and iterate through the keys of the given object.
  // If the current key is an "id", add the value to the created array.
  // Else, recursively call the extractIds function with the current "item" as an argument.
  // Return array of integers.
}
*/

function extractIds(data) {
  return [].concat(...Object.keys(data).map(item => item === "id" ? data[item] : extractIds(data[item])));
}

// Test: 
const data1 = {
  id: 1,
  items: [ {id: 2}, {id: 3} ]
}

const data2 = {
  id: 1,
  items: [ {id: 2}, {id: 3, items: [ {id: 4}, {id: 5} ]} ]
}

const data3 = {
  id: 1,
  items: [ {id: 2, items: [ {id: 4}, {id: 5} ]}, {id: 6, items: [ {id: 7} ]} ]
}

// console.log(extractIds(data1))
// console.log(extractIds(data2))
// console.log(extractIds(data3))
