// Defining routes
const routes = (app) => {
  app.get('/', (req, res) => res.json({ message: 'Hi MDP / Ripley' }));
};

module.exports = routes;
