/* Broken Counter */

/*
Our counter prototype is broken. Can you spot, what's wrong here?
*/

/*
P - Broken counter function.
R - Counter object with working properties and methods.
E - 
counter.getValue()  // 0
counter.increase()
counter.getValue()  // 1
counter.reset()
counter.getValue()  // 0
P - 
function Counter() {
  // Change function declaration to a class.
  // Initialize variable to store counting integer in a constructor.
  // Move methods into the Class.
}
*/

class Counter {
  constructor() { 
    this.value = 0;
  }

  getValue() {
    return this.value;
  }

  increase() {
    this.value++;
  }

  reset() {
    this.value = 0;
  }
}

// Test: 
const counter = new Counter();
console.log(counter.getValue())

counter.increase()
console.log(counter.getValue())

counter.reset()
console.log(counter.getValue())
