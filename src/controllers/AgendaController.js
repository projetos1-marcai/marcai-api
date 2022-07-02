const createHorario = require('../services/AgendaFunctions/createHorario');

module.exports = {
    async createHorario(req, res) {
        return createHorario(req, res);
    }
}
