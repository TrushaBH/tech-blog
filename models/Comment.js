// What needs to be required?
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Comment extends Model {}

// Fill in the missing data
Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize
  }
);


module.exports = Comment;




