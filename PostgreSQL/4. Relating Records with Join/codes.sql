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