/* Grasshopper - Debug */

/*
Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

Find the errors in the code to get the celsius converter working properly.

To convert fahrenheit to celsius:

celsius = (fahrenheit - 32) * (5/9)
Remember that typically temperatures in the current weather conditions are given in whole numbers. It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth. Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.
*/

/*
P - Broken functions with syntax and logical errors.
R - Working functions.
E - 
P - 
function weatherInfo(temp) {
  let c : convert(temp)
  if (c > 0) 
    return (c + " is freezing temperature")
  else 
    return (c = " is above freezing temperature")
}

// Variable `c` needs to be assigned with an "=".
// Called function name in variable assignment is incorrect.
// Missing {} for if/else statement.
// Return statements should be switched.

function convertToCelsius(temp) {
  let celsius = (temperatur) - 32 + (5/9)
  return temperature
}

// Called argument in variable assignment is incorrect.
// Incorrect calculation to convert fahrenheit to celsius.
// Variable `celsius` should be returned, rather than `temperature`.
*/

function weatherInfo(temp) {
  let c = convertToCelsius(temp);
  return c > 0 ? `${c} is above freezing temperature` : `${c} is freezing temperature`;
}

const convertToCelsius = temperature => (temperature - 32) * (5/9);

// Test: 
// console.log(weatherInfo(50))
// console.log(weatherInfo(23))
