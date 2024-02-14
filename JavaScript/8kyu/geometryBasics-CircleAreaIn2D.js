/* Geometry Basics: Circle Area in 2D */

/*
This series of katas will introduce you to basics of doing geometry with computers.

Write the function circleArea/CircleArea which takes in a Circle object and calculates the area of that circle.

The Circle class can be seen below:
// Represents a Circle where center is a Point and radius is a Number
class Circle {
  constructor(center, radius) { 
    this.center = center; 
    this.radius = radius;
  }
}

And the Point class can be seen below:
// Represents a Point where x and y are Numbers
class Point {
  constructor (x,y) { 
    this.x = x;
    this.y = y; 
  }
}

Tests round answers to 6 decimal places.
*/

/*
P - One argument as an object containing the center and radius of a circle.
R - Integer representing the area of the given circle object.
E - 
circleArea( new Circle( new Point(10, 10), 30)).toFixed(6)      // 2827.433388
circleArea( new Circle( new Point(25, -70), 30)).toFixed(6)     // 2827.433388
circleArea( new Circle( new Point(-15, 5), 0)).toFixed(6)       // 0
circleArea( new Circle( new Point(-15, 5), 12.5)).toFixed(6)    // 490.873852
P - 
function circleArea(circle) {
  // Square the radius of the given circle object.
  // Multiply the result by pi.
  // Return integer.
}
*/

class Circle {
  constructor(center, radius) { 
    this.center = center; 
    this.radius = radius;
  }
}

class Point {
  constructor (x,y) { 
    this.x = x;
    this.y = y; 
  }
}

const circleArea = circle => Math.PI * Math.pow(circle.radius, 2);

// Test: 
// console.log(+circleArea( new Circle( new Point(10, 10), 30)).toFixed(6))
// console.log(+circleArea( new Circle( new Point(25, -70), 30)).toFixed(6))
// console.log(+circleArea( new Circle( new Point(-15, 5), 0)).toFixed(6))
// console.log(+circleArea( new Circle( new Point(-15, 5), 12.5)).toFixed(6))
