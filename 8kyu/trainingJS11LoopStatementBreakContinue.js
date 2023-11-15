/* Training JS #11: Loop Statement - Break, Continue */

/*
We have seen break in the switch statement, it can jump out the switch statement. it can also be used in the loop statement. an example:
function findFirstOddNumber(arr){
  var result;
  for (var i=0;i<arr.length;i++){
    if (arr[i]%2==1){
      result=arr[i];
      break;
    }
  }
  return result;
}

In this example, for loop traverse the array arr. when the first odd number found, break statement will jump out the for loop.

In the loop statement, we can use continue skipping some code. for example, the following code ignores negative values:
function dontDisplayNegative(arr){
  for (var i=0;i<arr.length;i++){
    if (arr[i]<0) continue;   
    console.log(arr[i])
  }
}

In this example, console.log(arr[i]) is never executed for negative element. thanks to continue.

Through the use of break and continue, you can make the loop statement more flexible and convenient.

Ok, lesson is over. let's us do some task with break and continue.

Task: 
Coding in function grabDoll. function accept 1 parameter:dolls. it's a string array, a list of some dolls.

You need traverse dolls by using for loop. If element is "Hello Kitty" or "Barbie doll", you should push it to a bag(bag is an array, I've defined in the function); if it's other strings, we should use continue skip it.

When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full, you should traverse dolls until the last element.

Return the bag after for loop finished.

You should use for, break and continue in your code. otherwise, your solution may not pass this kata.
*/

/*
P - One argument as an array of strings.
R - Array of string elements representing dolls in the given array with a value of "Hello Kitty" or "Barbie doll". Will not contain more than 3 elements.
E - 
grabDoll(["Mickey Mouse","Hello Kitty","Snow white"])
// ["Hello Kitty"]
grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Snow white"])
// ["Hello Kitty", "Hello Kitty"]
P - 
function grabDoll(dolls) {
  // Create an empty array variable to store dolls.
  // Iterate through the given array.
  // If the current element is a value of "Hello Kitty" or "Barbie doll", push to the created array.
  // Else, continue.
  // If the created element has three elements, break out of the loop.
  // Return array of strings.
}
*/

function grabDoll(dolls) {
  const bag = [];
  for (doll of dolls) {
    if (doll === "Hello Kitty" || doll === "Barbie doll") {
      bag.push(doll);
    } else {
      continue;
    }

    if (bag.length === 3) break;
  }

  return bag;
}

// Test: 
// console.log(grabDoll(["Mickey Mouse","Hello Kitty","Snow white"]))
// console.log(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Snow white"]))
// console.log(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Barbie doll","Snow white"]))
// console.log(grabDoll(["Mickey Mouse","Barbie doll","Hello Kitty","Hello Kitty","Hello Kitty","Snow white"]))
