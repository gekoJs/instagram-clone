const { Router } = require("express");
const CreateLike = require("../../db/controllers/likeControllers/CreateLike");
const likeRoute = Router();



likeRoute.post("/", async (req, res) => {
  try {
    const like = await CreateLike(req.body);
    res.json({ message: like ? "Like done" : "Dislike done", data: like });
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message });
  }
});

module.exports = likeRoute;
