/* Two To One */

/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
    let result = [];

    for (e of s1.concat(s2).toLowerCase().split("").sort()) {
        if (!result.includes(e)) {
            result.push(e);
        }
    }

    return result.join("");
}

// Alternate solution:
// const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

// Test: 
// console.log(longest("aretheyhere", "yestheyarehere"))
// console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"))
// console.log(longest("inmanylanguages", "theresapairoffunctions"))