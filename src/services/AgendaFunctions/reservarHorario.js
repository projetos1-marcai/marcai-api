const Horario = require('@models/agenda/Horario').Horario;
const Agenda = require("@models/agenda/Agenda");
const Reserva = require('@models/agenda/Reserva').Reserva;

async function reservarHorario(req, res) {

    try {
        let id_horario = req.params.id;

        let reserva = await Reserva.create({
            cliente: "ID do Cliente",
            horario: id_horario,
            status: 1 // 1 = Pendente
        })

        let horario = await Horario.findOneAndUpdate({_id: id_horario}, {
            reserva: (!reserva) ? null : reserva
        })

        // Necessário atualizar o horário da Agenda do Serviço
        // Passando: ID do Horários + Dia desse Horário
        // let agenda = await Agenda.findOneAndUpdate({})

        return res.status(200).send({"horario": horario});
    } catch (error) {
        return res.status(404).send({"msg": "Problema na criação da reserva."});
    }
    
}

module.exports = reservarHorario;
