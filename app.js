const express = require('express');
const ExpressConfig = require('./config/express');
const routes = require('./routes');
const { log } = require('./utils/logger');
const ConnectDB = require('./config/database');

const app = express();

ExpressConfig(app);

const PORT = process.env.PORT;

//------ Listen Server---------
app.listen(PORT, () => {
  // connect to database
  ConnectDB();

  // Routes
  routes(app);

  log.info(`Server listen on http://localhost:${PORT} `);
});

module.exports = app;
