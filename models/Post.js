// What are we missing to be required here?
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Post extends Model {}

Post.init( 
  // Finish the post expression
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  },
  {
    sequelize
  }
);

module.exports = Post;

