const sequelize = require('../../config/sequelize');

const Client = sequelize.models.Client;

const CreateClient = async (data) => {
  try {
    const NewClient = await Client.create(data);
    return NewClient;
  } catch (error) {
    console.log('🚀 ~ file: user.services.js ~ line 12 ~ error', error);
  }
};

const ReadAllClients = async () => {
  const found = await Client.findAll();
  return JSON.stringify(found, null, 2);
};

const FindClient = async ({ name, surname, born }) => {
  const found = await Client.findOne({
    where: {
      name,
      surname,
      born,
    },
  });
  console.log('🚀 ~ file: user.services.js ~ line 27 ~ found', found);
  return found;
};

module.exports = {
  CreateClient,
  FindClient,
  ReadAllClients,
};
