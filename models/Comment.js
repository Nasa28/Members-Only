const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');

const Comment = sequelize.define(
  'comment',
  {
    commentBody: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Comment;
