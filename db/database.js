const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  'Members-Only',
  process.env.DB,
  process.env.MYSQL_PASSWORD,
  {
    dialect: 'mysql',
    host: 'localhost',
    // storage: '../database-tables.mysql'
  }
);
module.exports = sequelize;
