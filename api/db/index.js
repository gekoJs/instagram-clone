const pg = require("pg");
const { Sequelize } = require("sequelize");
const {
  PostModel,
  UserModel,
  LikeModel,
  CommentModel,
} = require("../db/models/index");

const db = new Sequelize(`postgres://postgres:postgres@localhost/instanel`, {
  logging: false,
  dialectModule: pg,
});

UserModel(db);
PostModel(db);
LikeModel(db);
CommentModel(db);

//---------------------------
const { User, Post, Comment, Like } = db.models;

User.hasMany(Post);
Post.belongsTo(User);

Post.hasMany(Comment);
Comment.belongsTo(Post);
User.hasMany(Comment);
Comment.belongsTo(User);

Post.hasMany(Like);
Like.belongsTo(Post);
User.hasMany(Like);
Like.belongsTo(User);

//---------------------------
var isConnected = false;
const connectToDB = async () => {
  if (isConnected) {
    console.log("DB is already connected");
    return;
  }
  try {
    await db.sync({ force: true });
    isConnected = true;
    console.log("DB connected");
    return;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { connectToDB, ...db.models };
