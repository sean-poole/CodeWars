/* Longest Palindrome */

/*
Find the length of the longest substring in the given string s that is the same in reverse.
As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.
If the length of the input string is 0, the return value must be 0.

Example: 
"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0
*/

function getPalindrome(left, right, s) {
    while (left >= 0 && right < s.length) {
        if (s[left] !== s[right]) break;
        left--;
        right++;
    }

    return [left + 1, right];
}

function longestPalindrome(s) {
    let max = [0, 1];

    for (let i = 0; i < s.length; i++) {
        let even = getPalindrome(i - 1, i, s);
        let odd = getPalindrome(i - 1, i + 1, s);
        let current = odd[1] - odd[0] > even[1] - even[0] ? odd : even;

        max = max[1] - max[0] > current[1] - current[0] ? max : current;
    }

    return s.slice(max[0], max[1]).length;
}

// Test: 
// console.log(longestPalindrome("a"))
// console.log(longestPalindrome("aa"))
// console.log(longestPalindrome("baa"))
// console.log(longestPalindrome("aab"))
// console.log(longestPalindrome("zyabyz"))
// console.log(longestPalindrome("baabcd"))
// console.log(longestPalindrome("baablkj12345432133d"))
