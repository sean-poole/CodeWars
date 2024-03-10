# SQL Basics: Simple Where and Order By

## Task
For this challenge you need to create a simple SELECT statement that will return all columns from the people table WHERE their age is over 50

people table schema: 
id
name
age

You should return all people fields where their age is over 50 and order by the age descending

NOTE: Your solution should use pure SQL. Ruby is used within the test cases to do the actual testing.


## Solution
Select all columns from 'people' table.
Filter returned columns by 'age' values over 50.
Sort the filtered columns by 'age' in descending order.

SELECT *
FROM people
WHERE age > 50
ORDER BY age DESC
