const { Model, DataTypes } = require('sequelize');

const CLIENT_TABLE = 'clients';

const ClientSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  surname: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  born: {
    allowNull: false,
    type: DataTypes.DATEONLY,
  },
};

class Client extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: CLIENT_TABLE,
      modelName: 'Client',
      timestamps: false,
    };
  }
}

module.exports = { CLIENT_TABLE, ClientSchema, Client };
