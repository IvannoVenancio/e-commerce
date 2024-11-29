const express = require('express')
const indexRoutes = express.Router()
const GlobalController = require('../Controller/GlobalController')
const ClienteController = require('../Controller/ClienteController')


indexRoutes.get('/', GlobalController.home)
indexRoutes.get('/cliente', ClienteController.home)


module.exports = indexRoutes;
