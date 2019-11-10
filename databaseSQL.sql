DROP DATABASE IF EXISTS databasesql;

CREATE DATABASE databasesql;

\c databasesql

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR,
    lastname VARCHAR,
    userImage VARCHAR,
    userPassword VARCHAR,
    username VARCHAR UNIQUE,
    email VARCHAR UNIQUE
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    imgURL VARCHAR,
    caption VARCHAR,
    username  INT REFERENCES users (username) ON DELETE CASCADE
);

CREATE TABLE likes (
    post_id INT REFERENCES posts (id) ON DELETE CASCADE,
    posters_id INT REFERENCES users (id) ON DELETE CASCADE,
    liker_id INT REFERENCES users (id) ON DELETE CASCADE
);

CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    comment VARCHAR,
    post_id INT REFERENCES posts (id) ON DELETE CASCADE,
    poster_id INT REFERENCES users (id) ON DELETE CASCADE,
    commentors_id INT REFERENCES users (id) ON DELETE CASCADE
);

INSERT INTO users (firstname, lastname, username, email, userPassword)
    VALUES ('Dantae', 'Flowers', 'DantaeFlowers', 'dantaeflowers@pursuit.org', 'Dantae1'),
            ('Suzette', 'Islam', 'SuzetteIslam', 'suzetteislam@pursuit.org', 'Suzette1'),
            ('Peter', 'Fiorentino', 'PFiorentino', 'peterfiorentino@pursuit.org', 'Peter1'),
            ('Giselle', 'Sanchez', 'GSanchez', 'gisellesanchez@pursuit.org', 'Giselle1');

INSERT INTO posts (imgURL, caption, username)
    VALUES ('https://pics.me.me/when-youre-getting-roasted-but-you-got-no-comebacks-the-14043476.png', 'Why is his face like that?', 3),
            ('https://pbs.twimg.com/media/Dd0w7y9UQAAY2hW.jpg', 'All he is missing is the Timberland boots', 2),
            ('https://pics.me.me/1428-real-facr-epstein-didnt-kill-himself-real-facts-plastic-65110683.png', 'I really do love snapple too!', 1),
            ('https://static3.cbrimages.com/wordpress/wp-content/uploads/2019/05/Spider-Man-meme.jpeg', 'I like the spiderman one', 4);

INSERT INTO likes (post_id, posters_id, liker_id)
    VALUES (1, 3, 4),
            (2, 4, 2),
            (4, 3, 1);

INSERT INTO comments (comment, post_id, poster_id, commentors_id)
    VALUES ('LMAOOOO', 3, 4, 1);

