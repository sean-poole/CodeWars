/* Where Is My Parent */

/*
Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

Legend:
-Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
-Function input: String contains only letters, uppercase letters are unique.

Task:
Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".
*/

/*
P - One argument as a String. A-Z. Uppercase letters are unique, lowercase letters can appear as duplicates.
R - String sorted in alphabetical order with lowercase letters trailing their uppercase.
E - 
findChildren("beeeEBb")     // "BbbEeee"
findChildren("abBA")        // "AaBb"
P - 
function findChildren(str) {
    // Split the given string into an array.
    // Sort the array in alphabetical order with trailing lowercase letters.
    // Join the array into a string and return.
}
*/

const findChildren = str => str.split("").sort((a, b) => a.localeCompare(b, "en", { caseFirst: "upper" })).join("");

// Test: 
// console.log(findChildren("beeeEBb"))
// console.log(findChildren("uwwWUueEe"))
// console.log(findChildren("abBA"))
// console.log(findChildren("AaaaaZazzz"))
// console.log(findChildren("CbcBcbaA"))
// console.log(findChildren("xXfuUuuF"))
