const router = require('express').Router();
const UsuarioController = require('@controllers/UsuarioController');
const auth = require('../middlewares/Auth')

router.post('/', UsuarioController.criarUsuario);
router.post('/login', UsuarioController.login);

router.get('/:id', auth.authorizeUser, UsuarioController.usuarioPorID);
router.get('/list', auth.authorizeUser, UsuarioController.listarUsuarios);

// Rota destinada para Admin
router.put('/admin/set-admin/:id', auth.authorizeUser, UsuarioController.setAdmin);

module.exports = router;
