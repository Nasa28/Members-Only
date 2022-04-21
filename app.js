const express = require('express');
require('dotenv').config();
const morgan = require('morgan');

const postRoute = require('./routes/postRoutes');

const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use('/api/v1/posts', postRoute);

module.exports = app;
