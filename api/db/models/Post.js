const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define("Post", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    }
  });
};
