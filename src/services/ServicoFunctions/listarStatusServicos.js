const Status = require('@models/servico/StatusENUM');

async function listarStatusServicos(req, res) {

    return res.status(200).send({"status": Status});
}

module.exports = listarStatusServicos;
