# Best-selling Books

## Task
You work at a book store. It's the end of the month, and you need to find out the 5 bestselling books at your store. Use a select statement to list names, authors, and number of copies sold of the 5 books which were sold most.

books table schema
name
author
copies_sold

NOTE: Your solution should use pure SQL. Ruby is used within the test cases just to validate your answer.


## Solution
Select name, author, and copies_sold from the 'Books' table.
Order the returned rows by copies_sold in descending order.
Limit the returned rows by 5.
Return selected columns.

SELECT
  name,
  author,
  copies_sold
FROM books
ORDER BY copies_sold DESC
LIMIT 5;
