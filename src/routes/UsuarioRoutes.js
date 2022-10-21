const router = require('express').Router();
const UsuarioController = require('@controllers/UsuarioController');
const auth = require('../middlewares/Auth')

router.post('/', UsuarioController.criarUsuario);
router.post('/login', UsuarioController.login);

router.get('/list', auth.authorizeUser, UsuarioController.listarUsuarios);
router.get('/fornecedores', UsuarioController.listarFornecedores);
router.get('/:id_usuario', auth.authorizeUser, UsuarioController.usuarioPorID);

// Rota destinada para Admin
router.put('/admin/set-admin/:id_usuario', auth.authorizeUser, UsuarioController.setAdmin);
router.delete('/:id_usuario', auth.authorizeUser, UsuarioController.removerUsuario);

module.exports = router;
