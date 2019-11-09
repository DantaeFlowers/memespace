DROP DATABASE IF EXISTS databasesql;

CREATE DATABASE databasesql;

\c databasesql

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR,
    lastname VARCHAR,
    username VARCHAR UNIQUE,
    email VARCHAR UNIQUE
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    imgURL VARCHAR,
    caption VARCHAR,
    poster_id INT REFERENCES users (id)
);

CREATE TABLE likes (
    post_id INT REFERENCES posts (id),
    posters_id INT REFERENCES users (id),
    liker_id INT REFERENCES users (id);
);

INSERT INTO users (firstname, lastname, username, email)
    VALUES ('Dantae', 'Flowers', 'DantaeFlowers', 'dantaeflowers@pursuit.org'),
            ('Suzette', 'Islam', 'SuzetteIslam', 'suzetteislam@pursuit.org'),
            ('Peter', 'Fiorentino', 'PFiorentino', 'peterfiorentino@pursuit.org'),
            ('Giselle', 'Sanchez', 'GSanchez', 'gisellesanchez@pursuit.org');

INSERT INTO posts (imgURL, caption, poster_id)
    VALUES ('https://pics.me.me/when-youre-getting-roasted-but-you-got-no-comebacks-the-14043476.png', 'Why is his face like that?', 3),
            ('https://pbs.twimg.com/media/Dd0w7y9UQAAY2hW.jpg', 'All he is missing is the Timberland boots', 2),
            ('https://pics.me.me/1428-real-facr-epstein-didnt-kill-himself-real-facts-plastic-65110683.png', 'I really do love snapple too!', 1),
            ('https://static3.cbrimages.com/wordpress/wp-content/uploads/2019/05/Spider-Man-meme.jpeg', 'I like the spiderman one', 4);


SELECT * FROM users;
SELECT * FROM posts;
