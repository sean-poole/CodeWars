/* Grasshopper - Function Syntax Debugging */

/*
A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.
*/

/*
P - Broken function with syntax errors
R - Working function
E - 
function main[verb, noun]
    return verb + noun
}

function main(verb, noun) {
    return verb + noun;
}
P - Parameters in (). Opening and closing brackets {}.
*/

function main(verb, noun) {
    return verb + noun;
}

// Test: 
// console.log(main("take ", "item"))
// console.log(main("use ", "sword"))
