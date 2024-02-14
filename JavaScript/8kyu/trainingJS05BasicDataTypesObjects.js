/* Training JS #5: Basic Data Types - Object */

/*
In javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={}

You can define the object attributes during initialization, like this:
> var animal={name:"dog"}

you can also set/get some properties after the object definition, like this:
> var animal={}
> animal.name="dog"  (or animal["name"]="dog")

Task:
Give you a function animal, accept 1 parameter:obj like this:
> {name:"dog",legs:4,color:"white"}

and return a string like this:
> "This white dog has 4 legs."
*/

/*
P - One argument as an object.
R - String describing the properties of the given object.
E - animal({ name: "dog", legs: 4, color: "white" })    // "This white dog has 4 legs."
P - 
function animal(obj) {
  // Format string as `This ${color} ${name} has ${legs} legs.`
  // Return string.
}
*/

const animal = obj => `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;

// Test: 
console.log(animal({ name: "dog", legs: 4, color: "white" }))
console.log(animal({ name: "cock", legs: 2, color: "red" }))
console.log(animal({ name: "rabbit", legs: 4, color: "gray" }))
