//Set server properties, establish database connection (Using mongoDB Atlas)

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const url = `mongodb+srv://admin:admin@cluster0.nimt7rv.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(url, {useNewUrlParser: true,})
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. ${err}`);
    })


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ note: "Back-end is running!" });
});

let PORT = 8080;

require("./app/routes/app.routes.js")(app);
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
