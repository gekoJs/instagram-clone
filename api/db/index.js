const pg = require("pg");
const { Sequelize } = require("sequelize");
const { PostModel, UserModel } = require("../db/models/index");

const db = new Sequelize(`postgres://postgres:postgres@localhost/instanel`, {
  logging: false,
  dialectModule: pg,
});

UserModel(db);
PostModel(db);

const { User, Post } = db.models;

var isConnected = false;
const connectToDB = async () => {
  if (isConnected) {
    console.log("DB is already connected");
    return;
  }
  try {
    await db.sync({ force: false });
    isConnected = true;
    console.log("DB connected");
    return;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { connectToDB, ...db.models };
