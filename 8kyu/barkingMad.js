/* Barking Mad */

/*
Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

> snoopy.bark(); // return "Woof"
> scoobydoo.bark(); // undefined

Use method prototypes to enable all Dogs to bark.
*/

/*
P - One string as an argument.
R - Dog class containing breed variable and bark method.
E - 
snoopy.bark()       // "Woof"
scoobydoo.bark()    // "Woof"
P - 
function Dog(breed) {
  this.breed = breed;
}

let snoopy = new Dog("Beagle");

snoopy.bark = function() {
  return "Woof";
}

let scoobydoo = new Dog("Great Dane");

scoobydoo.bark = function() {
  return "Woof";
}

// Convert dog function to a class containing breed variable and bark method.
*/

class Dog {
  constructor(breed) {
    this.breed = breed;
  }

  bark() {
    return "Woof";
  }
}

// Test: 
const snoopy = new Dog("Beagle");
const scoobydoo = new Dog("Great Dane");

// console.log(snoopy.bark())
// console.log(scoobydoo.bark())
