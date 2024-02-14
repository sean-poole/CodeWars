/* Unique Push - No Dupes */

/*
Write a function that will take an array and a person object as parameters. The function will only push a "person" object onto the end of an array if someone with that phone number doesn't already exist in that array.

-A "person" is a javascript object with a name and a phoneNumber : {name:'SomeName', phoneNumber:1234567890}
-A duplicate person object is an object with the same phoneNumber as someone else

If the person object is unique, push them onto the end of the array, and return true.
If the person object is NOT unique, don't push them to the array and return false;
If the person doesn't have a phoneNumber, don't add them to the array and return false.
*/

/*
P - One argument as an array, one argument as an object.
R - Boolean representing if the given object does not exist in the given array. Push the given object to the given array if true.
E - 
uniquePush(nameArr, bob)      // true
uniquePush(nameArr, joe)      // true
uniquePush(nameArr, dupeJoe)  // false
P - 
function uniquePush(arr, obj) {
  // Check if the phoneNumber property in the given object is provided and if the property exists in the given array.
  // If a phone number is provided and it does not exist in the given array, push the object to the array and return true.
  // Else, do not push the object to the array and return false.
}
*/

function uniquePush(arr, obj) {
  if (obj.phoneNumber && arr.filter(person => person.phoneNumber === obj.phoneNumber).length === 0) {
    arr.push(obj);
    return true;
  }

  return false;
}

// Test: 
const nameArr = [];
const bob = { name: "bob", phoneNumber: 1234 }
const joe = { name: "joe", phoneNumber: 12345 }
const dupeJoe = { name: "I am duped", phoneNumber: 12345 }

// console.log(uniquePush(nameArr, bob))
// console.log(uniquePush(nameArr, joe))
// console.log(uniquePush(nameArr, dupeJoe))
