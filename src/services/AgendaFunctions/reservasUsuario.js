const Horario = require('@models/agenda/Horario').Horario;
const Agenda = require('@models/agenda/Agenda');
const Servico = require('@models/servico/Servico');
const Reserva = require('@models/agenda/Reserva').Reserva;

async function reservaPorID(req, res) {
    try {
        let id_usuario = req.user._id.toString()
        let reservas = await Reserva.find({usuario: id_usuario});
        let reservas_full = []

        for (let index = 0; index < reservas.length; index++) {
            let reserva = reservas[index]
            let horario = await Horario.findById({_id: reserva.horario});
            let agenda = await Agenda.findById({_id: horario.agenda});
    
            let dia_horario = horario.dia;
            let id_servico = agenda.servico;
            let servico = await Servico.findById({_id: id_servico})
            let servico_nome = servico.titulo;

            reservas_full.push({"reserva": reserva, "dia":dia_horario, "servico":servico_nome, "id_servico":id_servico})
        }
            
        return res.status(200).send({"reservas": reservas_full});
    
    } catch (error) {
        return res.status(422).send({"error":error});
    }
}

module.exports = reservaPorID;
