/* Interview Questions (Easy) */

/*
You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (*).

For example:
"Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
As you can see, the letter c is shown only once, but with 2 asterisks.

The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

Note that the return string must list the letters in order of their first appearance in the original string.

More examples:
"Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
"Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"
*/

/*
P - One argument as a string.
R - String representing the letters and the number of their occurrences as asterisks (*) in the given string.
E - 
getStrings("Chicago")     // "c:**,h:*,i:*,a:*,g:*,o:*"
getStrings("Bangkok")     // "b:*,a:*,n:*,g:*,k:**,o:*"
getStrings("Las Vegas")   // "l:*,a:**,s:**,v:*,e:*,g:*"
P - 
function getStrings(city) {
  // Create an object to store letters as keys and their occurrences as values.
  // Iterate through the given string.
  // Add letters to the created object and increment the count with asterisks.
  // Create an empty array.
  // Iterate through the key:value pairs and push to the created array.
  // Join the array with ","
  // Return string.
}
*/

let alphabet = "abcdefghijklmnopqrstuvwxyz";

function getStrings(city) {
  let obj = {};
  for (letter of city.toLowerCase()) {
    if (alphabet.includes(letter) && obj[letter]) {
      obj[letter] += "*";
    } else if (alphabet.includes(letter)) {
      obj[letter] = "*";
    }
  }

  let arr = [];
  for (letter in obj) {
    arr.push(`${letter}:${obj[letter]}`);
  }

  return arr.join(",");
}

// Test: 
// console.log(getStrings("Chicago"))
// console.log(getStrings("Bangkok"))
// console.log(getStrings("Las Vegas"))
