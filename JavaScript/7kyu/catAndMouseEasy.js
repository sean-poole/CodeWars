/* Cat and Mouse - Easy Version */

/*
You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.
You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:
> C.....m returns 'Escaped!' <-- more than three characters between
> C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.
*/

/*
P - One argument as a string.
R - "Escaped!" if C & m are separated by more then 3 ".", else return "Caught!".
E - 
catMouse("C....m")      // "Escaped!"
catMouse("C..m")        // "Caught!"
P - 
function catMouse(x) {
    // Filter the given string for "." characters.
    // If the returned string has a length > 3, return "Escaped!".
    // Else, return "Caught!".
}
*/

const catMouse = x => x.split("").filter(e => e === ".").length > 3 ? "Escaped!" : "Caught!";

// Alternate solution: 
// const catMouse = x => x.length > 5 ? "Escaped!" : "Caught!"

// Test: 
// console.log(catMouse("C....m"))
// console.log(catMouse("C..m"))
// console.log(catMouse("C.....m"))
