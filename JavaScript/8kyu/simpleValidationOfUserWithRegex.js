/* Simple Validation Of A Username With Regex */

/*
Write a simple regex to validate a username. Allowed characters are:
> lowercase letters,
> numbers,
> underscore

Length should be between 4 and 16 characters (both included).
*/

/*
P - One argument as a string.
R - Boolean representing if the string is valid based on the conditions listed above.
E - 
validateUsr("asddsa")       // true
validateUsr("a")            // false
validateUsr("Hass")         // false
validateUsr("asd43 34")     // false
P - 
function validateUsr(username) {
    // Test the given username with regex.
    // Return Boolean.
}
*/

const validateUsr = username => /^[a-z0-9_]{4,16}$/.test(username);

// Test: 
// console.log(validateUsr("asddsa"))
// console.log(validateUsr("a"))
// console.log(validateUsr("Hass"))
// console.log(validateUsr("Hasd_12assssssasasasasasaasasasasas"))
// console.log(validateUsr(""))
// console.log(validateUsr("____"))
// console.log(validateUsr("012"))
// console.log(validateUsr("p1pp1"))
// console.log(validateUsr("asd43 34"))
// console.log(validateUsr("asd43_34"))
