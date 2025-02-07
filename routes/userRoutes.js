const express = require('express');
const router = express.Router();
const { authorize } = require('../middlewares/authMiddleware');

router.get('/mainlistprod.handlebars', authorize('admin'), (req, res) => {
    res.render('mainlistprod.handlebars');
});
router.get('/ppedidos.handlebars', authorize('admin'), (req, res) => {
    res.render('ppedidos.handlebars');
});

router.get('/main.handlebars', authorize('cliente'), (req, res) => {
    res.render('main.handlebars');
});

module.exports = router;
