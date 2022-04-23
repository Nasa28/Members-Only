const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');

const Post = sequelize.define('post', {
  post_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    // len: {
    //   args: [(2, 100)],
    //   msg: 'Must not be less than 2 or More than 24',
    // },
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
    len: {
      args: [(2, 10)],
      msg: 'Must not be less than 2 or More than 300',
    },
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Post;
