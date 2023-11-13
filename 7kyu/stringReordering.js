/* String Reordering */

/*
The input will be an array of dictionaries.

Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).

The keys are not reoccurring and their range is -999 < key < 999. The dictionaries' keys & values will always be strings and will always not be empty.

Example
Input:
List = [
        {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
        {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
       ]

Output:
'Vatsan took his dog for a spin'
*/

/*
P - One argument as an array of objects.
R - String representing the values from the given array's objects organized by their keys in ascending order.
E - 
const List = [
  {'4': 'dog' }, {'2': 'took'}, {'3': 'his'}, 
  {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'} 
];

sentence(List)  // "Vatsan took his dog for a spin"
P - 
function sentence(List) {
  // Create a variable to store the given array sorted by object keys in ascending order.
  // Create a variable to store the sorted array's values.
  // Join the mapped array.
  // Return string.
}
*/

function sentence(List) {
  const sorted = List.sort((a, b) => parseInt(Object.keys(a)[0]) - parseInt(Object.keys(b)[0]));

  const result = sorted.map(e => Object.values(e)[0]).join(" ");

  return result;
}

// Test: 
const List = [
  {'4': 'dog' }, {'2': 'took'}, {'3': 'his'}, 
  {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'} 
];

// console.log(sentence(List))
