const Mongodbconnect = require("./Mongo_Connection/MongoDbConnect");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./Authentication/routes/Routing");

console.log("bye")







Mongodbconnect();


app.use(express.json());

app.use(cors());

app.use("/flipkart/user", userRouter);


app.listen(5000, () => {
    console.log("server is running");
  });
  


