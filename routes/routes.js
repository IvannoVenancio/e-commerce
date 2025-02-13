const express = require('express');
const indexRoutes = express.Router();

// Importação correta dos controladores
const GlobalController = require('../Controller/GlobalController');
const ClienteController = require('../Controller/ClienteController');
const UserController = require('../Controller/UserController');
const PedidosController = require('../Controller/PedidosController'); // Correção aqui
const { upload } = require('../middleware/multer');
const ProdutoController = require('../Controller/ProdutoController');
const { createUser, findAllUsers } = require("../services/userService");

// Defina as rotas de forma clara
indexRoutes.get('/', GlobalController.home);
indexRoutes.get('/cadastro', GlobalController.cadastro);
indexRoutes.get('/Pedidos', PedidosController.Pedidos); // A rota já estava correta
indexRoutes.get('/Listproduto', ProdutoController.Listproduto);
indexRoutes.get('/carrinho', GlobalController.carrinho);
indexRoutes.get('/cliente', ClienteController.home);
indexRoutes.get('/feedback', GlobalController.feedback);
indexRoutes.get('/login', UserController.view);
indexRoutes.post('/login', UserController.login);

// Use a função createUser corretamente sem conflito
indexRoutes.post('/create_user', upload.single('foto'), (req, res) => {
    
  createUser(req.body)
    .then(user => {
        res.redirect("/cadastro")
    //   res.status(201).send(user);
    })
    .catch(err => {
      res.status(400).send({ message: 'Erro ao criar o usuário', error: err });
    });
});

indexRoutes.get('/pagamento', GlobalController.pagamento);
indexRoutes.post('/pagamento', GlobalController.finalizarPagamento);

module.exports = indexRoutes;

