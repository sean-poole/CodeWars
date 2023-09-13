/* IP Validation */

/*
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Valid inputs examples:
> 1.2.3.4
> 123.45.67.89

Invalid input examples:
> 1.2.3
> 1.2.3.4.5
> 123.456.78.90
> 123.045.067.089

Notes:
> Leading zeros (e.g. 01.02.03.04) are considered invalid
> Inputs are guaranteed to be a single string
*/

/*
P - One argument as a string.
R - Boolean representing if the given string is a valid IP address. Contains 4 octects with values between 0 and 255.
E - 
isValidIP("1.2.3.4")            // true
isValidIP("123.45.67.89")       // true
isValidIP("1.2.3")              // false
isValidIP("1.2.3.4.5")          // false
isValidIP("123.456.78.90")      // false
isValidIP("123.045.067.089")    // false
P - 
function isValidIP(str) {
  // Create a variable that stores the given string split into an array at "."
  // If the length of the array is not equal to 4, return false.
  // Iterate through each element of the array.
  // Return false if the element is not exclusively made up of digits or includes a space.
  // Return false if the element is not between the range of 0 - 255, or is a value greater than 0 and begins with a 0.
  // If all conditions are met, return true.
}
*/

function isValidIP(str) {
  const octets = str.split(".");
  if (octets.length !== 4) return false;
  
  for (octet of octets) {
    if (!octet.match(/^\d+$/) || octet.includes(" ") || octet !== octet.trim()) {
      return false;
    }

    const octetValue = parseInt(octet, 10);
    if (octetValue < 0 || octetValue > 255 || (octet.length > 1 && octet[0] === "0")) {
      return false;
    }
  }

  return true;
}

// Test: 
// console.log(isValidIP("0.0.0.0"))
// console.log(isValidIP("12.255.56.1"))
// console.log(isValidIP("137.255.156.100"))
// console.log(isValidIP(""))
// console.log(isValidIP("abc.def.ghi.jkl"))
// console.log(isValidIP("123.456.789.0"))
// console.log(isValidIP("12.34.56"))
// console.log(isValidIP("01.02.03.04"))
// console.log(isValidIP("256.1.2.3"))
// console.log(isValidIP("1.2.3.4.5"))
// console.log(isValidIP("123,45,67,89"))
// console.log(isValidIP("1e0.1e1.1e2.2e2"))
// console.log(isValidIP(" 1.2.3.4"))
// console.log(isValidIP("1.2.3.4 "))
// console.log(isValidIP("12.34.56.-7"))
// console.log(isValidIP("1.2.3.4\n"))
// console.log(isValidIP("\n1.2.3.4"))
