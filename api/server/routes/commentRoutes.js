const { Router } = require("express");
const CreateComment = require("../../db/controllers/commentControllers/CreateComment");

const commentRouter = Router();

commentRouter.post("/", async (req, res) => {
  try {
    const comment = await CreateComment(req.body);

    res.json({ message: "Done", data: comment });
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message });
  }
});

module.exports = commentRouter;
