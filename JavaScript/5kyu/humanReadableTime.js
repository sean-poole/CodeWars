/* Human Readable Time */

/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)
*/

/*
P - Integer >= 0 representing seconds.
R - String of the given integer represented as time in HH:MM:SS format.
E - 
humanReadable(0)            ?? "00:00:00"
humanReadable(90)           // "00:01:30"
humanReadable(45296)        // "12:34:56"
P - 
function humanReadable(seconds) {
    // 
}
*/

function humanReadable(seconds) {
    let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = Math.floor((seconds % 3600) % 60);

    const formatNumber = number => ("0" + number).slice(-2);

    return `${formatNumber(h)}:${formatNumber(m)}:${formatNumber(s)}`;
}

// Test: 
// console.log(humanReadable(0))
// console.log(humanReadable(59))
// console.log(humanReadable(60))
// console.log(humanReadable(90))
// console.log(humanReadable(3599))
// console.log(humanReadable(3600))
// console.log(humanReadable(45296))
// console.log(humanReadable(86399))
// console.log(humanReadable(86400))
// console.log(humanReadable(359999))
