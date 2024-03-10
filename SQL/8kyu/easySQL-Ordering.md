# Task
Your task is to sort the information in the provided table 'companies' by number of employees (high to low). Returned table should be in the same format as provided:

companies table schema
id
ceo
motto
employees

Solution should use pure SQL. Ruby is only used in test cases.


## Solution
Select all values in 'companies' table.
Sort the returned entries by 'employees' in descending order.
Return sorted entries.

SELECT *
FROM companies
ORDER BY employees DESC;
