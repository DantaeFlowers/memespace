const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const port = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}))

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})