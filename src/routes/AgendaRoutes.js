const router = require('express').Router();
const AgendaController = require('@controllers/AgendaController');

router.post('/horario', AgendaController.criarHorario);
router.post('/horario/:id/remover', AgendaController.removerHorario);

// Aqui
router.post('/horario/:id/reservar', AgendaController.reservarHorario);

router.post('/horario/:id/status', function(req, res) {
    AgendaController.statusHorario
});

router.post('/horarios/:id/:status', function(req, res) {
    AgendaController.listarServicosPorStatus
});

router.get('/status-reserva', function(req, res) {
    AgendaController.listarStatusReserva
});

module.exports = router;