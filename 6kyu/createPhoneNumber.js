/* Create Phone Number */

/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example: 
> createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!
*/

/*
P - Array of 10 integers. Each integer is between 0-9.
R - String of the given numbers formatted as "(xxx) xxx-xxxx".
E - createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])       // "(123) 456-7890"
P - 
function createPhoneNumber(numbers) {
    // Create template string to establish format "(xxx) xxx-xxxx".
    // Iterate through each element in numbers.
    // Replace "x" in the format with the current element.
    // Return formatted string of numbers.
}
*/

function createPhoneNumber(numbers) {
    let phoneNumber = "(xxx) xxx-xxxx";
    for (num of numbers) {
        phoneNumber = phoneNumber.replace("x", num);
    }

    return phoneNumber;
}

// Test: 
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
// console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
