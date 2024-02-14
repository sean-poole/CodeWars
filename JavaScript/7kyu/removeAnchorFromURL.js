/* Remove Anchor From URL */

/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples: 
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

function removeUrlAnchor(url) {
    url = url.split("");
    for (let i = 0; i < url.length; i++) {
        if (url[i] === "#") {
            return url.slice(0, url.indexOf(url[i])).join("");
        }
    }
    return url.join("");
}

// Alternate solution:
// const removeUrlAnchor = url => url.split("#")[0];

// Test: 
// console.log(removeUrlAnchor('www.codewars.com#about'))
// console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'))
// console.log(removeUrlAnchor('www.codewars.com/katas/'))
