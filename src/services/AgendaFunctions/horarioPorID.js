const Horario = require('@models/agenda/Horario').Horario;
const Agenda = require('@models/agenda/Agenda');

async function horarioPorID(req, res) {
    try {
        let horario = await Horario.findById({_id: req.params.id});
        let agenda = await Agenda.findById({_id: horario.agenda});

        if (req.user.servicos.includes(agenda.servico)) return res.status(404).send({"message": 'O fornecedor não pode recuperar um horário de outro fornecedor.'});
        
        return res.status(200).send({"horario": horario});
    } catch (error) {
        console.log(error);
        return res.status(422).send({"error":"Horário não encontrado"});
    }
}

module.exports = horarioPorID;
