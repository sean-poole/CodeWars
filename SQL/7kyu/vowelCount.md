# Vowel Count

## Task
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

You are given a table 'getcount' with column 'str', return a table with column 'str' and your result in a column named 'res'.


## Solution
Select str from the getcount table.
Remove all instances of vowels from str, calculate the length of the modified str, and subtract from the length of the original str.
Store calculated result as res.
Return columns of 'str' with original strings and 'res' with the count of vowels in each string.

SELECT
  str,
  LENGTH(str) - LENGTH(TRANSLATE(str, 'aeiou', '')) AS res
FROM getcount;
