-- number of total comments made by each user
SELECT user_id, COUNT(id)
FROM comments
GROUP BY user_id;


-- count everything including NULL values
SELECT COUNT(*) FROM photos;


-- Exercise:

CREATE TABLE authors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50)
);

CREATE TABLE books (
  id SERIAL,
  title VARCHAR(100),
  author_id INTEGER REFERENCES authors(id)
);


INSERT INTO authors(name)
VALUES
  ('JK Rowling'),
  ('Stephen King'),
  ('Agatha Christie'),
  ('Dr Seuss');

INSERT INTO books(title, author_id)
VALUES
  ('Chamber of Secrets', 1),
  ('Prisoner of Azkaban', 1),
  ('The Dark Tower', 2),
  ('Murder at the Links', 3),
  ('Affair at Styles', 3),
  ('Cat in the Hat', 4);



SELECT author_id, COUNT(*)
FROM books
GROUP BY author_id;


SELECT authors.name, COUNT(books.author_id)
FROM books
JOIN authors ON authors.id = books.author_id
GROUP BY authors.name;



-- order: FROM -> JOIN -> WHERE -> GROUP BY -> HAVING

-- Find the number of comments for each photo where the photo_id is less then 3
SELECT photo_id, COUNT(contents)
FROM comments
WHERE photo_id < 3
GROUP BY photo_id;

-- Find the number of comments for each photo where the photo_id is less then 3 and the photo has at least 2 comments
SELECT photo_id, COUNT(contents)
FROM comments
WHERE photo_id < 3
GROUP BY photo_id
HAVING COUNT(contents) > 2;



-- Find the users who commented on the first 2 photos and has commented at least 2 comments in total
SELECT user_id, COUNT(contents)
FROM comments
WHERE photo_id < 3
GROUP BY user_id
HAVING COUNT(contents) > 2



SELECT manufacturer, SUM(price * units_sold)
FROM phones
GROUP BY manufacturer
HAVING SUM(price * units_sold) > 2000000;