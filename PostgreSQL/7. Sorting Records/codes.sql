SELECT * FROM products
ORDER BY price; -- by default ascending order / same as: ORDER BY price ASC;

SELECT * FROM products
ORDER BY price DESC; -- sort by descending order


-- sort by multiple criteria:
SELECT * FROM products
ORDER BY price DESC, weight ASC; -- sort by price first in DESC order, if multiple prices have same value then sort them by weight in ASC order


-- OFFSET is used to skip rows
SELECT * FROM users
OFFSET 40; -- skip first 40 rows and show the rest


-- LIMIT is used to show rows upto the limit value
SELECT * FROM users
LIMIT 5; -- show the first 5 rows


-- print 5 least expensive products
SELECT * FROM products
ORDER BY price
LIMIT 5;


SELECT * FROM phones
ORDER BY price DESC
LIMIT 2
OFFSET 1;
