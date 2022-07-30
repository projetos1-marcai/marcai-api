const criarHorario = require('../services/AgendaFunctions/criarHorario');
const removerHorario = require('../services/AgendaFunctions/removerHorario');

const reservarHorario = require('../services/AgendaFunctions/reservarHorario');

module.exports = {
    async criarHorario(req, res) {
        return criarHorario(req, res);
    },
    async removerHorario(req, res) {
        return removerHorario(req, res);
    },

    async reservarHorario(req, res) {
        return reservarHorario(req, res);
    }
}
