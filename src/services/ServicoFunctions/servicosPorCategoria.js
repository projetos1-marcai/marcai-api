const Servico = require('@models/servico/Servico');
const Usuario = require('@models/usuario/Usuario');

async function servicosPorCategoria(req, res) {
    try {
        const servicos = await Servico.find({categoria: req.params.id_categoria});
        let servicos_full = []

        for (let index = 0; index < servicos.length; index++) {
            let id_fornecedor = servicos[index].fornecedor;
            let fornecedor = await Usuario.findById({_id: id_fornecedor})
            let nome_fornecedor = fornecedor.nome;
            servicos_full.push({"servico":servicos[index], "fornecedor":nome_fornecedor, "id_fornecedor": id_fornecedor})
        }
    
        return res.status(200).send({"servicos": servicos_full});

    } catch (error) {
        return res.status(422).send(error.message);
    }
}

module.exports = servicosPorCategoria;
