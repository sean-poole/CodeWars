/* Statistics For An Athletic Association */

/*
You are the "computer expert" of a local Athletic Association (C.A.A.). Many teams of runners come to compete. Each time you get a string of all race results of every team who has run. For example here is a string showing the individual results of a team of 5 runners:
> "01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"
Each part of the string is of the form: h|m|s where h, m, s (h for hour, m for minutes, s for seconds) are positive or null integer (represented as strings) with one or two digits. Substrings in the input string are separated by ,  or ,.

To compare the results of the teams you are asked for giving three statistics; range, average and median.

> Range : difference between the lowest and highest values. In {4, 6, 9, 3, 7} the lowest value is 3, and the highest is 9, so the range is 9 − 3 = 6.
> Mean or Average : To calculate mean, add together all of the numbers and then divide the sum by the total count of numbers.
> Median : In statistics, the median is the number separating the higher half of a data sample from the lower half. The median of a finite list of numbers can be found by arranging all the observations from lowest value to highest value and picking the middle one (e.g., the median of {3, 3, 5, 9, 11} is 5) when there is an odd number of observations. If there is an even number of observations, then there is no single middle value; the median is then defined to be the mean of the two middle values (the median of {3, 5, 6, 9} is (5 + 6) / 2 = 5.5).

Your task is to return a string giving these 3 values. For the example given above, the string result will be
> "Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"
of the form: "Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"`
where hh, mm, ss are integers (represented by strings) with each 2 digits.

Remarks:
1. if a result in seconds is ab.xy... it will be given truncated as ab.
2. if the given string is "" you will return ""
*/

function stat(str) {
    if (!str) return "";
    let arr = str.split(", ")
                .map(time => time.split("|")
                .reduce((acc, c, i, time) => i === 0 ? acc += +(time[i] * 3600) : i === 1 ? acc += +(time[i] * 60) : acc += +c, 0))
                .sort((a, b) => a - b);

    let range = Math.max(...arr) - Math.min(...arr);
    let rangeH = String(Math.floor(range / 3600)).padStart(2, "0");
    let rangeM = String(Math.floor(range % 3600 / 60)).padStart(2, "0");
    let rangeS = String(Math.floor(range % 3600 % 60)).padStart(2, "0");
    range = `${rangeH}|${rangeM}|${rangeS}`;

    let average = arr.reduce((acc, c) => acc += c, 0) / arr.length;
    let averageH = String(Math.floor(average / 3600)).padStart(2, "0");
    let averageM = String(Math.floor(average % 3600 / 60)).padStart(2, "0");
    let averageS = String(Math.floor(average % 3600 % 60)).padStart(2, "0");
    average = `${averageH}|${averageM}|${averageS}`;

    let median = arr.length % 2 ? arr[Math.floor(arr.length / 2)] : (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2;
    let medianH = String(Math.floor(median / 3600)).padStart(2, "0");
    let medianM = String(Math.floor(median % 3600 / 60)).padStart(2, "0");
    let medianS = String(Math.floor(median % 3600 % 60)).padStart(2, "0");
    median = `${medianH}|${medianM}|${medianS}`;

    return `Range: ${range} Average: ${average} Median: ${median}`;
}

// Test: 
// console.log(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"))
// console.log(stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41"))
