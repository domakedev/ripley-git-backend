require('dotenv').config();

const {
  FindClient,
  CreateClient,
  ReadAllClients,
} = require('./client.services');
const dateToAge = require('../../utils/age');

const CreateClientHandler = async (req, res) => {
  try {
    //Comprobar si usuario ya existe
    // Extraer data entrante
    // Verificar si ya existe un usuario con los 3 datos iguales

    const foundClient = await FindClient(req.body);
    if (foundClient) {
      return res.status(400).json({ message: 'El cliente ya existe' });
    }
    // Crear usuario
    const newClient = await CreateClient(req.body);
    res.status(200).json(newClient);
  } catch (error) {
    res
      .status(400)
      .json({ message: `Hay un error en CreateClientHandler ${error}` });
  }
};

const ReadAllClientsHandler = async (req, res) => {
  try {
    const found = await ReadAllClients();

    //Responder todos los clientes
    return res.status(200).json(JSON.parse(found));
  } catch (error) {
    res.status(500).json({ error });
  }
};

const AllClientsAVGHandler = async (req, res) => {
  try {
    const found = await ReadAllClients();
    const foundArr = JSON.parse(found);

    //// Promediar edades

    // Obtener todas las fechas de nacimiento
    const bornDates = foundArr.map((e) => e.born);

    // Convertir cada fecha a edad actual
    const yearsOld = bornDates.map((e) => dateToAge(e));

    // Promediar edades
    const sumYears = yearsOld.reduce((a, b) => a + b);
    const avgYears = sumYears / bornDates.length;

    // Retornar promedio
    res.status(200).json({ avgAge: avgYears.toFixed(1) });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  CreateClientHandler,
  ReadAllClientsHandler,
  AllClientsAVGHandler,
};
