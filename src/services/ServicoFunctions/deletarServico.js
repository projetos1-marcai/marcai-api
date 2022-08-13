const Servico = require('@models/servico/Servico');
const Endereco = require('@models/servico/Endereco').Endereco;
const Agenda = require('@models/agenda/Agenda');
const Horario = require('@models/agenda/Horario').Horario;
const Reserva = require('@models/agenda/Reserva').Reserva;

async function deletarServico(req, res) {

    let servico = await Servico.findByIdAndDelete({_id: req.params.id});
    if (!servico) return res.status(404).send({"message": 'Falha ao encontrar Serviço.', "e": e});

    let idEndereco = servico.endereco._id.toString().trim()
    let endereco = await Endereco.findByIdAndDelete({_id: idEndereco});
    if (!endereco) return res.status(404).send({"message": 'Falha ao remover o Endereço desse Serviço.', "e": e});

    let agenda = await Agenda.findByIdAndDelete({_id: servico.agenda});
    if (!agenda) return res.status(404).send({"message": 'Falha ao remover a Agenda desse Serviço.', "e": e});

    let dias = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
    let i = 0;
    let horario;
    let horarioAgendado;
    let idHorario;
    let reservas;
    let reserva;
    while (i < 7) {
        horarios = agenda[dias[i]];
        for (let j = 0 ; j < horarios.length ; j++) {
            horarioAgendado = horarios[j];
            idHorario = horarioAgendado._id.toString().trim();
            horario = await Horario.findByIdAndDelete({_id: idHorario});
            if (!horario) return res.status(404).send({"message": 'Falha ao remover Horário da Agenda desse Serviço.', "e": e});

            reservas = horario.reservas;
            for (let p = 0 ; p < reservas.length ; p++) {
                if (reservas[p].status != 2) {
                    reserva = await Reserva.findByIdAndDelete({_id: reservas[p]._id});
                    if (!reserva) return res.status(404).send({"message": 'Falha ao remover Reserva do Horário da Agenda desse Serviço.', "e": e});
                }
            }
        }
        i++;
    }

    return res.status(200).send({"message": 'Serviço removido com sucesso.'});
}

module.exports = deletarServico;
