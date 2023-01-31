/* Character With Longest Consecutive Repetition */

/*
For a given string s find the character c (or C) with longest consecutive repetition and return:
> [c, l]

where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:
> ["", 0]

In JavaScript: If you use Array.sort in your solution, you might experience issues with the random tests as Array.sort is not stable in the Node.js version used by CodeWars. This is not a kata issue.
*/

function longestRepetition(s) {
    let letter = "";
    let longest = 0;
    let count = 1;

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) count++;
        else count = 1;

        if (count > longest) {
            letter = s[i];
            longest = count;
        }
    }

    return [letter, longest];
}

// Test: 
// console.log(longestRepetition("aaaabb"))
// console.log(longestRepetition("bbbaaabaaaa"))
// console.log(longestRepetition("cbdeuuu900"))
// console.log(longestRepetition("abbbbb"))
// console.log(longestRepetition("aabb"))
// console.log(longestRepetition(""))
// console.log(longestRepetition("ba"))
