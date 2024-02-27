# It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

# -- you are given a table 'removechar' with column 's', return a table with column 's' and your result in a column named 'res'.



## Get 's' from 'removechar' table.
## Apply SUBSTR function to 's'. Start from the second character.
## Use LENGTH function to determine the second to last character of 's'.
## Store modified string in column 'res'.

SELECT 
  s,
  SUBSTR(s, 2, LENGTH(s) - 2) AS res
FROM removechar
