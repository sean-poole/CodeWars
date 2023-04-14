/* Find The Capitals */

/*
Complete the method that takes a sequence of objects with two keys each: country or state, and capital. Keys may be symbols or strings.
The method should return an array of sentences declaring the state or country and its capital.

Examples: 
state_capitals = [{state: 'Maine', capital: 'Augusta'}]
capital(state_capitals)[0] // returns "The capital of Maine is Augusta"

country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
capital(country_capitals)[0]  // returns "The capital of Spain is Madrid"

mixed_capitals = [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]
capital(mixed_capitals)[1] // returns "The capital of Spain is Madrid"
*/

/*
P - One argument as an array, each element contains an object with "state/country" and "capital" keys.
R - String formatted as `The capital of ${state/country} is ${capital}`.
E - 
capital([{state: 'Maine', capital: 'Augusta'}])[0]          // "The capital of Maine is Augusta"
capital([{'country' : 'Spain', 'capital' : 'Madrid'}])[0]   // "The capital of Spain is Madrid"
P - 
function capital(capitals) {
    // Map each object element of the array to the formatted string.
    // Return formatted string.
}
*/

const capital = capitals => capitals.map(e => `The capital of ${e.state || e.country} is ${e.capital}`);

// Test: 
let state_capitals = [{state: 'Maine', capital: 'Augusta'}];
let country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}];
let mixed_capitals = [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}];

console.log(capital(state_capitals)[0])
console.log(capital(country_capitals)[0])
console.log(capital(mixed_capitals)[1])
