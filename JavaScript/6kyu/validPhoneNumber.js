/* Valid Phone Number */

/*
Write a function that accepts a string, and returns true if it is in the form of a phone number.
Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

Only worry about the following format:
(123) 456-7890 (don't forget the space after the close parentheses)

Examples:
"(123) 456-7890"  => true
"(1111)555 2345"  => false
"(098) 123 4567"  => false
*/

/*
P - One argument as a string.
R - Boolean representing if the given string is a valid phone number formatted as "(xxx) xxx-xxxx".
E - 
validPhoneNumber("(123) 456-7890")      // true
validPhoneNumber("(1111)555 2345")      // false
validPhoneNumber("(098) 123 4567")      // false
P - 
function validPhoneNumber(phoneNumber) {
  // Iterate through the given string.
  // Check if each element is a number, with the exception of: 
  // - Elements at index 0 & 4 should respectively be "(" & ")".
  // - Element at index 5 should be " ".
  // - Element at index 9 should be "-"
  // Return boolean.
}
*/

function validPhoneNumber(phoneNumber){
  for (let i = 0; i < phoneNumber.length; i++) {
    switch (i) {
      case 0: if (phoneNumber[i] !== "(") return false; break;
      case 4: if (phoneNumber[i] !== ")") return false; break;
      case 5: if (phoneNumber[i] !== " ") return false; break;
      case 9: if (phoneNumber[i] !== "-") return false; break;
      default: if (isNaN(phoneNumber[i])) return false; break;
    }
  }

  return true;
}

// Test: 
// console.log(validPhoneNumber("(123) 456-7890"))
// console.log(validPhoneNumber("(0123) 456-7890"))
