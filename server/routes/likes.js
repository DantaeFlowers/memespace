const express = require('express');
const router = express.Router();
const posts = require("./posts.js");
const db = posts.db;

router.get('/:id',  async (req,res)=>{
    let id = req.params.id;
    try {
        let likes = await db.any(`SELECT * FROM likes WHERE post_id = ${id}`)
        res.json({
            payload: likes,
            message: 'Success. Retrieved all the likes.'
        })
    } catch (error) {
        console.log(error)
        res.status(500)
        res.json({
            message: "Error. Something went wrong."
        })
    }
})

module.exports = router;