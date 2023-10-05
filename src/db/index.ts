const pg = require("pg");
const { Sequelize } = require("sequelize");

const database = new Sequelize(`postgres://postgres:postgres@localhost`, {
  dialectModule: pg,
});

