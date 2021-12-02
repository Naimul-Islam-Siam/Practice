-- print only the unique instants
-- DISTINCT must be used right after SELECT keyword
SELECT DISTINCT department
FROM products;


-- number of unique instances
SELECT COUNT(DISTINCT department)
FROM products;


-- print the unique combinations of department and name
-- kids shirts
-- sports jersey
-- kids pants // kids is here multiple times because kids - shirts and kids - pants have different combination and both are unique

SELECT DISTINCT department, name
FROM products;


-- Exercise
SELECT COUNT(DISTINCT manufacturer)
FROM phones; 