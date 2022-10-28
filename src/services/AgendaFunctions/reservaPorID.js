const Horario = require('@models/agenda/Horario').Horario;
const Agenda = require('@models/agenda/Agenda');
const Servico = require('@models/servico/Servico');
const Reserva = require('@models/agenda/Reserva').Reserva;

async function reservaPorID(req, res) {
    try {

        let reserva = await Reserva.findById({_id: req.params.id_reserva});
        let horario = await Horario.findById({_id: reserva.horario});
        let agenda = await Agenda.findById({_id: horario.agenda});

        if (req.user._id.toString() == reserva.cliente || req.user.servicos.includes(agenda.servico)) {
            let dia_horario = horario.dia;
            let id_servico = agenda.servico;
            let servico = await Servico.findById({_id: id_servico})
            let servico_nome = servico.titulo;
            return res.status(200).send({"reserva": reserva, "dia":dia_horario, "servico":servico_nome, "id_servico":id_servico});
        }
        
    } catch (error) {
        return res.status(422).send({"error":"Reserva não encontrada"});
    }
}

module.exports = reservaPorID;
