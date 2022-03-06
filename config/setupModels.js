const { Client, ClientSchema } = require('../api/client/client.model');

function setupModels(sequelize) {
  Client.init(ClientSchema, Client.config(sequelize));
}

module.exports = setupModels;
