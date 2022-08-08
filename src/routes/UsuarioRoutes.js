const router = require('express').Router();
const UsuarioController = require('@controllers/UsuarioController');

router.post('/user', UsuarioController.criarUsuario);
router.get('/user/:id', UsuarioController.usuarioPorID);
router.get('/users', UsuarioController.listarUsuarios);

router.post('/login', UsuarioController.login)

module.exports = router;
