CREATE TABLE users (
	id SERIAL PRIMARY KEY,
  username VARCHAR(50)
);


INSERT INTO users (username)
VALUES
  ('monahan93'),
  ('pfeffer'),
  ('99stroman'),
  ('sim3onis');


CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  url VARCHAR(200),
  user_id INTEGER REFERENCES users(id)
);


INSERT INTO photos (url, user_id)
VALUES
  ('http://img1.jpg', 4),
  ('http://img2.jpg', 4),
  ('http://img3.jpg', 1),
  ('http://img4.jpg', 2);


SELECT * FROM photos WHERE user_id = 4;

SELECT * FROM photos JOIN users on users.id = photos.user_id;

SELECT url, username FROM photos JOIN users on users.id = photos.user_id;



-- Exercise:

CREATE TABLE boats (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50)
);

INSERT INTO boats (name)
VALUES
  ('Rogue Wave'),
  ('Harbor Master');

CREATE TABLE crew_members (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  boat_id INTEGER REFERENCES boats(id)
);

INSERT INTO crew_members (name, boat_id)
VALUES
  ('Alex', 1),
  ('Lucia', 1),
  ('Ari', 2);


SELECT * FROM crew_members WHERE boat_id = 1;


-- FOREIGN KEY CONSTRAINTS around INSERT:

-- when a photo is insert to a user that doesn't exist: ERROR
INSERT INTO photos (url, user_id)
VALUES
  ('http://img.jpg', 999),


-- when a photo is insert that is not associated/tied to any user
INSERT INTO photos (url, user_id)
VALUES
  ('http://img.jpg', NULL),


-- CONSTRAINTS around deletion:

-- What happens when we delete a user that is referencing a photo/photos:

-- 1. ON DELETE RESTRICT -> Will not allow the user to be deleted

-- 2. ON DELETE NO ACTION -> kind of same as restrict but some slight differences

-- 3. ON DELETE CASCADE -> Will delete the user and all the photos it was referencing
-- Example Case: When a post is deleted all the comments associated to that post should also be deleted
CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  url VARCHAR(200),
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

-- 4. ON DELETE SET NULL -> Delete the user and set the user_id of photos associated to NULL
-- Example Case: A post might be very important but the user who posted it might be problematic. So we want to delete the user but still want to hold the post

-- 5. ON DELET SET DEFAULT -> User will be deleted and user_id will be set to a default value, if one is provided 