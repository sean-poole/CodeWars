/* String Ends With ? */

/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

function endsWith(str, ending) {
    let index = str.length - ending.length;
    return str.slice(index) === ending;
}

// Alternate solution: 
// const endsWith = (str, ending) => str.endsWith(ending);

// Test: 
// console.log(endsWith("abcde", "cde"))
// console.log(endsWith("abcde", "abc"))
