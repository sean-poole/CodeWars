/* Manipulate URL Parameters */

/*
You need to write a function ( addOrChangeUrlParameter(url, keyValueParameter) ) that can manipulate URL parameters.

It should be able to
> add a parameter to an existing URL,
but also to
> change a parameter if it already exists.

Example:
addOrChangeUrlParameter("www.example.com", "key=value") 
// -> 'www.example.com?key=value' (adds a parameter).

addOrChangeUrlParameter("www.example.com?key=value", "key2=value2" ) 
// -> 'www.example.com?key=value&key2=value2' (adds another parameter).

addOrChangeUrlParameter("www.example.com?key=oldValue`", "key=newValue" ) 
// ->'www.example.com?key=newValue' (changes the parameter).
*/

/*
P - Two arguments as strings.
R - String representing the original string with added or updated parameters.
E - 
addOrChangeUrlParameter("www.example.com", "key=value")
// "www.example.com?key=value"
addOrChangeUrlParameter("www.example.com?key=value", "key2=value2")
// "www.example.com?key=value&key2=value2"
addOrChangeUrlParameter("www.example.com?key=oldValue", "key=newValue")
// "www.example.com?key=newValue"
P - 
function addOrChangeUrlParameter(url, param) {
  // Regex magic.
}
*/

function addOrChangeUrlParameter (url, param) {
  url = url.replace(new RegExp(param.split('=')[0]+'=[^&]*'), param);
  return url + (url.indexOf(param) >= 0 ? '' : (url.indexOf('?')>=0?'&':'?')+param);
}

// Test: 
// console.log(addOrChangeUrlParameter("www.example.com", "key=value"))
// console.log(addOrChangeUrlParameter("www.example.com?key=value", "key2=value2"))
// console.log(addOrChangeUrlParameter("www.example.com?key=oldValue", "key=newValue"))
