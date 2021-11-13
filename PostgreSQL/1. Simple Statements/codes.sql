-- Create a Table named cities and add scheme
CREATE TABLE cities (
  name VARCHAR(50),
  country VARCHAR(50),
  population INTEGER,
  area INTEGER
);


-- Insert 4 rows into the table
INSERT INTO cities (name, country, population, area)
VALUES
  ('Tokyo', 'Japan', 38505000, 8223),
  ('Delhi', 'India', 28125000, 2240),
  ('Shanghai', 'China', 22125000, 4015),
  ('Sao Paulo', 'Brazil', 20935000, 3043);


-- Retrieve data with SELECT
SELECT * FROM cities;
SELECT name, country FROM cities;
SELECT area, name, country FROM cities;
SELECT name, country, area FROM cities;
SELECT name, name FROM cities;


-- Transform/Process data before pulling it out
SELECT name, population/area AS population_density FROM cities;



-- Exercise
CREATE TABLE phones (
  name VARCHAR(50),
  manufacturer VARCHAR(50),
  price INTEGER,
  units_sold INTEGER
);


INSERT INTO phones (name, manufacturer, price, units_sold)
VALUES
  ('N1280', 'Nokia', 199, 1925),
  ('Iphone 4', 'Apple', 399, 9436),
  ('Galaxy S', 'Samsung', 299, 2359),
  ('S5620 Monte', 'Samsung', 250, 2385),
  ('N8', 'Nokia', 150, 7543);


SELECT name, price*units_sold AS revenue FROM phones;



-- String operators and functions
SELECT name || ', ' || country as location FROM cities;
-- or
SELECT CONCAT(name, ', ', country) as location FROM cities;

-- Output:
-- location
-- Tokyo, Japan
-- Delhi, India
-- Shanghai, China
-- Sao Paulo, Brazil


SELECT UPPER(CONCAT(name, ', ', country)) as location FROM cities;

-- Output:
-- location
-- TOKYO, JAPAN
-- DELHI, INDIA
-- SHANGHAI, CHINA
-- SAO PAULO, BRAZIL