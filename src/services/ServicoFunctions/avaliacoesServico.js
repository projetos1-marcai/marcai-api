const Avaliacao = require('@models/servico/Avaliacao');
const Servico = require('@models/servico/Servico');

async function avaliacoesServico(req, res) {
    try {
        let { id_servico } = req.params;

        let avaliacoes = await Avaliacao.find({id_servico: id_servico})
        let media = await Avaliacao.aggregate(
            [{$group: {_id:null, pop: {$avg:"$nota"} } }]
        )
        media = media[0]["pop"]

        return res.status(200).send({"avaliacoes":avaliacoes, "media":media});
    } catch (error) {
        return res.status(422).send({"error":error});
    }
}

module.exports = avaliacoesServico;
