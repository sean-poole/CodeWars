/* Count Strings in Objects */

/*
Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
})
//returns 3
*/

/*
P - One argument as an object containing property values of any type.
R - Integer representing the number of string values inside the given object.
E - 
strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime", 2, 3, 4],
  fifth: null,
  sixth: undefined,
  seventh: {}
});

// Returns 3
P - 
function strCount(obj) {
  // Create an integer variable to store count.
  // Create a function that iterates through an object and evalutes the type of each property value.
  // If the current value === "string", increment count.
  // If the current value === "object" && !== null, recursively pass the object into the created function.
  // Call the recursive function to begin iterating through the given object.
  // Return integer.
}
*/

function strCount(obj) {
  let count = 0;

  function countStrings(obj) {
    for (let key in obj) {
      if (typeof obj[key] === "string") {
        count++;
      } else if (typeof obj[key] === "object" && obj[key] !== null) {
        countStrings(obj[key]);
      }
    }
  }

  countStrings(obj);

  return count;
}

// Alternate solution: 
// function strCount(obj) {
//   let count = 0;
//   for (key in obj) {
//     if (typeof obj[key] === "string") count++;
//     if (typeof obj[key] === "object") count += strCount(obj[key]);
//   }

//   return count;
// }

// Test: 
const obj1 = {
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime", 2, 3, 4],
  fifth: null
};

const obj2 = {
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime", 2, 3, 4],
  fifth: null,
  sixth: undefined,
  seventh: {}
};

// console.log(strCount(obj1))
// console.log(strCount(obj2))
