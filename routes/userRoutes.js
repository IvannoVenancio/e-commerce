const express = require('express');
const router = express.Router();
// const authorize = require('../middlewares/authorize'); // Middleware de autorização
// const authenticate = require('../middleware/auth'); // Middleware de autenticação

// Aplica o middleware de autenticação em todas as rotas abaixo
// router.use(authenticate); // Isso vai garantir que o usuário esteja autenticado

// Rota protegida para admins (somente admin pode acessar)
router.get('/mainlistprod.handlebars',  (req, res) => {
    res.render('mainlistprod.handlebars');
});

// Rota protegida para admins (somente admin pode acessar)
router.get('/ppedidos.handlebars',  (req, res) => {
    res.render('ppedidos.handlebars');
});

// Rota protegida para clientes (somente cliente pode acessar)
router.get('/main.handlebars',  (req, res) => {
    res.render('main.handlebars');
});

module.exports = router;

