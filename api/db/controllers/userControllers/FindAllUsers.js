const { User, Post, Like } = require("../../index");

async function FindAllUsers() {
  try {
    const users = await User.findAll({
      include: [Post, Like],
    });
    if (!!!users.length){
      throw new Error("There's no users in db")
    }
    return users;
  } catch (error) {
    throw error;
  }
}

module.exports = FindAllUsers;
