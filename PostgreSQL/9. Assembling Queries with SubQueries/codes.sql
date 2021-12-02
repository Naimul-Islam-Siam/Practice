-- print the name and price of all products that are more expensive than all products in 'Toys' department
SELECT name, price 
FROM products
WHERE price > (
  SELECT MAX(price) FROM products WHERE department = 'Toys'
);


-- Exercise:
SELECT name, price, price / (SELECT MAX(price) FROM phones) AS price_ratio FROM phones;


SELECT name, price_weight_ratio
FROM (
  SELECT name, price / weight AS price_weight_ratio FROM products
) AS p
WHERE price_weight_ratio > 5;



-- FROM subquery
-- Print the average number of orders per user
SELECT AVG(p.order_count)
FROM (
  SELECT user_id, COUNT(*) AS order_count
  FROM products
  GROUP BY user_id
) AS p


-- Exercise
SELECT MAX(p.avg_price) AS max_average_price
FROM (
  SELECT AVG(price) as avg_price
  FROM phones
  GROUP BY manufacturer
) as p;


-- Rules for SubQuery:
-- 1. If a subquery returns a single result, it can be used in SELECT -> SELECT id, (SELECT MAX(price) FROM products) FROM db;