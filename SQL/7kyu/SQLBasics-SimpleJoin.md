# SQL Basics: Simple Join

## Task
For this challenge you need to create a simple SELECT statement that will return all columns from the products table, and join to the companies table so that you can return the company name.

products table schema
id
name
isbn
company_id
price

companies table schema
id
name

You should return all product fields as well as the company name as "company_name".
NOTE: Your solution should use pure SQL. Ruby is used within the test cases to do the actual testing.


## Solution
Select all columns from the 'products' table and 'name' from the 'companies' table.
Left join the 'companies' table on 'products.company_id = companies.id'.
Alias 'name' as 'company_name'.
Return selected columns.

SELECT
  t1.*,
  t2.name AS company_name
FROM products AS t1
LEFT JOIN companies AS t2
ON t1.company_id = t2.id;
