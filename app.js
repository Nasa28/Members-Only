const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
// const postsRoutes = require('./routes/postsRoutes');
const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express());
// app.use('/api/v1/posts', postsRoutes);

module.exports = app;
