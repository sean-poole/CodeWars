/* Are You Playing Banjo? */

/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.
*/

function areYouPlayingBanjo(name) {
    return (name[0].toLowerCase() === "r" ? `${name} plays banjo` : `${name} does not play banjo`);
}

// Test:
// testName1 = "Adam"
// testName2 = "Paul"
// testName3 = "Ringo"
// testName4 = "bravo"
// testName5 = "rolf"
// console.log(areYouPlayingBanjo(testName1))
// console.log(areYouPlayingBanjo(testName2))
// console.log(areYouPlayingBanjo(testName3))
// console.log(areYouPlayingBanjo(testName4))
// console.log(areYouPlayingBanjo(testName5))