const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); //connect to mongodb

require("dotenv").config();

const app = express(); //create express server and the port
const port = process.env.PORT || 5000;

app.use(cors()); //middleware to parse json
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

//require the files and use them
// const exercisesRouter = require('./routes/exercises');
// const usersRouter = require('./routes/users')

// app.use('/exercises', exercisesRouter);
// app.use('/users', usersRouter);

app.listen(port, () => {
  //start server
  console.log(`server is running on port:${port}`);
});
