/* Did She Say Hallo? */

/*
You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

Write a simple function to check if the string contains the word hallo in different languages.

These are the languages of the possible people you met the night before:

hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
ahoj - czech republic
czesc - polish
Notes

you can assume the input is a string.
to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
function should be case insensitive to pass the tests
*/

/*
P - One argument as a string.
R - Boolean representing if the string contains a version of "hello" in the language object.
E - 
validateHello("ahoj")   // true
validateHello("meh")    // false
P - 
function validateHello(greetings) {
  // Check the language object for the given string.
  // Return boolean.
}
*/

function validateHello(greetings) {
  let res =/(hello|ciao|salut|hallo|hola|ahoj|czesc)/i.test(greetings);
  return res;
}

// Alternate solution: 
function validateHello(greetings) {
  const languages = { english: "hello", italian: "ciao", french: "salut", german: "hallo", spanish: "hola", czechrepublic: "ahoj", polish: "czesc"};
  let hello = Object.values(languages);

  let arr = greetings.toLowerCase().split(" ");
  for (word of arr) {
    if (hello.includes(word)) return true;
  }

  return false;
}

// Test: 
// console.log(validateHello("ahoj"))
// console.log(validateHello("meh"))
