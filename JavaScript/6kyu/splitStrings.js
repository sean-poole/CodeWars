/* Split Strings */

/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:
> 'abc' =>  ['ab', 'c_']
> 'abcdef' => ['ab', 'cd', 'ef']
*/

/*
P - One argument as a string. 
R - Array of the given string split into pairs of two characters. If string.length is odd, append "_" to the end.
E - 
solution("abcdef")      // ["ab", "cd", "ef"]
solution("abcdefg")     // ["ab", "cd", "ef", "g_"]
solution("")            // []
P - 
function solution(str) {
    // If string is empty, return [].
    // Check string length. If length is odd, append "_" to the end. Else, continue.
    // Create an empty array.
    // Iterate through the string and push character pairs to the array.
    // Return the array.
}
*/

function solution(str) {
    if (!str) return [];
    if (str.length % 2) str += "_";
    let result = [];
    for (let i = 0; i < str.length; i += 2) {
        result.push(str.slice(i, i + 2));
    }

    return result;
}

// Test: 
// console.log(solution("abcdef"))
// console.log(solution("abcdefg"))
// console.log(solution(""))
