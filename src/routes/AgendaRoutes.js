const router = require('express').Router();
const AgendaController = require('@controllers/AgendaController');

router.post('/horario', AgendaController.criarHorario);
router.post('/horario/:id/remover', AgendaController.removerHorario);
router.post('/horario/:id/reservar', AgendaController.reservarHorario);
router.post('/horario/:id/editar', AgendaController.editarHorario);

router.post('/reserva/:id/:status', AgendaController.statusHorario);

router.get('/reserva/:id/:status', AgendaController.listarReservasPorStatus);

router.get('/status-reserva', AgendaController.listarStatusReserva);

router.get('/agenda/:id', AgendaController.agendaPorID);

module.exports = router;
