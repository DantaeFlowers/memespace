const express = require('express');
const router = express.Router();
const posts = require("./posts.js");
const db = posts.db;


// retrieving all users
router.get('/',  async (req,res)=>{
    try {
        let users = await db.any("SELECT * FROM users")
        res.json({
            payload: users,
            message: 'Success. Retrieved all the users.'
        })
    } catch (error) {
        console.log(error)
        res.status(500)
        res.json({
            message: "Error. Something went wrong."
        })
    }
})


// retrieving user by id
router.get('/:id', async(req, res)=>{
    let id = Number(req.params.id)
    try {
        let user = await db.one(`SELECT * FROM users WHERE id = ${id}`)
        res.json({
            payload : user,
            message : `Success. Retrieved user with id: ${id}`
        })
    } catch (error) {
        console.log(error)
        res.json({
            message: "Error. Something went wrong."
        })
    }
})

// creating a new user 
router.post('/register', async (req, res)=>{
    let insertQuery =  `INSERT INTO users(firstname, lastname, username, email, userPassword)
    VALUES($1, $2, $3, $4, $5);`

    let firstname = req.body.firstname
    let lastname = req.body.lastname
    let username = req.body.username 
    let email = req.body.email
    let userPassword = req.body.userPassword

    let body = {
        firstname: firstname,
        lastname: lastname, 
        username: username,
        email: email,
        userPassword: userPassword
    }

    try{
        await db.none(insertQuery,[firstname, lastname, username, email, userPassword])
        res.json({
            status : 'success',  
            message: 'User has been created',
            body: body
        })
    } catch (error) {
        console.log(error)
        res.json({
            message: error.detail
        })
    }
})

//removing a user
router.delete('/:id', async(req, res) =>{
let id = Number(req.params.id);
console.log(id)
try{
    let removedUser =  await db.none(`DELETE FROM users WHERE id = ${id}`)
    res.json({
        message: `Success! User ${id} has been removed.`
    })
} catch (error) {
    console.log(error)
    res.json({
        message: `Unable to remove user.`
    })
}
})


module.exports = router;