/* Regex Validate PIN Code */

/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

function validatePIN(pin) {
    let pinLength = pin.length;
    if (pinLength !== 4 && pinLength !== 6) {
        return false;
    }

    for (let i in pin) {
        if (pin[i] < "0" || pin[i] > "9") {
            return false;
        }
    }

    return true;
}

// Alternate solution: 
// const validatePIN = pin => /^(\d{4}|\d{6})$/.test(pin);

// Test: 
// console.log(validatePIN("1"))
// console.log(validatePIN("12"))
// console.log(validatePIN("123"))
// console.log(validatePIN("1234"))
// console.log(validatePIN("12345"))
// console.log(validatePIN("123456"))
// console.log(validatePIN("1234567"))
// console.log(validatePIN("01 345"))
// console.log(validatePIN("-1.234"))
// console.log(validatePIN("123 "))
