DROP DATABASE IF EXISTS databasesql;

CREATE DATABASE databasesql;

\c databasesql

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR,
    lastname VARCHAR,
    userImage VARCHAR,
    username VARCHAR UNIQUE,
    email VARCHAR UNIQUE
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    imgURL VARCHAR,
    caption VARCHAR,
    poster_id INT REFERENCES users (id) ON DELETE CASCADE
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

INSERT INTO users (firstname, lastname, userImage, username, email)
    VALUES ('Dantae', 'Flowers', 'https://media.licdn.com/dms/image/C4D03AQHpad0BF1ix1A/profile-displayphoto-shrink_800_800/0?e=1578528000&v=beta&t=VPvnPqXONJZSgECDpnkA-S2Yef4rE1P6p1FPTxBr_vk', 'DantaeFlowers', 'dantaeflowers@pursuit.org'),
            ('Suzette', 'Islam', 'https://media.licdn.com/dms/image/C4D03AQGNQu1S1tPbBg/profile-displayphoto-shrink_800_800/0?e=1578528000&v=beta&t=6dDtojTTGvlSTHKsEKFdZyxntYiuoBrRI14fba64cMQ', 'SuzetteIslam', 'suzetteislam@pursuit.org'),
            ('Peter', 'Fiorentino','https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/16195442_1379707448709134_1649181788578759748_n.jpg?_nc_cat=101&_nc_oc=AQmk6eLhUdUWSSbKqC66VTCsMoXGJlab3jtriIgXAh4e8Kbv2N7O59s3_3tqPwnG1Ow&_nc_ht=scontent-lga3-1.xx&oh=0d7c45d666ad32e328ad2ec583a6fe2e&oe=5E5D624F', 'PFiorentino', 'peterfiorentino@pursuit.org'),
            ('Giselle', 'Sanchez', 'https://media.licdn.com/dms/image/C4E03AQHKmfvQpkRZaA/profile-displayphoto-shrink_800_800/0?e=1578528000&v=beta&t=1Pmb7aPR2XvPHZghBtOZ3Zopnhw8Od0gNHc5hllTdW8','GSanchez', 'gisellesanchez@pursuit.org');

INSERT INTO posts (imgURL, caption, poster_id)
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

