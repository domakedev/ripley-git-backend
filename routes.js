const client = require('./api/client');
// Defining routes
const routes = (app) => {
  app.get('/', (req, res) => res.json({ message: 'Hi MDP / Ripley' }));

  //User
  app.use('/api/clients', client);
};

module.exports = routes;
