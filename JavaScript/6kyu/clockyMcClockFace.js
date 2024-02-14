/* Clocky McClock-Face */

/*
Story: 
Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.
And because the local council has lost most of our tax money to a Nigerian email scam there are no funds to fix the clock properly.
Instead, they are asking for volunteer programmers to write some code that tell the time by only looking at the remaining hour-hand!
What a bunch of cheapskates!
Can you do it?

Kata: 
Given the angle (in degrees) of the hour-hand, return the time in 12 hour HH:MM format. Round down to the nearest minute.

Examples: 
> 12:00 = 0 degrees
> 03:00 = 90 degrees
> 06:00 = 180 degrees
> 09:00 = 270 degrees
> 12:00 = 360 degrees

Notes: 
> 0 <= angle <= 360
> Do not make any AM or PM assumptions for the HH:MM result. They are indistinguishable for this Kata.
>> 3 o'clock is 03:00, not 15:00
>> 7 minutes past midnight is 12:07
>> 7 minutes past noon is also 12:07
*/

/*
P - Number. 0 <= x <= 360.
R - String of the time in 12 hour HH:MM format.
E - 
whatTimeIsIt(0)         // "12:00"
whatTimeIsIt(90)        // "03:00"
whatTimeIsIt(180)       // "06:00"
whatTimeIsIt(270)       // "09:00"
whatTimeIsIt(360)       // "12:00"
P - 
function whatTimeIsIt(angle) {
    // 90 degrees = 3 hours. 30 degrees = 1 hour. 0.5 degrees = 1 minute.
    // Divide the angle by 30 and round down to get hours. Set to 12 if it returns 0.
    // Multiply the remainder by 2 and round down to convert degrees to minutes.
    // Format and return HH:MM.
}
*/

function whatTimeIsIt(angle) {
    let time = new Array;
    let hour = Math.floor(angle / 30) || 12;
    let minute = Math.floor(angle % 30 * 2);

    time.push(hour.toString());
    time.push(minute.toString());

    return time.map(e => e.length === 1 ? `0${e}` : e).join(":");
}

// Test: 
// console.log(whatTimeIsIt(0))
// console.log(whatTimeIsIt(90))
// console.log(whatTimeIsIt(180))
// console.log(whatTimeIsIt(270))
// console.log(whatTimeIsIt(360))
// console.log(whatTimeIsIt(40))
