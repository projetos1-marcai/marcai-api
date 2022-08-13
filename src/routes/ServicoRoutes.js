const router = require('express').Router();
const ServicoController = require('@controllers/ServicoController');
const auth = require('../middlewares/Auth')

router.post('/service', auth.authorizeUser, ServicoController.criarServico);
router.put('/service/:id', auth.authorizeUser, ServicoController.atualizarServico);
router.delete('/service/:id', auth.authorizeUser, ServicoController.deletarServico);

router.get('/service-payment-methods', auth.authorizeUser, ServicoController.listarMeiosDePagamentos);

router.get('/service-categories', ServicoController.listarCategorias);
router.get('/services-status', ServicoController.listarStatusServicos);
router.get('/services', ServicoController.listarServicos);

router.get('/service/categoria/:categoria', ServicoController.servicosPorCategoria);
router.get('/service/search/:search', ServicoController.servicosPorSubstring);
router.get('/service/id/:id', ServicoController.servicoPorID);
router.get('/service/cidade/:cidade', ServicoController.servicosPorCidade);
router.get('/services/aprovacao/:aprovacao', ServicoController.servicosPorAprovacao);

router.put('/service/avaliar-cadastro/:id_servico/:aprovacao', ServicoController.avaliaCadastroServico);

module.exports = router;
