/* Basic Subclasses - Adam and Eve */

/*
According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.

You have to do God's job. The creation method must return an array of length 2 containing objects (representing Adam and Eve). The first object in the array should be an instance of the class Man. The second should be an instance of the class Woman. Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes.
*/

/*
P - Empty God class.
R - Man and Woman objects with "name" property values of "Adam" and "Eve".
E - 
const humans = God.create();
humans[0]   // "Adam"
humans[1]   // "Eve"
P - 
class God {
  // Create a function that creates instances of Man and Woman.
  // Return objects as elements in an array.
}

class Human {
  // Base class for Man and Woman.
  // Constructor takes in name and assigns it to name property of Human class.
}

class Man {
  // Extends Human class.
  // Invoke constructor of Human class with super().
}

class Woman {
  // Extends Human class.
  // Invoke constructor of Human class with super().
}
*/

class God {
  static create() {
    const adam = new Man("Adam");
    const eve = new Woman("Eve");
    return [adam, eve];
  }
}

class Human {
  constructor(name) {
    this.name = name;
  }
}

class Man extends Human {
  constructor(name) {
    super(name);
  }
}

class Woman extends Human {
  constructor(name) {
    super(name);
  }
}

// Test: 
const humans = God.create();
// console.log(humans[0])
// console.log(humans[1])
