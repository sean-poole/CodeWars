/* Grasshopper - Personalized Message */

/*
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	                    return
name equals owner	        'Hello boss'
otherwise	                'Hello guest'
*/

const greet = (name, owner) => name === owner ? "Hello boss" : "Hello guest";

// Test: 
// testName1 = "Daniel"
// testBoss1 = "Daniel"

// testName2 = "Greg"
// testBoss2 = "Daniel"

// console.log(greet(testName1, testBoss1))
// console.log(greet(testName2, testBoss2))
