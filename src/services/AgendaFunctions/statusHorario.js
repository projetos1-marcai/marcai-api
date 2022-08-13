const Horario = require('@models/agenda/Horario').Horario;
const Reserva = require('@models/agenda/Reserva').Reserva;
const Agenda = require("@models/agenda/Agenda");

async function statusHorario(req, res) {

    try {
        
        let reserva = await Reserva.findById({_id: id_reserva});
        let horario = await Horario.findById({_id: id_horario});
        let agenda = await Agenda.findById({_id: horario.agenda});

        if (!req.user.servicos.includes(agenda.servico)) return res.status(404).send({"message": 'Apenas o fornecedor do serviço pode aceitar uma reserva.'});

        let id_reserva = req.params.id;
        let id_status = req.params.status;

        let id_horario = reserva.horario;
        reserva.status = id_status;
        reserva.save();

        horario.reservas = horario.reservas.filter(reserva => reserva._id.toString() != id_reserva);
        horario.reservas.push(reserva);
        if (id_status == 3){
            horario.disponivel = false;
        }
        horario.save();

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
        return res.status(404).send({"msg": "Problema na alteração do status da reserva."});
    }
    
}

module.exports = statusHorario;
