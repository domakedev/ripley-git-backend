const express = require("express");
const ExpressConfig = require("./config/express");
const routes = require("./routes");
const { log } = require("./utils/logger");

const app = express();

ExpressConfig(app);

const PORT = process.env.PORT;

//------ Listen Server---------
app.listen(PORT, () => {
  // Routes
  routes(app);

  log.info(`Server listen on http://localhost:${PORT} `);
});

module.exports = app;
