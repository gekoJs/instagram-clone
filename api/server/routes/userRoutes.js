const { Router } = require("express");
const CreateUser = require("../../db/controllers/userControllers/CreateUser");
const FindAllUsers = require("../../db/controllers/userControllers/FindAllUsers");
const FindUser = require("../../db/controllers/userControllers/FindUser");
const FindUserById = require("../../db/controllers/userControllers/FindUserById");

const userRoute = Router();

userRoute.get("/", async (req, res) => {
  try {
    const { user, password, id } = req.query;
    if (id) {
      const user = await FindUserById(id);
      return res.json({ message: "User finded succesfully", data: user });
    }

    if (user && password) {
      const userDb = await FindUser(user);

      if (userDb.password !== password) {
        console.log(password, userDb.password);
        throw new Error("The password is incorrect");
      }

      return res.json({ message: "User logged succesfully", data: userDb });
    }

    const users = await FindAllUsers();
    return res.json({ message: "Users fetched succesfully", data: users });
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message });
  }
});

//-----------------------------------------------
userRoute.post("/", async (req, res) => {
  try {
    const [user, created] = await CreateUser(req.body);

    if (user.userName === req.body.userName && !created) {
      throw new Error(`userName ${user.userName} already used`);
    }

    if (!created) {
      throw new Error(`user with the email ${user.email} already exists`);
    }
    res.status(201).json({
      message: "User created succesfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message });
  }
});

module.exports = userRoute;
