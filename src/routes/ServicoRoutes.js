const router = require('express').Router();
const ServicoController = require('@controllers/ServicoController');
const auth = require('../middlewares/Auth')

router.post('/', auth.authorizeUser, ServicoController.criarServico);
router.get('/:id_servico', ServicoController.servicoPorID);
router.put('/:id_servico', auth.authorizeUser, ServicoController.atualizarServico);
router.delete('/:id_servico', auth.authorizeUser, ServicoController.deletarServico);

router.get('/list', ServicoController.listarServicos);
router.get('/list-metodos-de-pagamento', ServicoController.listarMeiosDePagamentos);
router.get('/list-categorias', ServicoController.listarCategorias);
router.get('/list-status', ServicoController.listarStatusServicos);

router.get('/categoria/:id_categoria', ServicoController.servicosPorCategoria);
router.get('/buscar/:substring', ServicoController.servicosPorSubstring);
router.get('/cidade/:id_cidade', ServicoController.servicosPorCidade);
router.get('/list-servico-por-aprovacao/:id_aprovacao', ServicoController.servicosPorAprovacao);

// Rota destinada para Admin
router.put('/admin/avaliar-cadastro/:id_servico/:id_aprovacao', auth.authorizeUser, ServicoController.avaliaCadastroServico);

module.exports = router;
