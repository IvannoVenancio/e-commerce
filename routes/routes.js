const express = require('express')
const indexRoutes = express.Router()
const { upload } = require('../middleware/multer')
const GlobalController = require('../controller/GlobalController')
const ClienteController = require('../controller/ClienteController')
const UserController = require('../controller/UserController')
const isAuthenticated =require('../middleware/auth')

indexRoutes.get('/', GlobalController.home)
indexRoutes.get('/cadastro', GlobalController.cadastro)
indexRoutes.get('/Pedidos', GlobalController.Pedidos)
indexRoutes.get('/Listproduto', GlobalController.Listproduto)
indexRoutes.get('/carrinho',isAuthenticated, GlobalController.carrinho)
indexRoutes.get('/cliente', ClienteController.home)
indexRoutes.get('/feedback', GlobalController.feedback)
indexRoutes.get('/login', UserController.view)
indexRoutes.post('/login', UserController.login)
indexRoutes.post('/create_user', UserController.create)
indexRoutes.get('/pagamento', GlobalController.pagamento)

indexRoutes.post('/login', UserController.login);  // Verifique que a rota POST está aqui

module.exports = indexRoutes;
