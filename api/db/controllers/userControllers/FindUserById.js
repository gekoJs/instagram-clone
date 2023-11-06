const { User, Post, Like } = require("../../index");

async function FindUserById(id) {
  try {
    const userDb = await User.findOne({
      include: [Post, Like],
      where: { id },
    });

    if (!userDb) {
      throw new Error("Cannot find user");
    }

    return userDb;
  } catch (error) {
    throw error;
  }
}

module.exports = FindUserById;
