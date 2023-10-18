const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define("Comment", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
    }
  });
};

