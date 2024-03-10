# SQL Basics: Simple Distinct

## Task
For this challenge you need to create a simple DISTINCT statement, you want to find all the unique ages.

people table schema
id
name
age

select table schema
age (distinct)

NOTE: Your solution should use pure SQL. Ruby is used within the test cases to do the actual testing.


## Solution
Select 'age' values from 'people' table.
Apply DISTINCT to return unique 'age' values.
Return unique age entries.

SELECT DISTINCT age
FROM people
