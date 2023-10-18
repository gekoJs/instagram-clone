const { Router } = require("express");
const CreatePost = require("../../db/controllers/postControllers/CreatePost");
const FindAllPosts = require("../../db/controllers/postControllers/FindAllPosts");

const postRouter = Router();

postRouter.get("/", async (req, res) => {
  try {
    const posts = await FindAllPosts();

    res.json({ message: "done", data: posts });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

//-----------------------------------------------
postRouter.post("/", async (req, res) => {
  try {
    const post = await CreatePost(req.body);

    res.json({ message: "done", data: post });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

module.exports = postRouter;
