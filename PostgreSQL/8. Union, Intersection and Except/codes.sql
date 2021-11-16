-- 4 most expensive products and 4 highest price/weight products
(
  SELECT *
  FROM products
  ORDER BY price DESC
  LIMIT 4
)
UNION
(
  SELECT *
  FROM products
  ORDER BY price / weight DESC
  LIMIT 4
)

-----------------------------------------

(
  SELECT *
  FROM products
  ORDER BY price DESC
  LIMIT 4
)
INTERSECT
(
  SELECT *
  FROM products
  ORDER BY price / weight DESC
  LIMIT 4
)

-- UNION vs UNION ALL: union will show common results once and remove duplicates, UNION ALL will show all instances (duplicates) of common results
-- {2, 3, 4, 5} UNION {2, 7, 8, 10} = {2, 3, 4, 5, 7, 8, 10}
-- {2, 3, 4, 5} UNION ALL {2, 7, 8, 10} = {2, 3, 4, 5, 2, 7, 8, 10}


-- INTERSECT vs INTERSECT ALL: INTERSECT will show common results only and once even if duplicates are there,
-- INTERSECT ALL will show common results multiple time if duplicates are present
-- {2, 3, 4, 5} INTERSECT {2, 7, 8, 10} = {2}
-- {2, 3, 4, 5} INTERSECT ALL {2, 7, 8, 10} = {2}
-- {2, 3, 4, 5} INTERSECT {2, 4, 7, 8, 10} = {2, 4}
-- {2, 3, 4, 5} INTERSECT ALL {2, 4, 7, 8, 10} = {2, 4}
-- {2, 3, 3, 4, 5} INTERSECT {2, 3, 4, 3, 7, 8, 10} = {2, 3, 4}
-- {2, 3, 3, 4, 5} INTERSECT ALL {2, 3, 4, 3, 7, 8, 10} = {2, 3, 3, 4}



(
  SELECT *
  FROM products
  ORDER BY price DESC
  LIMIT 4
)
EXCEPT
(
  SELECT *
  FROM products
  ORDER BY price / weight DESC
  LIMIT 4
)

-- the above query and the query below is different:

(
  SELECT *
  FROM products
  ORDER BY price / weight DESC
  LIMIT 4
)
EXCEPT
(
  SELECT *
  FROM products
  ORDER BY price DESC
  LIMIT 4
)

-- incase of EXCEPT: order of table matters


-- Exercise: show manufacturer of phones where phone's price is less than 170 and manufacturer has created at least 2 models of phones
(
  SELECT manufacturer 
  FROM phones 
  WHERE price < 170
)
UNION
(
  SELECT manufacturer 
  FROM phones 
  GROUP BY manufacturer 
  HAVING COUNT(manufacturer) > 2
)