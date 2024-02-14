/* Dictionary From Two Lists */

/*
There are two lists, possibly of different lengths. The first one consists of keys, the second one consists of values. Write a function createDict(keys, values) that returns a dictionary created from keys and values. If there are not enough values, the rest of keys should have a None (JS null)value. If there not enough keys, just ignore the rest of values.

Example 1:
keys = ['a', 'b', 'c', 'd']
values = [1, 2, 3]
createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3, 'd': null}

Example 2:
keys = ['a', 'b', 'c']
values = [1, 2, 3, 4]
createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3}
*/

/*
P - Two arguments: one array of single character strings and one array of integers.
R - Object containing the [keys:values] from the given arguments.
E - 
createDict(["a", "b", "c"], [1, 2, 3])      // {"a": 1, "b": 2, "c": 3}
createDict(["a", "b", "c"], [1, 2, 3, 4])   // {"a": 1, "b": 2, "c": 3}
createDict(["a", "b", "c", "d"], [1, 2, 3]) // {"a": 1, "b": 2, "c": 3, "d": null}
P - 
function createDict(keys, values) {
  // Create an empty object variable.
  // Iterate through both given arrays for the length of the keys array.
  // Add the element at the current keys index to the created object as a key.
  // Add the element at the current values index to the created object as a value.
  // If the current value is undefined, assign value of null.
  // Else, assign the provided value.
  // Return object.
}
*/

function createDict(keys, values) {
  const obj = {};
  for (let i = 0; i < keys.length; i++) {
    values[i] === undefined ? obj[keys[i]] = null : obj[keys[i]] = values[i];
  }

  return obj;
}

// Test: 
// console.log(createDict(["a", "b", "c"], [1, 2, 3]))
// console.log(createDict(["a", "b", "c"], [1, 2, 3, 4]))
// console.log(createDict(["a", "b", "c", "d"], [1, 2, 3]))
