const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_URI);

const ConnectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conection to Heroku DB is succesfull 💪!');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

sequelize.sync();

module.exports = ConnectDB;
