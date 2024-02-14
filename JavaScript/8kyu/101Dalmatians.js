/* 101 Dalmatians - Squash The Bugs, Not The Dogs! */

/*
Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!
By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.
The number of dogs will always be a number and there will always be at least 1 dog.
*/

/*
P - Integer >= 0.
R - String.
E - 
howManyDalmatians(26)           // "More than a handful!"
howManyDalmatians(8)            // "Hardly any"
howManyDalmatians(100)          // "Woah that's a lot of dogs!"
howManyDalmatians(101)          // "101 DALMATIANS!!!"
P - 
function howManyDalmatians(number) {
    // Conditional to check if num <= 10, num <= 50, num === 101.
    // Return appropriate string.
}
*/

function howManyDalmatians(number) {
    let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
    return number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number === 101 ? dogs[3] : dogs[2];
}

// Test: 
// console.log(howManyDalmatians(26))
// console.log(howManyDalmatians(8))
// console.log(howManyDalmatians(14))
// console.log(howManyDalmatians(80))
// console.log(howManyDalmatians(100))
// console.log(howManyDalmatians(101))
