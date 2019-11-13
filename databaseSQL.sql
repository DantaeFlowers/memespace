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
    username  VARCHAR
);

CREATE TABLE likes (
    post_id INT,
    liker_name VARCHAR
);

CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    comment VARCHAR,
    post_id INT,
    commentors_name VARCHAR
);

INSERT INTO users (firstname, lastname, username, email, userPassword, userImage) 
    VALUES ('Dantae', 'Flowers', 'DantaeFlowers', 'dantaeflowers@pursuit.org', 'Dantae1', 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/14590309_493087897549150_743346015237574308_n.jpg?_nc_cat=104&_nc_oc=AQl77-d-xKJrWzuJubOmqRGbk5nNWVfcLHJHgxj1B4nmVbPGxUutJFY0_KfndxX9DFg&_nc_ht=scontent-lga3-1.xx&oh=7e811d5542c49eb7d656d3f4361f8a01&oe=5E528AE4'),
            ('Suzette', 'Islam', 'SuzetteIslam', 'suzetteislam@pursuit.org', 'Suzette1', 'https://media.licdn.com/dms/image/C4D03AQGNQu1S1tPbBg/profile-displayphoto-shrink_800_800/0?e=1579132800&v=beta&t=H14OI9YU-wWDrAbcCMLCvrnJ9_JS6yPP--lCRHZycoc'),
            ('Peter', 'Fiorentino', 'PFiorentino', 'peterfiorentino@pursuit.org', 'Peter1', 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/16195442_1379707448709134_1649181788578759748_n.jpg?_nc_cat=101&_nc_oc=AQkoqYOySSMyyr66fWc95QUKSYiCuAm119rO1inUMzMfVJTZVtpoMdV7o-V2Iy64zUQ&_nc_ht=scontent-lga3-1.xx&oh=274ae2f075aeddc740390f7f1dfd20fb&oe=5E5D624F'),
            ('Giselle', 'Sanchez', 'GSanchez', 'gisellesanchez@pursuit.org', 'Giselle1', 'https://media.licdn.com/dms/image/C4E03AQHKmfvQpkRZaA/profile-displayphoto-shrink_800_800/0?e=1579132800&v=beta&t=IEUnvyK-lz7ErSW7l7IBx4fbzrO1XWZ_hvBBVSTA0Wo');

INSERT INTO posts (imgURL, caption, username)
    VALUES ('https://pics.me.me/when-youre-getting-roasted-but-you-got-no-comebacks-the-14043476.png', 'Why is his face like that?', 'PFiorentino'),
            ('https://pbs.twimg.com/media/Dd0w7y9UQAAY2hW.jpg', 'All he is missing is the Timberland boots', 'SuzetteIslam'),
            ('https://pics.me.me/1428-real-facr-epstein-didnt-kill-himself-real-facts-plastic-65110683.png', 'I really do love snapple too!', 'DantaeFlowers'),
            ('https://static3.cbrimages.com/wordpress/wp-content/uploads/2019/05/Spider-Man-meme.jpeg', 'I like the spiderman one', 'GSanchez'),
            ('https://i.imgflip.com/3g1d4k.jpg', 'Ben Be Like', 'PFiorentino');

INSERT INTO likes (post_id, liker_name)
    VALUES (1, 'DantaeFlowers'),
            (1, 'GSanchez'),
            (1, 'SuzetteIslam'),
            (1, 'PFiorentino'),
            (2, 'GSanchez'),
            (3, 'SuzetteIslam'),
            (3, 'PFiorentino');

INSERT INTO comments (comment, post_id, commentors_name)
    VALUES ('LMAOOOO', 5, 'DantaeFlowers'),
           ('This is the most perfect meme ever', 1, 'GSanchez') ;



-- SELECT * FROM posts;
-- SELECT * FROM likes;
SELECT * FROM comments WHERE post_id = 1;