const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors")
app.use(express.json())
app.use(cors())

let connectToDatabase = require("./connectDb")
let users = require("./src/routes/users");


app.use("/users", users);


mongoose.set("strictQuery", false);
connectToDatabase();

app.get('/', (req, res) => {
    res.send("Hello World....");
});

console.log('Backend is running on port 8080.')
app.listen(8080);