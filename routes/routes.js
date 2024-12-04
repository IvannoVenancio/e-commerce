const express = require('express')
const indexRoutes = express.Router()
const GlobalController = require('../Controller/GlobalController')
const ClienteController = require('../Controller/ClienteController')
const UserController = require('../controllers/UserController')


indexRoutes.get('/', GlobalController.home)
indexRoutes.get('/cadastro', GlobalController.cadastro)
indexRoutes.get('/Pedidos', GlobalController.Pedidos)
indexRoutes.get('/Listproduto', GlobalController.Listproduto)
indexRoutes.get('/carrinho', GlobalController.carrinho)
indexRoutes.get('/cliente', ClienteController.home)
indexRoutes.get('/login', UserController.view)
indexRoutes.post('/create_user', UserController.create)


module.exports = indexRoutes;





