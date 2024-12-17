const express = require('express')
const indexRoutes = express.Router()
const GlobalController = require('../controller/GlobalController')
const ClienteController = require('../controller/ClienteController')
const UserController = require('../controller/UserController')


indexRoutes.get('/', GlobalController.home)
indexRoutes.get('/cadastro', GlobalController.cadastro)
indexRoutes.get('/Pedidos', GlobalController.Pedidos)
indexRoutes.get('/Listproduto', GlobalController.Listproduto)
indexRoutes.get('/carrinho', GlobalController.carrinho)
indexRoutes.get('/cliente', ClienteController.home)
//indexRoutes.get('/feedback', GlobalController.feedback)
indexRoutes.get('/login', UserController.view)
indexRoutes.post('/create_user', UserController.create)



module.exports = indexRoutes;





