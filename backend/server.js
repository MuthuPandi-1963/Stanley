// const express = require('express')  common js

// import express from 'express'  module

import express from "express";
import dotenv from 'dotenv'
dotenv.config()
const app = express();
app.use(express.json())

app.get("", (req, res) => {
  res.json({
    data: "Welcome to Home Page and learn express and MERN",
  });
});
app.get("/products", (req, res) => {
  return res.json({
    data: [
      
    ],
  });
});
const port = process.env.PORT 
console.log(port);

app.listen(port, () => {
  console.log("server is running successfully ",port);
});
