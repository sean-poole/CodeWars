/* Be Concise I - The Ternary Operator */

/*
Be Concise I - The Ternary Operator
You are given a function describeAge / describe_age that takes a parameter age (which will always be a positive integer) and does the following:
> If the age is 12 or lower, it return "You're a(n) kid"
> If the age is anything between 13 and 17 (inclusive), it return "You're a(n) teenager"
> If the age is anything between 18 and 64 (inclusive), it return "You're a(n) adult"
> If the age is 65 or above, it return "You're a(n) elderly"

Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.

I'll give you a few hints:
> The title itself is a hint - if you're not sure what to do, always research any terminology in this description that you have not heard of!
> Don't you think the whole "You're a(n) <insert_something_here>" is very repetitive? ;) Perhaps we can shorten it?
> Write everything in one line, \n and other whitespaces counts.

Whatever you do, do not change what the function does. Good luck :)
*/

/*
P - One argument as an integer.
R - String representing the age group of the given integer.
E - 
describeAge(12)   // "You're a(n) kid"
describeAge(13)   // "You're a(n) teenager"
describeAge(18)   // "You're a(n) adult"
describeAge(65)   // "You're a(n) elderly"
P - 
function describeAge(age) {
  // Use ternary operators for each age group.
  // Return string.
}
*/

const describeAge = age => {
  return `You're a(n) ${
    age >= 65 ? "elderly"
    : age >= 18 ? "adult"
    : age >= 13 ? "teenager"
    : "kid"}`;
}

// Test: 
// console.log(describeAge(9))
// console.log(describeAge(10))
// console.log(describeAge(11))
// console.log(describeAge(12))
// console.log(describeAge(13))
// console.log(describeAge(14))
// console.log(describeAge(15))
// console.log(describeAge(16))
// console.log(describeAge(17))
// console.log(describeAge(18))
// console.log(describeAge(19))
// console.log(describeAge(63))
// console.log(describeAge(64))
// console.log(describeAge(65))
// console.log(describeAge(66))
// console.log(describeAge(100))
