const criarHorario = require('../services/AgendaFunctions/criarHorario');
const removerHorario = require('../services/AgendaFunctions/removerHorario');
const editarHorario = require('../services/AgendaFunctions/editarHorario');
const reservarHorario = require('../services/AgendaFunctions/reservarHorario');
const setarStatusReserva = require('../services/AgendaFunctions/setarStatusReserva');
const listarReservasPorStatus = require('../services/AgendaFunctions/listarReservasPorStatus');
const listarStatusReserva = require('../services/AgendaFunctions/listarStatusReserva');
const agendaPorID = require('../services/AgendaFunctions/agendaPorID');
const horarioPorID = require('../services/AgendaFunctions/horarioPorID');
const reservaPorID = require('../services/AgendaFunctions/reservaPorID');
const reservasUsuario = require('../services/AgendaFunctions/reservasUsuario');

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

    async setarStatusReserva(req, res) {
        return setarStatusReserva(req, res);
    },

    async listarReservasPorStatus(req, res) {
        return listarReservasPorStatus(req, res);
    },

    async listarStatusReserva(req, res) {
        return listarStatusReserva(req, res);
    },

    async editarHorario(req, res) {
        return editarHorario(req, res);
    },

    async agendaPorID(req, res) {
        return agendaPorID(req, res);
    },

    async horarioPorID(req, res) {
        return horarioPorID(req, res);
    },

    async reservaPorID(req, res) {
        return reservaPorID(req, res);
    },

    async reservasUsuario(req, res) {
        return reservasUsuario(req, res);
    },

}
