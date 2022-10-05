const Horario = require('@models/agenda/Horario').Horario;
const Reserva = require('@models/agenda/Reserva').Reserva;
const Agenda = require("@models/agenda/Agenda");

async function listarReservasPorStatus(req, res) {
    try {
        let id_agenda = req.params.id_agenda;
        let id_status = req.params.id_status;
        const horarios = await Horario.find({agenda: id_agenda});
        let reservas = []
        horarios.forEach(horario => {
            horario.reservas.forEach(reserva => {
                if (reserva.status == id_status) {
                    reservas.push(reserva);
                }
            })
        });
        return res.status(200).send({"reservas": reservas});

    } catch (error) {
        return res.status(422).send(error.message);
    }
}

module.exports = listarReservasPorStatus;
