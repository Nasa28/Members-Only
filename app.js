const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');

const postRoute = require('./routes/postRoutes');
const ErrorMsg = require('./utils/ErrorMsg.js');
const errorHandler = require('./controllers/errorController');
const app = express();
app.use(cors('*'));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use('/api/v1/posts', postRoute);

app.all('*', (req, res, next) => {
  next(new ErrorMsg(`Can't find this ${req.originalUrl} on this server`, 400));
});
app.use(errorHandler);

module.exports = app;
