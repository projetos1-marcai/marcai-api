const Status = require('@models/agenda/StatusENUM');

async function listarStatusReserva(req, res) {

    return res.status(200).send({"stauts_reserva": Status});
}

module.exports = listarStatusReserva;
