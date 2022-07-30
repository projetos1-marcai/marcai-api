const router = require('express').Router();
const ServicoController = require('@controllers/ServicoController');

router.get('/services', ServicoController.listarServicos);

router.post('/service', ServicoController.criarServico);
router.post('/service/:id/atualizar', ServicoController.atualizarServico);

router.get('/service-payment-methods', ServicoController.listarMeiosDePagamentos);
router.get('/service-categories', ServicoController.listarCategorias);

router.get('/service/categoria/:categoria', ServicoController.servicosPorCategoria);
router.get('/service/search/:search', ServicoController.servicosPorSubstring);
router.get('/service/id/:id', ServicoController.servicoPorID);
router.get('/service/cidade/:cidade', ServicoController.servicosPorCidade);

module.exports = router;
