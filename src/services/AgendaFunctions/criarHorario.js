const Horario = require('@models/agenda/Horario').Horario;
const Agenda = require("@models/agenda/Agenda");
const getHoraObj = require("./utils/getHoraObj");
const Servico = require("@models/servico/Servico");

async function criarHorario(req, res) {
    let servico = await Servico.findById(req.body.servico);
    let id_servico = servico._id.toString();
    let agenda = await Agenda.findOne({servico: id_servico});

    const {
        dia,
        inicio,
        fim
    } = req.body;

    let h1 = getHoraObj(inicio)
    let h2 = getHoraObj(fim)

    let id_agenda = agenda._id.toString();
    const horario = await Horario.create({ 
        agenda: id_agenda,
        inicio: h1,
        fim: h2
    });

    try {
        agenda[dia].push(horario);
        agenda.save()

    }
    catch (e) {
        return res.status(404).send({'err': e})
    }

    return res.status(201).send({"horario": horario});
}

module.exports = criarHorario;


