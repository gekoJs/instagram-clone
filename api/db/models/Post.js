const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define("Post", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
    },
    postType: {
      type: DataTypes.STRING,
    },
    link: {
      type: DataTypes.STRING,
    },
  });
};
