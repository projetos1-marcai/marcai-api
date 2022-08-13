const router = require('express').Router();
const AgendaController = require('@controllers/AgendaController');
const auth = require('../middlewares/Auth')

router.post('/horario', auth.authorizeUser, AgendaController.criarHorario);
router.post('/horario/:id/editar', auth.authorizeUser, AgendaController.editarHorario);
router.post('/horario/:id/remover', auth.authorizeUser, AgendaController.removerHorario);

router.post('/horario/:id/reservar', auth.authorizeUser, AgendaController.reservarHorario);

router.post('/reserva/:id/:status', auth.authorizeUser, AgendaController.statusHorario);

router.get('/reserva/:id/:status', auth.authorizeUser, AgendaController.listarReservasPorStatus);

router.get('/status-reserva', AgendaController.listarStatusReserva);

router.get('/agenda/:id', AgendaController.agendaPorID);

module.exports = router;
