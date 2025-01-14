const express = require('express')
const indexRoutes = express.Router()
const { upload } = require('../middleware/multer')
const GlobalController = require('../controller/GlobalController')
const ClienteController = require('../controller/ClienteController')
const UserController = require('../controller/UserController')


indexRoutes.get('/', GlobalController.home)
indexRoutes.get('/cadastro', GlobalController.cadastro)
indexRoutes.get('/Pedidos', GlobalController.Pedidos)
indexRoutes.get('/Listproduto', GlobalController.Listproduto)
indexRoutes.get('/carrinho', GlobalController.carrinho)
indexRoutes.get('/cliente', ClienteController.home)
indexRoutes.get('/feedback', GlobalController.feedback)
indexRoutes.get('/login', UserController.view)
indexRoutes.post('/create_user',upload.single('foto'), UserController.create)
indexRoutes.get('/pagamento', GlobalController.pagamento)



module.exports = indexRoutes;





