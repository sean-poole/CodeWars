/*
# Concatenating Columns

## Task
Given the table below:
** names table schema **
id
prefix
first
last
suffix

Your task is to use a select statement to return a single column table containing the full title of the person (concatenate all columns together except id), as follows:
** output table schema **
title

Don't forget to add spaces.


## Solution
Apply CONCAT_WS function to prefix, first, last, and suffix columns from the 'names' table.
Separate each value with a space ' '.
Alias the modified string as 'title'.
Return title column.
*/

SELECT CONCAT_WS(' ', prefix, first, last, suffix) AS title
FROM names;
