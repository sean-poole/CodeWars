/* Function Composition */

/*
Function composition is a mathematical operation that mainly presents itself in lambda calculus and computability. It is explained well here, but this is my explanation, in simple mathematical notation:

f3 = compose(f1, f2)
   Is equivalent to...
f3(a) = f1(f2(a))

Your task is to create a compose function to carry out this task, which will be passed two functions or lambdas. Ruby functions will be passed, and should return, either a proc or a lambda. Remember that the resulting composed function may be passed multiple arguments!

compose(f, g)(x)
=> f(g(x))
*/

function compose(f, g) {
    return function(...args) {
        return f(g(...args));
    }
}

// Alternate solution: 
// const compose = (f, g) => (...args) => f(g(...args));

// Test: 
// const add1 = function(a){return a + 1}
// const id = function(a){return 1}
// console.log(compose(add1, id))

// const addAll3 = function(a, b, c){return a + b + c}
// console.log(compose(add1, addAll3))
