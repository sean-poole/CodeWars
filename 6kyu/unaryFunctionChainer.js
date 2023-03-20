/* Unary Function Chainer */

/*
Your task is to write a higher order function for chaining together a list of unary functions. In other words, it should return a function that does a left fold on the given functions.
chained([a,b,c,d])(input)

Should yield the same result as
d(c(b(a(input))))
*/

/*
P - Array of helper functions.
R - Higher order function that chains and executes an array of helper functions.
E - 
chained([a, b, c, d])(input)        // d(c(b(a(input))))
P - 
*/

function chained(functions) {
    return function inner(params) {
        for (let i = 0; i < functions.length; i++) {
            params = functions[i](params);
        }

        return params;
    }
}

// Alternate solution:
// const chained = functions => params => functions.reduce((res, func) => func(res), params);

// Test: 
const f1 = x => x * 2;
const f2 = x => x + 2;
const f3 = x => Math.pow(x, 2);

// console.log(chained([f1, f2, f3]))

