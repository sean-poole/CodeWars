/* Return A Sorted List Of Objects */

/*
You'll be passed an array of objects (list) - you must sort them in descending order based on the value of the specified property (sortBy).

Example
When sorted by "a", this:
[
  {"a": 1, "b": 3},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 4, "b": 12}
]

should return:
[
  {"a": 4, "b": 12},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 1, "b": 3}
]

The values will always be numbers, and the properties will always exist.
*/

/*
P - Two arguments: one string and one array of objects.
R - Array of objects sorted in descending order determined by the given string.
E - 
sortList("a", [
  { "a": 1, "b": 3 },
  { "a": 3, "b": 2 },
  { "a": 2, "b": 40 }, 
  { "a": 4, "b": 12 }
])
// [
  {"a": 4, "b": 12},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 1, "b": 3}
]

P - 
function sortList(sortBy, list) {
  // Sort the given array of objects in descending order.
  // Determine the object property to sort by from the given string.
  // Return sorted object.
}
*/

function sortList(sortBy, list) {
  return list.sort((a, b) => b[sortBy] - a[sortBy]);
}

// Test: 
const unsorted = [
  { "a": 1, "b": 3 },
  { "a": 3, "b": 2 },
  { "a": 2, "b": 40 }, 
  { "a": 4, "b": 12 }
];

// console.log(sortList("a", unsorted))
