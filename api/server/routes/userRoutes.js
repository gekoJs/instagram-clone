const { Router } = require("express");
const CreateUser = require("../../db/controllers/userControllers/CreateUser");
const FindAllUsers = require("../../db/controllers/userControllers/FindAllUsers");

const userRoute = Router();

userRoute.get("/", async (req, res) => {
  try {
    const users = await FindAllUsers();
    res.json({ message: "Users fetched succesfully", data: users });
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message });
  }
});

//-----------------------------------------------
userRoute.post("/", async (req, res) => {
  try {
    const [user, created] = await CreateUser(req.body);

    if (!created) {
      res.json({ message: `user with the email ${user.email} already exists` });
    } else {
      res.status(201).json({
        message: "User created succesfully",
        data: user,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message });
  }
});

module.exports = userRoute;
