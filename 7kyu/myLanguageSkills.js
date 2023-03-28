/* My Language Skills */

/*
Task: 
You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

Note: the scores will always be unique (so no duplicate values)

Examples: 
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
*/

/*
P - Object containing a language (key) as a string and a test score (value) as an integer. No duplicate scores values.
R - Array of key strings where its value in the given object is >= 60. Descending order of scores.
E - 
myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65})          // ["Ruby", "Python"]
myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20})           // []
P - 
function myLanguages(results) {
    // Create an empty array.
    // Iterate through the given object.
    // Push keys to the created array whose values are greater than 60.
    // Return array of strings.
}
*/

function myLanguages(results) {
    let lang = [];
    for (let score in results) {
        if (results[score] >= 60) lang.push(score);
    }

    return lang.sort((a, b) => results[b] - results[a]);
}

// Alternate solution: 
// const myLanguages = results => Object.keys(results).filter(score => results[score] >= 60).sort((a, b) => results[b] - results[a]);

// Test: 
// console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}))
// console.log(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}))
// console.log(myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20}))
