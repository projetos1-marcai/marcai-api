const Horario = require('@models/agenda/Horario').Horario;
const Agenda = require("@models/agenda/Agenda");

async function removerHorario(req, res) {

    const {
        id_servico,
        dia
    } = req.body;

    try {
        let id_horario = req.params.id;
        let agenda = await Agenda.findOne({servico: id_servico});
        let horarios = agenda[dia];
        horarios = horarios.filter(horario => horario._id.toString() != id_horario);
        
        agenda = await Agenda.findOneAndUpdate({servico: id_servico}, {
            segunda: (dia == "segunda") ? horarios : agenda.segunda,
            terca:   (dia == "terca")   ? horarios : agenda.terca,
            quarta:  (dia == "quarta")  ? horarios : agenda.quarta,
            quinta:  (dia == "quinta")  ? horarios : agenda.quinta,
            sexta:   (dia == "sexta")   ? horarios : agenda.sexta,
            sabado:  (dia == "sabado")  ? horarios : agenda.sabado,
            domingo: (dia == "domingo") ? horarios : agenda.domingo
        })
        await Horario.findByIdAndDelete({ _id: id_horario });
        return res.status(200).send({"agenda": agenda});  
    } catch (error) {
        return res.status(404).send({"msg": "Horário não encontrado"});
    }
    
}

module.exports = removerHorario;
