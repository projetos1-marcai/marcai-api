const router = require('express').Router();
const ServicoController = require('@controllers/ServicoController');
const auth = require('../middlewares/Auth')

router.post('/service', auth.authorizeUser, ServicoController.criarServico);
router.post('/service/:id/atualizar', auth.authorizeUser, ServicoController.atualizarServico);

router.get('/service-payment-methods', auth.authorizeUser, ServicoController.listarMeiosDePagamentos);

router.get('/service-categories', ServicoController.listarCategorias);
router.get('/services', ServicoController.listarServicos);

router.get('/service/categoria/:categoria', ServicoController.servicosPorCategoria);
router.get('/service/search/:search', ServicoController.servicosPorSubstring);
router.get('/service/id/:id', ServicoController.servicoPorID);
router.get('/service/cidade/:cidade', ServicoController.servicosPorCidade);

module.exports = router;
