const router = require('express').Router();
const UsuarioController = require('@controllers/UsuarioController');

router.post('/user', UsuarioController.criarUsuario);

module.exports = router;
