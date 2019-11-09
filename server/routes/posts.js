const express = require('express');
const router = express.Router();

const pgp = require('pg-promise')();
const connection = "postgress://localhost:5432/databasesql";
const db = pgp(connection);

router.get('/', async (req, res) => {
   try {
       let posts = await db.any('SELECT * FROM posts');
       res.json({
           payload: posts,
           message: `success. retrieved all users posts`
       });
   } catch (error) {
       res.status(500);
       res.json({
           message: `Error. Something went wrong!`
       })
       console.log(error);
   }
})

router.post('/register', async (req, res) => {
  console.log(req.body);
  try {
      let insertQuery = `
      INSERT INTO posts(poster_id, body)
      VALUES($1, $2)  
      ` 
      
      await db.none(insertQuery, [req.body.poster_id , req.body.body]);
      res.json({
          payload: req.body,
          message: `Post was sent!`
      })
  } catch (error) {
      res.json({
          message: `There was an error!`
      })
  }
})

router.patch('/:id', (req, res) => {
    let newDetails = req.body;
    let id = parseInt(req.params.id)
  
    console.log('newDetails', newDetails)
})

module.exports = {router: router, db: db};