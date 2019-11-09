const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users.js")
const postsRouter = require("./routes/posts.js").router;
const port = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use('/users', usersRouter)

app.use('/posts', postsRouter)

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})