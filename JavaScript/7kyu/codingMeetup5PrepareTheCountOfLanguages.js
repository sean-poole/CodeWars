/* Coding Meetup #5 - Higher-Order Function Series - Prepare The Count Of Languages */

/*
You will be given an array of objects (associative arrays in PHP, table in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of each coding language represented at the meetup.

For example, given the following input array:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];

your function should return the following object (associative array in PHP, table in COBOL):
{ C: 2, JavaScript: 1, Ruby: 1 }

Notes:
> The order of the languages in the object does not matter.
> The count value should be a valid number.
> The input array will always be valid and formatted as in the example above.
*/

/*
P - One argument as an array of objects containing a person's information.
R - Object containing the count of each coding language at the meetup.
E - 
list = [
            { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
            { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
            { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
            { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
        ]

countLanguages(list)            // { C: 2, JavaScript, 1, Ruby: 1 }
P - 
function countLanguages(list) {
    // Create an empty object.
    // Iterate through the given object and check the values of the language key.
    // Add languages as a key to the created object and count the instances of it in the given object.
    // Return created object.
}
*/

function countLanguages(list) {
    let languages = {};
    for (person of list) {
        if (person.language in languages) {
            languages[person.language] += 1;
        } else {
            languages[person.language] = 1;
        }
    }

    return languages;
}

// Alternate solution: 
// function countLanguages(list) {
//     let languages = {};
//     list.forEach(x => languages[x.language] = (languages[x.language] || 0) + 1);
//     return languages;
// }

// Test: 
// let list = [
//                 { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
//                 { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
//                 { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
//                 { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
//             ]

// console.log(countLanguages(list))
