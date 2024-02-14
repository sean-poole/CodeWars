/* Extract The Domain Name From A URL */

/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

/*
P - One argument as a string.
R - String representing only the domain name of the given url.
E - 
domainName("http://google.com")     // "google"
domainName("http://google.co.jp")   // "google"
domainName("www.xakep.ru")          // "xakep"
P - 
function domainName(url) {
  // Remove url prefixes
  // Split the remaining url into an array at "."
  // Return the first element of the array as a string.
}
*/

function domainName(url) {
  url = url.replace("http://", "");
  url = url.replace("https://", "");
  url = url.replace("www.", "");

  return url.split(".")[0];
}

// Test: 
// console.log(domainName("http://google.com"))
// console.log(domainName("http://google.co.jp"))
// console.log(domainName("www.xakep.ru"))
// console.log(domainName("https://youtube.com"))
