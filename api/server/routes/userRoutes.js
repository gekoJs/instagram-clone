const express = require("express");
const { connectToDB } = require("../../db/index");
const userRoute = express.Router();

userRoute.get("/", async (req, res) => {
  await connectToDB();
  res.json("hola");
});

module.exports = userRoute;
