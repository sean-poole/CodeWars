/* Duck Duck Goose */

/*
Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

Example:
> duck_duck_goose([a, b, c, d], 1) should return a.name
> duck_duck_goose([a, b, c, d], 5) should return a.name
> duck_duck_goose([a, b, c, d], 4) should return d.name
*/

/*
P - Two arguments: an array of strings and an integer.
R - String representing a player name that is selected based on the given integer.
E - 
duckDuckGoose([a, b, c, d], 1)      // Returns a.name as "a"
duckDuckGoose([a, b, c, d], 3)      // Returns c.name as "c"
P - 
function duckDuckGoose(players, goose) {
    // Iterate through the given array.
    // Select the element at the index of the given integer - 1. (1-based array).
    // Return the name property of that element.
}
*/

const duckDuckGoose = (players, goose) => players[(goose - 1) % players.length].name;

// Test: 
class Player {
    constructor(name) {
        this.name = name;
    }
}

let names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = names.map(n => new Player(n));

// console.log(duckDuckGoose(players, 1))
// console.log(duckDuckGoose(players, 3))
// console.log(duckDuckGoose(players, 10))
// console.log(duckDuckGoose(players, 20))
