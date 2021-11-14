-- For each comments show the content of the comment and the username of the user who commented
SELECT contents, username FROM comments JOIN users on comments.user_id = users.id;

-- How the operation happens:
-- 1. FROM comments
-- 2. JOIN users
-- 3. on comments.user_id = users.id
-- 4. SELECT contents, username


-- For each comments show the content of the comment and the url of the photo in which the comment was commented
SELECT contents, url FROM comments JOIN photos on comments.photo_id = photos.id;



-- Exercise:
SELECT title, name FROM books JOIN authors on books.author_id = authors.id;


-- Provide context if column names collide because of joining
SELECT comments.id AS comment_id, photos.id AS photo_id FROM comments JOIN photos on comments.photo_id = photos.id;
-- otherwise id columns would collide



-- Different JOIN

-- 1. INNER JOIN (when we use just JOIN it is INNER JOIN by default)
-- Whatever doesn't match gets removed: Intersection of two TABLEs

-- 2. LEFT JOIN
-- Take everything from the Left Table, even if it doesn't match with the right table. 
-- The contents of right table will get a value of NULL if needed

-- 3. RIGHT JOIN
-- Take everything from the Right Table, even if it doesn't match with the left table. 
-- The contents of left table will get a value of NULL if needed

-- 4. FULL JOIN
-- Merge everything whether they match or not
-- Rows and Columns that doesn't match might get NULL value if needed
-- All possible rows/records considering both tables of JOIN must be included 


-- LEFT JOIN and RIGHT JOIN changes tables value depending on the Order of tables in JOIN and FROM



-- Exercise:
-- Show all authors name even if they don't have any book associated to them in the books table
SELECT title, name FROM authors LEFT JOIN books ON authors.id = books.author_id
-- same:
SELECT title, name FROM books RIGHT JOIN authors ON authors.id = books.author_id


-- Show url of photo and comment on the photo only where the creator of the post commented on the post
-- Owner of the post commented on his own post
SELECT url, contents
FROM comments JOIN photos 
ON comments.photo_id = photos.id
WHERE comments.user_id = photos.user_id;


-- Multiple tables JOIN
SELECT url, contents, username
FROM comments 
JOIN photos ON comments.photo_id = photos.id
JOIN users ON comments.user_id = users.id;


-- Only the posts where Owner of the post commented on his own post, print username of those users too
SELECT url, contents, username
FROM comments 
JOIN photos ON comments.photo_id = photos.id
JOIN users ON comments.user_id = users.id AND photos.user_id = users.id;


-- Only show the records where the author of the book is also the reviewer of the book
SELECT title, name, rating
FROM books 
JOIN authors ON books.author_id = authors.id
JOIN reviews ON reviews.book_id = books.id AND reviews.reviewer_id = books.author_id;