const { Sequelize } = require("sequelize");
require("dotenv").config();

let sequelize;

// Verificar si el proyecto esta en producción
if (`${process.env.DB_URI}`.includes("aws")) {
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

const ConnectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conection to Heroku DB is succesfull 💪!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

sequelize.sync();

module.exports = ConnectDB;
