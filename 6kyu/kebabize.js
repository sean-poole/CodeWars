/* Kebabize */

/*
Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps

Notes:
the returned string should only contain lowercase letters
*/

function kebabize(str) {
    return str.split("").filter(c => isNaN(c)).map((c, i) => i == 0 ? c.toLowerCase() : c == c.toUpperCase() ? `-${c.toLowerCase()}` : c).join("");
}

// Test: 
// console.log(kebabize('myCamelCasedString'))
// console.log(kebabize('myCamelHas3Humps'))
