const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); //connect to mongodb

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const projectRoute=require("./routes/projects");
const expenseRoute = require("./routes/expenses");

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

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/projects",projectRoute);
app.use("/api/expenses", expenseRoute);

app.listen(port, () => {
  //start server
  console.log(`server is running on port:${port}`);
});
