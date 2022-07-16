const criarHorario = require('../services/AgendaFunctions/criarHorario');
const removerHorario = require('../services/AgendaFunctions/removerHorario');

module.exports = {
    async criarHorario(req, res) {
        return criarHorario(req, res);
    },
    async removerHorario(req, res) {
        return removerHorario(req, res);
    }
}
