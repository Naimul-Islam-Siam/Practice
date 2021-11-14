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