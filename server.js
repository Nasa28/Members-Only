require('dotenv').config();
const sequelize = require('./db/database');

const app = require('./app');

const port = process.env.PORT || 4001;

sequelize
  .sync({ force: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
module.exports = app;
