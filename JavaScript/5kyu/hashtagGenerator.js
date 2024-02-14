/* The Hashtag Generator */

/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:
> It must start with a hashtag (#).
> All words must have their first letter capitalized.
> If the final result is longer than 140 chars it must return false.
> If the input or the result is an empty string it must return false.

Examples: 
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

/*
P - One argument as a string. Can contain whitespace or be empty.
R - Given string following a "#". First letter of each word must be capitalized. Cannot be longer than 140 characters.
E - 
generateHashtag("Codewars")         // "#Codewars"
generateHashtag(" ")                // false, empty string
generateHashtag("a".repeat(140))    // false, too long
P - 
function generateHashtag(str) {
    // Check if given string is not empty.
    // Split the string where each element represents a word.
    // Remove white space.
    // Capitalize the first letter of each word.
    // Join the array into a string and append to "#".
    // Verify string.length <= 140.
    // Return string.
}
*/

function generateHashtag(str) {
    if (!str.trim()) return false;
    let result = "#" + str.split(" ").map(c => c.charAt(0).toUpperCase() + c.slice(1)).join("");
    return result.length <= 140 ? result : false;
}

// Test: 
// console.log(generateHashtag(""))
// console.log(generateHashtag(" ".repeat(200)))
// console.log(generateHashtag("Do We have A Hashtag"))
// console.log(generateHashtag("Codewars"))
// console.log(generateHashtag("Codewars Is Nice"))
// console.log(generateHashtag("Codewars is nice"))
// console.log(generateHashtag("code" + " ".repeat(140) + "wars"))
// console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"))
// console.log(generateHashtag("a".repeat(139)))
// console.log(generateHashtag("a".repeat(140)))
