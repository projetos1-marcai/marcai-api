const router = require('express').Router();
const AgendaController = require('@controllers/AgendaController');
const auth = require('../middlewares/Auth')

// Agenda
router.get('/:id', AgendaController.agendaPorID);

// Horário
router.post('/horario', auth.authorizeUser, AgendaController.criarHorario);
router.put('/horario/:id_horario', auth.authorizeUser, AgendaController.editarHorario);
router.delete('/horario/:id_horario', auth.authorizeUser, AgendaController.removerHorario);

// Reserva
router.get('/horario/reserva/list-status', AgendaController.listarStatusReserva);
router.get('/:id_agenda/list-reserva-by-status/:id_status', auth.authorizeUser, AgendaController.listarReservasPorStatus);

router.post('/horario/reserva/criar/:id_horario', auth.authorizeUser, AgendaController.reservarHorario);
router.put('/horario/reserva/setar-status/:id_reserva/:id_status', auth.authorizeUser, AgendaController.statusHorario);

module.exports = router;
