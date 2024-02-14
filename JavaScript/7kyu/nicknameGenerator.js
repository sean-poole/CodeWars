/* Nickname Generator */

/*
Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

If the 3rd letter is a consonant, return the first 3 letters.
> nickname("Robert") //=> "Rob"
> nickname("Kimberly") //=> "Kim"
> nickname("Samantha") //=> "Sam"

If the 3rd letter is a vowel, return the first 4 letters.
> nickname("Jeannie") //=> "Jean"
> nickname("Douglas") //=> "Doug"
> nickname("Gregory") //=> "Greg"

If the string is less than 4 characters, return "Error: Name too short".

Notes:
> Vowels are "aeiou", so discount the letter "y".
> Input will always be a string.
> Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
> The input can be modified

*/

function nicknameGenerator(name) {
    const vowels = "aeiou";
    if (name.length < 4) return "Error: Name too short";
    return vowels.includes(name.charAt(2)) ? name.slice(0, 4) : name.slice(0, 3);
}

// Test: 
// console.log(nicknameGenerator("Jimmy"))
// console.log(nicknameGenerator("Samantha"))
// console.log(nicknameGenerator("Sam"))
// console.log(nicknameGenerator("Kayne"))
// console.log(nicknameGenerator("Melissa"))
// console.log(nicknameGenerator("James"))
