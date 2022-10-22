const router = require('express').Router();
const AgendaController = require('@controllers/AgendaController');
const auth = require('../middlewares/Auth')

// Agenda
router.get('/:id_agenda', AgendaController.agendaPorID);

// Horário
router.post('/horario/:id_servico', auth.authorizeUser, AgendaController.criarHorario);
router.put('/horario/:id_horario', auth.authorizeUser, AgendaController.editarHorario);
router.delete('/horario/:id_servico/:id_horario', auth.authorizeUser, AgendaController.removerHorario);

// Reserva
router.get('/horario/reserva/list-status', AgendaController.listarStatusReserva);
router.get('/:id_agenda/list-reserva-por-status/:id_status', auth.authorizeUser, AgendaController.listarReservasPorStatus);

router.post('/horario/reservar/:id_horario', auth.authorizeUser, AgendaController.reservarHorario);
router.put('/horario/reserva/set-status/:id_reserva/:id_status', auth.authorizeUser, AgendaController.setarStatusReserva);

router.get('/horario/:id_horario', auth.authorizeUser, AgendaController.horarioPorID);
router.get('/reserva/:id_reserva', auth.authorizeUser, AgendaController.reservaPorID);

router.get('/usuario/reservas', auth.authorizeUser, AgendaController.reservasUsuario);

module.exports = router;
