/* Help The Fruit Guy */

/*
Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

Notes: 
> If the array is null/nil/None or empty you should return empty array ([]).
> The rotten fruit name will be in this camelcase (rottenFruit).
> The returned array should be in lowercase.
*/

/*
P - One argument as an array of strings.
R - Array of strings representing fresh fruit.
E - 
removeRotten(["apple","rottenBanana","apple"])       // ["apple","banana","apple"]
removeRotten([])                                     // []
P - 
function removeRotten(bagOfFruits) {
    // Check if the given array is valid. Return [] if it is not.
    // Iterate through the given array.
    // Check each element if it contains "rotten" as a part of the string.
    // Remove it and replace with a copy of the string after "rotten" and lowercase it.
    // Return the array.
}
*/

const removeRotten = bagOfFruits => bagOfFruits ? bagOfFruits.map(fruit => fruit.includes("rotten") ? fruit.slice(6).toLowerCase() : fruit) : [];

// Test: 
// console.log(removeRotten(["apple","banana","kiwi","melone","orange"]))
// console.log(removeRotten(["apple","rottenBanana","apple"]))
// console.log(removeRotten([]))
