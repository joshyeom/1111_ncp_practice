"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["production"];
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Visitor = require("./Visitor")(sequelize, Sequelize);

db.User = require("./User")(sequelize, Sequelize);

module.exports = db;
