/* Polish Alphabet */

/*
There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:
ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:
"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
*/

/*
P - One argument as a string.
R - String representing the given string without the use of Polish letters.
E - 
correctPolishLetters("Jędrzej Błądziński")        // "Jedrzej Bladzinski"
correctPolishLetters("Lech Wałęsa")               // "Lech Walesa"
correctPolishLetters("Maria Skłodowska-Curie")    // "Maria Sklodowska-Curie"
P - 
function correctPolishLetters(string) {
  // Split the given string into an array of single letter elements.
  // Iterate through the array.
  // If the current element is represented in the provided dictionary, replace the current element with its English equivalent.
  // Join the array.
  // Return string.
}
*/

const polish = { "ą": "a", "ć": "c", "ę": "e", "ł": "l", "ń": "n", "ó": "o", "ś": "s", "ź": "z", "ż": "z" };

function correctPolishLetters(string) {
  let arr = string.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in polish) {
      arr[i] = polish[arr[i]];
    }
  }

  return arr.join("");
}

// Test: 
// console.log(correctPolishLetters("Jędrzej Błądziński"))
// console.log(correctPolishLetters("Lech Wałęsa"))
// console.log(correctPolishLetters("Maria Skłodowska-Curie"))
