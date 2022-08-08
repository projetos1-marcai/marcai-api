const router = require('express').Router();
const UsuarioController = require('@controllers/UsuarioController');
const auth = require('../middlewares/Auth')

router.post('/user', UsuarioController.criarUsuario);
router.post('/login', UsuarioController.login);

router.get('/user/:id', auth.authorizeUser, UsuarioController.usuarioPorID);
router.get('/users', auth.authorizeUser, UsuarioController.listarUsuarios);


module.exports = router;
