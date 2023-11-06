/* Sort My Animals */

/*
Consider the following class:
var Animal = { 
    name: "Cat", 
    numberOfLegs: 4 
}

Write a method that accepts a list of objects of type Animal, and returns a new list. The new list should be a copy of the original list, sorted first by the animal's number of legs, and then by its name.

If an empty list is passed in, it should return an empty list back.
*/

/*
P - One argument as an array of objects.
R - Array of objects sorted first by numberOfLegs, then by name.
E - 
const a1 = [
  { name: "Cat", numberOfLegs: 4 },
  { name: "Snake", numberOfLegs: 0 },
  { name: "Dog", numberOfLegs: 4 },
  { name: "Pig", numberOfLegs: 4 },
  { name: "Human", numberOfLegs: 2 },
  { name: "Bird", numberOfLegs: 2 }
];
console.log(sortAnimal(a1))
// returns [
    { name: "Snake", numberOfLegs: 0 },
    { name: "Bird", numberOfLegs: 2 },
    { name: "Human", numberOfLegs: 2 },
    { name: "Cat", numberOfLegs: 4 },
    { name: "Dog", numberOfLegs: 4 },
    { name: "Pig", numberOfLegs: 4 }
]
P - 
function compareAnimals(a, b) {
  // Sort the numberOfLegs properties of the given inputs in ascending order.
  // If the numberOfLegs are equal, sort by name.
}

function sortAnimal(animals) {
  // If the given array is not empty,
  // Create a copy of the array and apply the created compareAnimals function to sort its elements.
  // Else, return null.
}
*/

const compareAnimals = (a, b) => {
  return a.numberOfLegs - b.numberOfLegs || a.name.localeCompare(b.name);
}

const sortAnimal = animals => {
  return animals ? animals.slice().sort(compareAnimals) : null;
}

// Test: 
const a1 = [
  { name: "Cat", numberOfLegs: 4 },
  { name: "Snake", numberOfLegs: 0 },
  { name: "Dog", numberOfLegs: 4 },
  { name: "Pig", numberOfLegs: 4 },
  { name: "Human", numberOfLegs: 2 },
  { name: "Bird", numberOfLegs: 2 }
];
const a2 = [
  { name: 'Snake', numberOfLegs: 0 },
  { name: 'Bird', numberOfLegs: 2 },
  { name: 'Human', numberOfLegs: 2 },
  { name: 'Cat', numberOfLegs: 4 },
  { name: 'Dog', numberOfLegs: 4 },
  { name: 'Pig', numberOfLegs: 4 }
];
const a3 = [
  { name: "Centipede", numberOfLegs: 100 },
  { name: "Snail", numberOfLegs: 0 },
  { name: "Lizard", numberOfLegs: 4 },
  { name: "Dog", numberOfLegs: 4 },
  { name: "Human", numberOfLegs: 2 },
  { name: "Bird", numberOfLegs: 2 }
];
const a4 = [
  { name: 'Snail', numberOfLegs: 0 },
  { name: 'Bird', numberOfLegs: 2 },
  { name: 'Human', numberOfLegs: 2 },
  { name: 'Dog', numberOfLegs: 4 },
  { name: 'Lizard', numberOfLegs: 4 },
  { name: 'Centipede', numberOfLegs: 100 }
];

// console.log(sortAnimal(a1))
// console.log(sortAnimal(a2))
// console.log(sortAnimal(a3))
// console.log(sortAnimal(a4))
