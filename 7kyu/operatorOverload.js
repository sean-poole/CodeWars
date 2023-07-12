/* Operator Overload */

/*
We have a class named 'Foo' with a 'val' attribute.
> var foo = new Foo(2);     // foo.val = 2;
> var boo = new Foo(3);    // boo.val = 3;

We want to be able to sum two Foo object using the '+' operator.
> foo + boo // => must return 5
*/

/*
P - One argument as an integer.
R - Integer representing the value passed in to the Class.
E - 
new Foo(2) + new Foo(3)   // 5
new Foo(-2) + new Foo(3)  // -1
P - 
let Foo = function(value) {
  this.val = value;
}

// Create a method that returns the value of the Class.
*/

let Foo = function(value) {
  this.val = value;
}

Foo.prototype.valueOf = function() {
  return this.val;
}

// Test: 
// console.log(new Foo(2) + new Foo(3))
// console.log(new Foo(-2) + new Foo(3))
// console.log(new Foo(-21) + new Foo(-7))
// console.log(new Foo(1.5) + new Foo(0.2))
