const Horario = require('@models/agenda/Horario').Horario;
const Agenda = require('@models/agenda/Agenda');
const Reserva = require('@models/agenda/Reserva').Reserva;

async function reservaPorID(req, res) {
    try {
        let reserva = await Reserva.findById({_id: req.params.id});
        let horario = await Horario.findById({_id: reserva.horario});
        let agenda = await Agenda.findById({_id: horario.agenda});

        if (req.user.servicos.includes(agenda.servico)) return res.status(404).send({"message": 'O fornecedor não pode recuperar uma reserva de outro fornecedor.'});
        
        return res.status(200).send({"reserva": reserva});
    } catch (error) {
        console.log(error);
        return res.status(422).send({"error":"Reserva não encontrada"});
    }
}

module.exports = reservaPorID;
