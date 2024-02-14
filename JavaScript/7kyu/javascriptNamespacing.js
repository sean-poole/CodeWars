/* JavaScript Namespacing */

/*
Define a class named MyClass inside a namespace MyNamespace. The class constructor should accept a single string argument. It should also have a function named sayHello that returns the string passed into the constructor.

Example:
> var myObject = new MyNamespace.MyClass('Hello!');
> var phrase = myObject.sayHello(); // phrase should be 'Hello!'

The interesting part is that MyClass should only be accessible via the namespace and should not define any extra global variables. Code should not redefine an existing namespace, but should also function if the namespace is not previously defined.
*/

/*
P - One argument as a string passed into the class constructor.
R - MyNamespace object with a class of MyClass that contains a constructor to store the given argument as a property value and a sayHello method.
E - 
const myclass = new MyNamespace.MyClass("hello")
(myclass.sayHello()   // "hello"
P - 
MyNamespace.MyClass = class {
  // Create constructor to store a given argument as a property value.
  // Create sayHello method to return the stored property value.
}
*/

const MyNamespace = MyNamespace || {};

MyNamespace.MyClass = class {
  constructor(arg) {
    this.arg = arg;
  }

  sayHello() {
    return this.arg;
  }
}

const myclass = new MyNamespace.MyClass("hello")
// console.log(myclass.sayHello())
