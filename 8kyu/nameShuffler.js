/* Name Shuffler */

/*
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)
"john McClane" --> "McClane john"
*/

const nameShuffler = str => str.split(" ").reverse().join(" ");

// Test: 
// console.log(nameShuffler("john McClane"))
// console.log(nameShuffler("Mary jeggins"))
// console.log(nameShuffler("tom jerry"))
