const Avaliacao = require('@models/servico/Avaliacao');
const Servico = require('@models/servico/Servico');

async function avaliarServico(req, res) {
    try {
        let { id_servico } = req.params;
        let { nota } = req.body;
        nota = parseFloat(nota)
        let id_usuario = req.user._id.toString()

        let ja_avaliou = await Avaliacao.find({
            servico: id_servico,
            avaliador: id_usuario
        })

        if (ja_avaliou.length != 0) {
            let id_avaliacao = ja_avaliou[0]._id.toString()
            await Avaliacao.findByIdAndUpdate(
                {_id: id_avaliacao}, 
                {nota: nota}
            )
        } else {
            await Avaliacao.create({
                servico: id_servico,
                avaliador: id_usuario,
                nota: nota
            })
        }

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

module.exports = avaliarServico;
