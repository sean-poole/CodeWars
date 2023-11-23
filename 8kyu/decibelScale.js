/* Decibel Scale */

/*
The Decibel Scale is used to determine the loudness of a sound, measured in dB:

> β is the result we want, defined in dB;
> We multiply the result of the logarithmic operation by 10, otherwise it'll be called "Bel Scale";
> We provide I, the intensity of the sound wave we need to find the loudness of, which is, for the purposes of this Kata, measured in 2D space and, hence, in Watts per square meter;
> Finally, we divide the intensity by the threshold of human hearing, also measured in Watts per square meter. This is the softest possible sound a human ear can hear;
> Since the threshold of human hearing involves an extremely small, long number, we need to utilize a logarithmic operation that will provide us the result in a convenient way.
> Your task is to simply calculate the loudness of a sound wave, given its intensity as a parameter to the dBScale/db_scale function.

Results are automatically rounded to the nearest integer by the test cases.
*/

/*
P - One argument as an integer.
R - Integer representing the loudness of a sound wave from a given intensity.
E - 
Math.round(dBScale(Math.pow(10, -11)))  // 10
P - 
function dBScale(intensity) {
  // Divide the given intensity by 10^-12.
  // Pass the quotient into log10 operation.
  // Multiply the result by 10.
  // Return integer.
}
*/

const dBScale = intensity => 10 * Math.log10(intensity / Math.pow(10, -12));

// Test: 
// console.log(Math.round(dBScale(Math.pow(10, -11))))
