# In your application, there is a section for adults only. You need to get a list of names and ages of users from the users table, who are 18 years old or older.

# users table schema
# name
# age

# NOTE: Your solution should use pure SQL. Ruby is used within the test cases just to validate your answer.



## Get 'name' and 'age' values from table 'users'.
## Filter the returned rows for 'age' values >= 18.

SELECT name, age
FROM users
WHERE age >= 18
