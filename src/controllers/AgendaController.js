const criarHorario = require('../services/AgendaFunctions/criarHorario');

module.exports = {
    async criarHorario(req, res) {
        return criarHorario(req, res);
    }
}
