-- Number of paid and unpaid orders
SELECT paid, COUNT(*) FROM orders GROUP BY paid;

-- print first name and last name of the users and whether they have paid for their order or not
SELECT first_name, last_name, paid 
FROM users JOIN orders ON users.id = orders.user_id;