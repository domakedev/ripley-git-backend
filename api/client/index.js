const express = require('express');
const router = express.Router();

//Handlers
const {
  CreateClientHandler,
  ReadAllClientsHandler,
  AllClientsAVGHandler,
} = require('./client.controller');

//Create user
router.post('/', CreateClientHandler);

//Get All Users
router.get('/', ReadAllClientsHandler);

//Users age average
router.get('/avg', AllClientsAVGHandler);

module.exports = router;
