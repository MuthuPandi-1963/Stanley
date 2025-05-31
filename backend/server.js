// const express = require('express')  common js

// import express from 'express'  module

import express from "express";
import dotenv from 'dotenv'
import dbConfig from './db/db.config.js'
import taskRouter from "./routes/task.routes.js";
dotenv.config()
const app = express();
app.use(express.json())

app.get("", (req, res) => {
  res.json({
    data: "Welcome to Home Page and learn express and MERN",
  });
});

app.use("/api",taskRouter)
const port = process.env.PORT 
console.log(port);

app.listen(port, () => {
  dbConfig()
  console.log("server is running successfully ",port);
});
