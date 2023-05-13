/* Return Substring Instance Count */

/* 
Complete the solution so that it returns the number of times the search_text is found within the full_text.

Usage example:
> solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
> solution('aaabbbcccc', 'bbb') # should return 1
*/

/*
P - Two arguments as strings. First argument is the full text. Second argument is the substring we are looking for within the first argument.
R - Integer representing how many times the second argument appears in the first argument.
E - 
solution("abcdeb", "b")   // 2
solution("abbc", "bb")    // 1
P - 
function solution(fullText, searchText) {
  // Create variable to store integer.
  // Iterate through the first given argument and search for the second argument as a substring.
  // If the substring exists in the full string, increase the count by 1.
  // Return count as an integer.
}
*/

function solution(fullText, searchText) {
  let count = 0;
  for (let i = 0; i < fullText.length; i++) {
    if (fullText.slice(i, i + searchText.length) === searchText) count++;
  }

  return count;
}

// Alternate solution: 
// const solution = (fullText, searchText) => fullText.split(searchText).length - 1;

// Test: 
// console.log(solution("abcdeb", "b"))
// console.log(solution("abc", "b"))
// console.log(solution("abbc", "bb"))
