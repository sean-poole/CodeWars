# Register for the Party

## Task
You received an invitation to an amazing party. Now you need to write an insert statement to add yourself to the table of participants.

participants table schema
name (string)
age (integer)
attending (boolean)

NOTES:
Since alcohol will be served, you can only attend if you are 21 or older
You can't attend if the attending column returns anything but true

NOTE: Your solution should use pure SQL. Ruby is used within the test cases just to validate your answer.


## Solution
Initiate INSERT INTO statement to enter a new row into 'participants' table.
Declare 'name', 'age', and 'attending' values to be inserted.

INSERT INTO participants (name, age, attending)
VALUES ('James', 25, true);

SELECT *
FROM participants;
