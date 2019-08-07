const Sequelize = require("sequelize");
const db = require("../db");

const Post = db.define("post", {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  url: Sequelize.STRING,
  price: Sequelize.INTEGER,
  email: Sequelize.STRING,
  phone: Sequelize.STRING
});

module.exports = Post;