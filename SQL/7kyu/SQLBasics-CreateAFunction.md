# SQL Basics: Create a Function

## Tasks
For this challenge you need to create a basic Increment function which Increments on the age field of the peoples table.

The function should be called increment, it needs to take 1 integer and increment that number by 1.

You may query the people table while testing but the query must only contain the function on your final submit.

important: you must remove all comments when submitting the kata.

people table schema
id
name
age

NOTE: Your solution should use PL/SQL. Ruby is used within the test cases to do the actual testing.


## Solution
Create a function called increment that takes in one argument as an integer and returns an integer.
Increment the given integer by 1.
End the function definition.

CREATE FUNCTION increment (i integer)
RETURNS integer AS $$
BEGIN
  return i + 1;
END;
$$ language plpgsql;
