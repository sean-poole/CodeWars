Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
2742 --> 28
In SQL, you will be given a table years with a column yr for the year. Return a table with a column century.



## Get 'yr' from 'years' table.
## Apply CEIL function to the quotient of yr / 100.0.
## Store value in column 'century'

SELECT CEIL(yr / 100.0) AS century
FROM years;
