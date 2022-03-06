const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

function connectDB(app) {
  app.use(express.json());
  app.use(morgan('dev'));
  app.use(cors());
  app.set('port', process.env.PORT || 5000);
}

module.exports = connectDB;
