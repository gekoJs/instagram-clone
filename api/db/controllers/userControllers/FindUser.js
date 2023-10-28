const { User, Post, Like } = require("../../index");
const { Op } = require("sequelize");

async function FindUser(user) {
  try {
    const userDb = await User.findOne({
      include: [Post, Like],
      where: {
        [Op.or]: [{ userName: user }, { email: user }, { phone: user }],
      },
    });

    return userDb;
  } catch (error) {
    throw error;
  }
}

module.exports = FindUser;
