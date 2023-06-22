/* FIXME: Get Full Name */

/*
The code provided is supposed return a person's Full Name given their first and last names.
But it's not working properly.

Notes: 
The first and/or last names are never null, but may be empty.

Task: 
Fix the bug so we can all go home early.
*/

/*
P - Incomplete class.
R - Corrected class with `getFullName()` method that concatenates and returns `firstName` and `lastName`.
E - 
person.getFullName    // "Clint Eastwood"
P - 
class Dinglemouse {
  constructor(firstName, lastName) {
    // Bind variables using `this`.
  }

  getFullName() {
    // Call variables using `this`.
    return firstName + " " + lastName;
    // Remove whitespace if a firstName or lastName is not provided.
  }
}
*/

class Dinglemouse {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`.trim();
  }
}

// Test: 
const person = new Dinglemouse("Clint", "Eastwood")

// console.log(person.getFullName())
