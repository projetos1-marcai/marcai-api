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

        let horario = await Horario.findById({_id: id_horario});

        horario.reservas.push(reserva);
        horario.save();

        let agenda = await Agenda.findById({_id: horario.agenda});

        // Recuperando horários de um dia específico da Agenda
        let horarios = agenda[horario.dia];

        horario = await Horario.findById({_id: id_horario});
        // Identificando o horário específico, para ter a Reserva atualizada
        horarios = horarios.filter((horario) => horario._id != id_horario);
        horarios.push(horario)

        // Atualizando horários de um dia específico da Agenda
        agenda[horario.dia] = horarios
        agenda.save()

        return res.status(200).send({"horario": horario});
    } catch (error) {
        return res.status(404).send({"msg": "Problema na criação da reserva."});
    }
    
}

module.exports = reservarHorario;
