const express = require('express')
const indexRoutes = express.Router()

const GlobalController = require('../Controller/GlobalController')
const ClienteController = require('../Controller/ClienteController')


indexRoutes.get('/', GlobalController.home)
indexRoutes.get('/cliente', ClienteController.home)


module.exports = indexRoutes;

const { upload } = require('../middleware/multer')
//const GlobalController = require('../controller/UserController')
//const ClienteController = require('../controller/UserController')
const UserController = require('../controller/UserController')
<<<<<<< HEAD
const isAuthenticated =require('../middleware/auth')

indexRoutes.get('/', GlobalController.home)
indexRoutes.get('/cadastro', GlobalController.cadastro)
indexRoutes.get('/Pedidos', GlobalController.Pedidos)
indexRoutes.get('/Listproduto', GlobalController.Listproduto)
indexRoutes.get('/carrinho',isAuthenticated, GlobalController.carrinho)
=======
const { Pedidos } = require('../Controller/PedidosController')


indexRoutes.get('/', GlobalController.home)
indexRoutes.get('/cadastro', GlobalController.cadastro)
indexRoutes.get('/Pedidos', PedidosController.Pedidos)
indexRoutes.get('/Listproduto', ProdutoController.Listproduto)
indexRoutes.get('/carrinho', GlobalController.carrinho)
>>>>>>> 9adea94f4749b7d296daa299341ed7f3e82572ed
indexRoutes.get('/cliente', ClienteController.home)
indexRoutes.get('/feedback', GlobalController.feedback)
indexRoutes.get('/login', UserController.view)
indexRoutes.post('/login', UserController.login)
indexRoutes.post('/create_user', UserController.create)
indexRoutes.get('/pagamento', GlobalController.pagamento)

indexRoutes.post('/login', UserController.login);  // Verifique que a rota POST está aqui

module.exports = indexRoutes;
<<<<<<< HEAD
=======

>>>>>>> 9adea94f4749b7d296daa299341ed7f3e82572ed
