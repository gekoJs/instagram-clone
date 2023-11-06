const { Op } = require("sequelize");
const { User } = require("../../index");

async function CreateUser(obj) {
  const { userName, fullName, email, password } = obj;
  const objValues = { userName, fullName, email, password };
    
  try {
    if (Object.values(objValues).some((e) => e === undefined)) {
      const missing = Object.keys(objValues)
        .filter((e) => objValues[e] === undefined)
        .join(", ");
      throw new Error(`Missing data (${missing})`);
    }

    const user = await User.findOrCreate({
      where: {
        [Op.or]: [{ email: email }, { userName: userName }],
      },

      defaults: {
        ...objValues,
      },
    });

    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = CreateUser;
