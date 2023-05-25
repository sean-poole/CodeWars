/* Reverse Vowels In A String */

/*
In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:
> "Hello!" => "Holle!"
> "Tomatoes" => "Temotaos"
> "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"

For simplicity, you can treat the letter y as a consonant, not a vowel.

Good luck!
*/

/*
P - One argument as a string.
R - Given string with the order of vowels reversed.
E - 
reverseVowels("Hello!")     // "Holle!"
reverseVowels("Tomatoes")   // "Temotaos"
P - 
function reverseVowels(str) {
  // Create a variable that stores an array of all the vowels in the given string. Reverse its order.
  // Split the given string into an array of characters, where each element represents a character.
  // Create a variable that stores the current index of the vowels array starting at 0.
  // Split the given string into an array and iterate through each letter.
  // Replace vowels with the element at the current index of the vowels array.
  // Increment counter after each replacement.
  // Join the array of letters and return as a string.
}
*/

function reverseVowels(str) {
  let stringVowels = str.split("").filter(e => "aeiouAEIOU".includes(e)).reverse();
  let vowelIndex = 0;

  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (stringVowels.includes(arr[i])) {
      arr[i] = stringVowels[vowelIndex];
      vowelIndex++;
    }
  }

  return arr.join("");
}

// Test: 
// console.log(reverseVowels("Hello!"))
// console.log(reverseVowels("Tomatoes"))
// console.log(reverseVowels("Reverse Vowels In A String"))
