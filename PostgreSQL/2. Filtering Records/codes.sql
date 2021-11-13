-- return cities that have area more than 4000
SELECT name, area FROM cities WHERE area > 4000;

-- in which order sql processes
-- First: FROM cities
-- Second: WHERE area > 4000
-- Third: SELECT name


-- Not Equal Operators
SELECT name, area FROM cities WHERE area != 8223;
-- is the same as:
SELECT name, area FROM cities WHERE area <> 8223;
-- is the same as:
SELECT name, area FROM cities WHERE area NOT IN (8223);


-- BETWEEN operator
SELECT name, area FROM cities WHERE area BETWEEN 2000 AND 4000;


-- IN and NOT IN operator
SELECT name, population, area FROM cities WHERE name IN ('Delhi', 'Tokyo');
SELECT name, population, area FROM cities WHERE name NOT IN ('Delhi', 'Tokyo');



-- Exercise:
SELECT name, price FROM phones WHERE units_sold > 5000;

SELECT name, manufacturer FROM phones WHERE manufacturer='Apple' OR manufacturer='Samsung';
-- same:
SELECT name, manufacturer FROM phones WHERE manufacturer IN ('Apple', 'Samsung');

SELECT name, price*units_sold AS total_revenue FROM phones WHERE price*units_sold > 1000000



-- UPDATE 
UPDATE cities SET population = 39505000 WHERE name = 'Tokyo'; 
-- if multiple records match, all of them will be updated


-- DELETE
DELETE FROM cities WHERE name = 'Tokyo';
-- if multiple records match, all of them will be deleted


-- Exercise
UPDATE phones SET units_sold = 8543 WHERE name = 'N8';
DELETE FROM phones WHERE manufacturer = 'Samsung';