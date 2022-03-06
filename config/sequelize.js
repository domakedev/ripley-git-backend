const { Sequelize } = require('sequelize');
const setupModels = require('../config/setupModels');
require('dotenv').config();

let sequelize;
// Verificar si el proyecto esta en producción
if (`${process.env.DB_URI}`.includes('aws')) {
  sequelize = new Sequelize(`${process.env.DB_URI}`, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });
} else {
  sequelize = new Sequelize(`${process.env.DB_URI}`);
}
setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;
