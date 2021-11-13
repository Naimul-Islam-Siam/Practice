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