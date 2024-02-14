/* Name Array Capping */

/*
Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

Example: 
> capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
> capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
*/

/*
P - Array of strings.
R - Given array of strings with only the first letter capitalized.
E - 
capMe(['jo', 'nelson', 'jurie'])        // returns ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY'])    // returns ['Karly', 'Daniel', 'Kelsey']
P - 
function capMe(names) {
    // Iterate through the given array.
    // Map each element to only capitalize the first letter.
    // Return array.
}
*/

const capMe = names => names.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase());

// Test: 
console.log(capMe(['jo', 'nelson', 'jurie']))
console.log(capMe(['KARLY', 'DANIEL', 'KELSEY']))
