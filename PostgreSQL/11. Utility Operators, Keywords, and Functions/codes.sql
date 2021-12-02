-- if weight * 2 is less than 30 -> shipping cost will be 30
-- other wise shipping cost -> weight * 2
SELECT name, weight, GREATEST(weight * 2, 30) AS shipping_cost
FROM products;


SELECT name, price AS original_price, LEAST(price * 0.5, 400) AS discounted_price
FROM products;



-- use of CASE
SELECT name, weight, GREATEST(weight * 2, 30) AS shipping_cost,
  CASE 
    WHEN weight * 2 < 30 THEN 'tax added'
    ELSE 'tax pardoned'
  END
FROM products;
