/* Classy Classes */

/*
Classy Classes
Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes

Task
Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34
*/

/*
P - Incomplete class that takes in one argument as a string and one argument as an integer.
R - Completed class.
E - 
const john = new Person("john", 34);
john.name()       // "john"
john.age()        // 34
john.getInfo()    // "johns age is 34"
P - 
class Person {
  constructor(name, age) {
    // Store name and age variables.
    // Create info variable to format string.
  }

  // Create function to get info and return formatted string.
}
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.info = `${this.name}s age is ${this.age}`;
  }

  getInfo() {
    return this.info;
  }
}

// Test: 
const john = new Person("john", 34);
// console.log(john.name)
// console.log(john.age)
// console.log(john.getInfo())
