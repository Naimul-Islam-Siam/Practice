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


-- Rules for SubQuery:
-- 1. If a subquery returns a single result, it can be used in SELECT -> SELECT id, (SELECT MAX(price) FROM products) FROM db;
