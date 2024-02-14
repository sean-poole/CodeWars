/* Number-like Counter */

/*
You're going to implement a simple counter class. The counter will start at zero, and every time its incr method is called, it will increase by 1.

There's one caveat: Your counter must act like a number and support arithmetic operations and comparisons.

For example:
var c = new Counter();
c.incr(); // counter is now at 1
c + 1; // 2
c > 1; // false
c > 0; // true
c == 1; // true
Math.sqrt(c); // 1
You are not required to support equality comparison between two Counter instances.
*/

/*
P - Empty counter function and incr method.
R - Counter class with incr method.
E - 
const c = new Counter();
c.incr();
c + 1           // 2
c > 1           // false
c > 0           // true
c == 1          // true
Math.sqrt(c)    // 1
P - 
// Create 'Counter' class
// Initialize starting number at 0.
// Create method to increment counter.
// Create method to return the value.
*/

class Counter {
  constructor() {
    this.n = 0;
  }

  incr() {
    this.n++;
  }

  valueOf() {
    return this.n;
  }
}

// Test: 
const c = new Counter();
c.incr();

// console.log(c + 1)
// console.log(c > 1)
// console.log(c > 0)
// console.log(c == 1)
// console.log(Math.sqrt(c))