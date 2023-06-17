/* Check Same Case */

/*
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0

Examples: 
> 'a' and 'g' returns 1
> 'A' and 'C' returns 1
> 'b' and 'G' returns 0
> 'B' and 'g' returns 0
> '0' and '?' returns -1
*/

/*
P - Two arguments as strings.
R - Integer. 1 if both arguments are the same case. 0 if both arguments are letters, but not the same case. -1 if one of the arguments is not a letter.
E - 
sameCase("C", "B")    // 1
sameCase("d", "d")    // 1
sameCase("A", "s")    // 0
sameCase("H", ":")    // -1
P - 
function sameCase(a, b) {
  // Create string variables to store lowercase and uppercase letters of the alphabet.
  // If a & b are both lowercase or both uppercase, return 1.
  // If either a or b is lowercase and the other is uppercase, return 0.
  // Else, either a or b is not a letter of the alphabet and return -1.
}
*/

function sameCase(a, b) {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if ((lowercase.includes(a) && lowercase.includes(b)) || uppercase.includes(a) && uppercase.includes(b)) {
    return 1;
  }
  else if ((lowercase.includes(a) && uppercase.includes(b)) || uppercase.includes(a) && lowercase.includes(b)) {
    return 0;
  }
  else {
    return -1;
  }
}

// Test: 
// console.log(sameCase("C", "B"))
// console.log(sameCase("b", "a"))
// console.log(sameCase("d", "d"))
// console.log(sameCase("A", "s"))
// console.log(sameCase("c", "B"))
// console.log(sameCase("b", "Z"))
// console.log(sameCase("\t", "Z"))
// console.log(sameCase("H", ":"))
