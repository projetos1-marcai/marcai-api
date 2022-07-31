const criarHorario = require('../services/AgendaFunctions/criarHorario');
const removerHorario = require('../services/AgendaFunctions/removerHorario');

const reservarHorario = require('../services/AgendaFunctions/reservarHorario');
const statusHorario = require('../services/AgendaFunctions/statusHorario');
const listarReservasPorStatus = require('../services/AgendaFunctions/listarReservasPorStatus');
const listarStatusReserva = require('../services/AgendaFunctions/listarStatusReserva');

module.exports = {
    async criarHorario(req, res) {
        return criarHorario(req, res);
    },

    async removerHorario(req, res) {
        return removerHorario(req, res);
    },

    async reservarHorario(req, res) {
        return reservarHorario(req, res);
    },

    async statusHorario(req, res) {
        return statusHorario(req, res);
    },

    async listarReservasPorStatus(req, res) {
        return listarReservasPorStatus(req, res);
    },

    async listarStatusReserva(req, res) {
        return listarStatusReserva(req, res);
    },

}
